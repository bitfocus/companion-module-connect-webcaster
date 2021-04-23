exports.getFeedbacks = function () {

	let feedbacks = {};
	

	feedbacks['encoding_status'] = {
		label: 'Set Colour for Encoding Status',
		description: 'Set Colour for Encoding Status',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color for not Encoding',
			id: 'fg_false',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for not Encoding',
			id: 'bg_false',
			default: this.rgb(115, 0, 0),
		}
		,{
			type: 'colorpicker',
			label: 'Foreground color for Encoding',
			id: 'fg_true',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for Encoding',
			id: 'bg_true',
			default: this.rgb(0, 75, 0),
		}
		],
		callback: (feedback, bank) => {
			if (this.encodingState) {
				return {
					color: feedback.options.fg_true,
					bgcolor: feedback.options.bg_true
				};
			}else{
				return {
					color: feedback.options.fg_false,
					bgcolor: feedback.options.bg_false
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
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color when active',
			id: 'bg',
			default: this.rgb(248, 185, 51),
		},
		{
			type: 'dropdown',
			label: 'Action',
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

	return feedbacks;

}