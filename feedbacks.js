exports.getFeedbacks = function () {

	let feedbacks = {};


	feedbacks['encoding_status'] = {
		label: 'Set Colour for Encoding Status',
		description: 'Set Colour for Encoding Status',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color for not Encoding',
			id: 'fg_false',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color for not Encoding',
			id: 'bg_false',
			default: this.colours.red,
		}
			, {
			type: 'colorpicker',
			label: 'Foreground color for Encoding',
			id: 'fg_true',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color for Encoding',
			id: 'bg_true',
			default: this.colours.green,
		}
			, {
			type: 'colorpicker',
			label: 'Foreground color for Paused',
			id: 'fg_paused',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color for Paused',
			id: 'bg_paused',
			default: this.colours.orange,
		}
		],
		callback: (feedback, bank) => {
			if (this.encodingState) {
				return {
					color: feedback.options.fg_true,
					bgcolor: feedback.options.bg_true
				};
			} else {
				if (this.webcastStatus.play_state == 1) {
					return {
						color: feedback.options.fg_paused,
						bgcolor: feedback.options.bg_paused
					};
				} else {
					return {
						color: feedback.options.fg_false,
						bgcolor: feedback.options.bg_false
					};
				}
			}
		}
	}

	feedbacks['webcast_mode'] = {
		label: 'Set Colour for Webcast Mode',
		description: 'Set Colour for Webcast Mode',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color for Test Mode',
			id: 'fg_test',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color for Test Mode',
			id: 'bg_test',
			default: this.colours.blue,
		}
			, {
			type: 'colorpicker',
			label: 'Foreground color for Live Mode',
			id: 'fg_live',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color for Live Mode',
			id: 'bg_live',
			default: this.colours.green,
		}
		],
		callback: (feedback, bank) => {
			if (this.webcastStatus.test_mode) {
				return {
					color: feedback.options.fg_test,
					bgcolor: feedback.options.bg_test
				};
			} else {
				return {
					color: feedback.options.fg_live,
					bgcolor: feedback.options.bg_live
				};
			}
		}
	}

	feedbacks['hybrid_index'] = {
		label: 'Set Colour for Hybrid View',
		description: 'Set Colour for current Hybrid View',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color when active',
			id: 'fg',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color when active',
			id: 'bg',
			default: this.colours.orange,
		},
		{
			type: 'dropdown',
			label: 'View',
			id: 'hybrid_id',
			default: '0',
			choices: [
				{ id: '0', label: 'Local' },
				{ id: '1', label: 'Remote' },
				{ id: '2', label: 'Mix 1' },
				{ id: '3', label: 'Mix 2' },
			]
		}
		],
		callback: (feedback, bank) => {
			if (this.webcastStatus.hybrid_id == feedback.options.hybrid_id) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};

			}
		}
	}

	feedbacks['automation_status'] = {
		label: 'Set Colour for Mic Automation ON/OFF',
		description: 'Set Colour for Mic Automation Status ON/OFF',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color when active',
			id: 'fg',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color when active',
			id: 'bg',
			default: this.colours.orange,
		},
		{
			type: 'dropdown',
			label: 'Automation',
			id: 'state',
			default: '0',
			choices: [
				{ id: '0', label: 'OFF' },
				{ id: '1', label: 'ON' },
			]
		}
		],
		callback: (feedback, bank) => {
			if (this.webcastStatus.automation_on == feedback.options.state) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};

			}
		}
	}

	feedbacks['selected_seat'] = {
		label: 'Set Colour for Selected Seat',
		description: 'Set Colour for the currently selected seat',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color when active',
			id: 'fg',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color when active',
			id: 'bg',
			default: this.colours.orange,
		},
		{
			type: 'number',
			label: 'Seat ID',
			id: 'seat',
			default: '1',
			min: '0',
			max: '99999'
		}
		],
		callback: (feedback, bank) => {
			if (this.webcastStatus.selected_seat_id == feedback.options.seat) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};

			}
		}
	}

	feedbacks['jit_slides'] = {
		label: 'Set Colour for JIT Slides ON/OFF',
		description: 'Set Colour for JIT Slides ON/OFF',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color when active',
			id: 'fg',
			default: this.colours.white
		},
		{
			type: 'colorpicker',
			label: 'Background color when active',
			id: 'bg',
			default: this.colours.orange,
		},
		{
			type: 'dropdown',
			label: 'JIT Slides',
			id: 'state',
			default: '0',
			choices: [
				{ id: '0', label: 'OFF' },
				{ id: '1', label: 'ON' },
			]
		}
		],
		callback: (feedback, bank) => {
			if (this.webcastStatus.is_jitslide_on == feedback.options.state) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};

			}
		}
	}

	return feedbacks;

}