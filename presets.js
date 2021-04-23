exports.getPresets = function () {
	var presets = [
		{
			category: 'webcast-control',
			label: 'Start Webcast',
			bank: {
				style: 'text',
				text: 'Start Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'start_webcast',
			}],
			feedbacks: [{
				type: 'encoding_status',
			}],
		},
		{
			category: 'webcast-control',
			label: 'Stop Webcast',
			bank: {
				style: 'text',
				text: 'Stop Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'stop_webcast',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Pause Webcast',
			bank: {
				style: 'text',
				text: 'Pause Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'pause_webcast',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Toggle Mode',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:webcast_type) Webcast`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'toggle_mode',
			}],

		},
		{
			category: 'webcast-info',
			label: 'Duration',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:duration)`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}

		},
		{
			category: 'webcast-info',
			label: 'Caption',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:caption)`,
				size: '7',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}
		},
		{
			category: 'webcast-info',
			label: 'Agenda Item',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:agenda_item)`,
				size: '7',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}
		},
		{
			category: 'webcast-info',
			label: 'Encoding Status',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:encoding_status)`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),
			},
			feedbacks: [{
				type: 'encoding_status',
			}],
		},
		{
			category: 'webcast-control',
			label: 'Previous Agenda',
			bank: {
				style: 'text',
				text: 'Previous Agenda',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'previous_agenda',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Next Agenda',
			bank: {
				style: 'text',
				text: 'Next Agenda',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'next_agenda',
			}],

		},
		{
			category: 'hybrid-controls',
			label: 'Local',
			bank: {
				style: 'text',
				text: 'Local',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '0'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '0'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Remote',
			bank: {
				style: 'text',
				text: 'Remote',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '1'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '1'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Mix 1',
			bank: {
				style: 'text',
				text: 'Mix 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '2'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '2'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Mix 2',
			bank: {
				style: 'text',
				text: 'Mix 2',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '3'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '3'
				}
			}],
		},

	]

	return presets;
}

// {
// 	category: 'webcast-controls',
// 	label: 'Start Webcast',
// 	bank: {
// 		style: 'text',
// 		text: `$(${this.config.label}:in1_name)`,
// 		size: '18',
// 		color: this.rgb(255, 255, 255),
// 		bgcolor: this.rgb(0, 0, 0),

// 	},
// 	actions: [{
// 		action: 'switch_aux1',
// 		options: {
// 			switchaux1: '1'
// 		}
// 	}],
// 	feedbacks: [{
// 		type: 'aux1_in',
// 		options: {
// 			aux1_in: '1'
// 		}
// 	}],
// },