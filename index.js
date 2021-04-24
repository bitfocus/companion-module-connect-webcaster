var instance_skel = require('../../instance_skel');
var actions = require('./actions');
var presets = require('./presets');

var feedbacks = require('./feedbacks');
const axios = require('axios');

var debug;
var log;

class instance extends instance_skel {


    constructor(system, id, config) {
        super(system, id, config)

        this.statusInterval;
        this.encodingState;
        this.webcastStatus;

        Object.assign(this, {
            ...actions,
            ...feedbacks,
            ...presets,
        })

        this.actions()
    }

    actions(system) {
        this.setActions(this.getActions());
    }

    config_fields() {

        return [{
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
            label: 'Remote Control Port',
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
                    cmd = {
                        method: 'startWebcast'
                    };
                }
                break
            case 'stop_webcast':
                if (this.encodingState) {
                    cmd = {
                        method: 'stopWebcast'
                    };
                }
                break
            case 'pause_webcast':
                if (!this.encodingState) {
                    cmd = {
                        method: 'pauseWebcast'
                    };
                }
                break
            case 'toggle_mode':
                //Toggle between live and test mode
                if (!this.encodingState) {
                    if (this.webcastStatus.test_mode) {
                        cmd = {
                            "method": "setWebcast",
                            "params": [{
                                "webcast_id": this.webcastStatus.webcast_id,
                                "test_mode": false
                            }]
                        };
                    } else {
                        cmd = {
                            "method": "setWebcast",
                            "params": [{
                                "webcast_id": this.webcastStatus.webcast_id,
                                "test_mode": true
                            }]
                        };
                    }
                }
                break
            case 'set_live_mode':
                if (!this.encodingState) {
                    cmd = {
                        "method": "setWebcast",
                        "params": [{
                            "webcast_id": this.webcastStatus.webcast_id,
                            "test_mode": false
                        }]
                    };
                }
                break
            case 'set_test_mode':
                if (!this.encodingState) {
                    cmd = {
                        "method": "setWebcast",
                        "params": [{
                            "webcast_id": this.webcastStatus.webcast_id,
                            "test_mode": true
                        }]
                    };
                }
                break
            case 'next_agenda':
                for (let i = 0; i < this.webcastStatus.agenda_points.Items.length; i++) {
                    if (this.webcastStatus.agenda_id == 0) {
                        //If the agenda item is 0 set the first agenda item in the list
                        if (typeof this.webcastStatus.agenda_points.Items[0] !== 'undefined') {
                            cmd = {
                                "method": "setAgendaPoint",
                                "params": [{
                                    "webcast_id": this.webcastStatus.webcast_id,
                                    "agenda_id": this.webcastStatus.agenda_points.Items[0].id
                                }]
                            }
                        }
                        break
                    } else if (this.webcastStatus.agenda_points.Items[i].id == this.webcastStatus.agenda_id) {
                        //Current agenda item found
                        if (typeof this.webcastStatus.agenda_points.Items[i + 1] !== 'undefined') {
                            cmd = {
                                "method": "setAgendaPoint",
                                "params": [{
                                    "webcast_id": this.webcastStatus.webcast_id,
                                    "agenda_id": this.webcastStatus.agenda_points.Items[i + 1].id
                                }]
                            }
                        }
                        break
                    }
                }
                break
            case 'previous_agenda':
                for (let i = 0; i < this.webcastStatus.agenda_points.Items.length; i++) {
                    if (this.webcastStatus.agenda_points.Items[i].id == this.webcastStatus.agenda_id) {
                        //Current agenda item found
                        if (typeof this.webcastStatus.agenda_points.Items[i - 1] !== 'undefined') {
                            cmd = {
                                "method": "setAgendaPoint",
                                "params": [{
                                    "webcast_id": this.webcastStatus.webcast_id,
                                    "agenda_id": this.webcastStatus.agenda_points.Items[i - 1].id
                                }]
                            }
                        }
                        break
                    }
                }
                break
            case 'set_hybrid_index':
                cmd = {
                    "method": "setHybridIndex",
                    "params": [{
                        "hybrid_index": opt.hybrid_id
                    }]
                }
                break;
            case 'set_automation_status':
                if (opt.state == 1) {
                    cmd = {
                        "method": "setAutomationStatus",
                        "params": [{
                            "automation_on": true
                        }]
                    }
                } else {
                    cmd = {
                        "method": "setAutomationStatus",
                        "params": [{
                            "automation_on": false
                        }]
                    }
                }
                break;
            case 'toggle_automation':
                if (this.webcastStatus.automation_on) {
                    cmd = {
                        "method": "setAutomationStatus",
                        "params": [{
                            "automation_on": false
                        }]
                    }
                } else {
                    cmd = {
                        "method": "setAutomationStatus",
                        "params": [{
                            "automation_on": true
                        }]
                    }
                }
                break;
            case 'set_selected_seat':
                cmd = {
                    "method": "setSelectedSeat",
                    "params": [{
                        "layout_id": opt.seat
                    }]
                }
                break;

            case 'set_jit_slide':
                if (opt.state == 1) {
                    cmd = "/json_api?method=getJITslide&jitslide_id=-1&&jit_slide_on=true";
                } else {
                    cmd = "/json_api?method=getJITslide&jitslide_id=-1&&jit_slide_on=false";
                }
                axios.get(cmd)
                    .then(function (response) {
                        status(self.STATE_OK);
                    })
                    .catch(function (error) {
                        status(self.STATUS_ERROR, error);
                    });
                break;
                case 'toggle_jit_slide':
                    if (this.webcastStatus.is_jitslide_on) {
                        cmd = "/json_api?method=getJITslide&jitslide_id=-1&&jit_slide_on=false";
                    } else {
                        cmd = "/json_api?method=getJITslide&jitslide_id=-1&&jit_slide_on=true";
                    }
                    axios.get(cmd)
                        .then(function (response) {
                            status(self.STATE_OK);
                        })
                        .catch(function (error) {
                            status(self.STATUS_ERROR, error);
                        });
                    break;
        }

        if (cmd !== undefined && id != "set_jit_slide"  && id != "toggle_jit_slide") {
            axios.post('/json_api', cmd)
                .then(function (response) {
                    //console.log(response.data);
                    status(self.STATE_OK);
                })
                .catch(function (error) {
                    //console.log(error);
                    status(self.STATUS_ERROR, error);
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
        this.init_presets();


        axios.defaults.baseURL = 'http://' + this.config.host + ':' + this.config.port;

        self.statusInterval = setInterval(function () {
            self.getStatus();
        }, 500);

    }


    getStatus() {
        var self = this;
        axios.post('/json_api', {
            method: 'getStatus'
        })
            .then(function (response) {
                self.webcastStatus = response.data;

                if (self.webcastStatus.encoding_status != '') {
                    self.encodingState = true;
                } else {
                    self.encodingState = false;
                }


                self.setVariable('webcast_type', self.webcastStatus.webcast_type);
                self.setVariable('encoding_status', self.webcastStatus.encoding_status);
                self.setVariable('caption', self.webcastStatus.caption_text);
                self.setVariable('duration', self.msToTime(self.webcastStatus.timer_value));

                self.checkFeedbacks('encoding_status');
                self.checkFeedbacks('hybrid_index');
                self.checkFeedbacks('automation_status');
                self.checkFeedbacks('selected_seat');
                self.checkFeedbacks('jit_slides');
                self.checkFeedbacks('webcast_mode');

                //Get current agenda item text
                if (self.webcastStatus.agenda_id == 0) {
                    self.setVariable('agenda_item', "");
                }
                for (let i = 0; i < self.webcastStatus.agenda_points.Items.length; i++) {
                    if (self.webcastStatus.agenda_points.Items[i].id == self.webcastStatus.agenda_id) {
                        //Current agenda item found
                        self.setVariable('agenda_item', self.webcastStatus.agenda_points.Items[i].long);

                        break
                    }
                }
                self.status(self.STATE_OK);

            })
            .catch(function (error) {
                //console.log(error);
                self.status(self.STATUS_ERROR, error);
            });

    }

    msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    updateConfig(config) {

        this.config = config

        axios.defaults.baseURL = 'http://' + this.config.host + ':' + this.config.port;

        this.actions()

    }

    init_feedbacks() {
        this.setFeedbackDefinitions(this.getFeedbacks());
    }

    init_presets() {
        this.setPresetDefinitions(this.getPresets());
    }

    init_variables() {

        var variables = [{
            name: 'encoding_status',
            label: 'Encoding Status'
        },
        {
            name: 'caption',
            label: 'Caption Text'
        },
        {
            name: 'webcast_type',
            label: 'Webcast Type'
        },
        {
            name: 'duration',
            label: 'Encoding Duration'
        },
        {
            name: 'agenda_item',
            label: 'Current Agenda Item text'
        },
        ]

        this.setVariableDefinitions(variables)

    }

}

exports = module.exports = instance;