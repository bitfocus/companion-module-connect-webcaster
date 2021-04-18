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

	return feedbacks;

}