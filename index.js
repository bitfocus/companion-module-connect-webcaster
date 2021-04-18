var instance_skel = require('../../instance_skel');
var actions = require('./actions');
var feedbacks = require('./feedbacks');
const axios = require('axios');

var debug;
var log;

class instance extends instance_skel {


	constructor(system, id, config) {
		super(system, id, config)

		this.path;
		this.statusInterval;
		this.encodingState;
		this.webcastStatus;

		Object.assign(this, {
			...actions,
			...feedbacks,
		})

		this.actions()
	}

	actions(system) {
		this.setActions(this.getActions());
	}

	config_fields() {

		return [
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module controls the Public-i Connect Webcaster software.'
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'Encoder IP',
				width: 6,
				regex: this.REGEX_IP
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Remote Port',
				width: 6,
				default: 80,
				regex: this.REGEX_PORT
			}
		]
	}

	action(action) {
		let id = action.action;
		let cmd;
		let opt = action.options;

		switch (id) {
			case 'start_webcast':
				if (!this.encodingState) {
					cmd = { method: 'startWebcast' };
				}
				break
			case 'stop_webcast':
				cmd = { method: 'stopWebcast' };
				break
			case 'pause_webcast':
				cmd = { method: 'pauseWebcast' };
				break
			case 'toggle_mode':
				//Toggle between live and test mode
				if (this.webcastStatus.test_mode) {
					cmd = { "method": "setWebcast", "params": [{ "webcast_id": this.webcastStatus.webcast_id, "test_mode": "false" }] };
				} else {
					cmd = { "method": "setWebcast", "params": [{ "webcast_id": this.webcastStatus.webcast_id, "test_mode": "true" }] };
				}
				break
		}

		if (cmd !== undefined) {

			axios.post('/json_api', cmd)
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	destroy() {
		clearInterval(this.statusInterval);
		debug("destroy", this.id);
	}

	init() {
		debug = this.debug;
		log = this.log;
		var self = this;

		this.init_feedbacks();
		this.init_variables()

		axios.defaults.baseURL = 'http://' + this.config.host;
		axios.defaults.port = this.config.port;

		console.log(axios.defaults.baseURL);

		self.statusInterval = setInterval(function () {
			self.getStatus();
		}, 1000);

	}


	getStatus() {
		var self = this;
		axios.post('/json_api', {
			method: 'getStatus'
		})
			.then(function (response) {
				console.log();

				if (response.data.encoding_status != '') {
					self.encodingState = true;
				} else {
					self.encodingState = false;
				}

				self.webcastStatus = response.data;

				self.setVariable('webcast_type', response.data.webcast_type);
				self.setVariable('encoding_status', response.data.encoding_status);
				self.setVariable('caption', response.data.caption_text);

				self.checkFeedbacks('encoding_status');

				self.status(self.STATE_OK);

			})
			.catch(function (error) {
				console.log(error);
				self.status(self.STATUS_ERROR);
			});

	}

	updateConfig(config) {

		this.config = config

		axios.defaults.baseURL = 'http://' + this.config.host;
		axios.defaults.port = this.config.port;
		this.actions()

	}

	init_feedbacks() {
		this.setFeedbackDefinitions(this.getFeedbacks());
	}

	init_variables() {

		var variables = [
			{ name: 'encoding_status', label: 'Encoding Status' },
			{ name: 'caption', label: 'Caption Text' },
			{ name: 'webcast_type', label: 'Webcast Type' },


		]

		this.setVariableDefinitions(variables)

	}

}

exports = module.exports = instance;
