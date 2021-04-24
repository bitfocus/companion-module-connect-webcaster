module.exports = {

	getActions() {
		var actions = {}
		actions['start_webcast'] = {
			label: 'Start Webcast',

		}
		actions['stop_webcast'] = {
			label: 'Stop Webcast',

		}
		actions['pause_webcast'] = {
			label: 'Pause Webcast',

		}
		actions['next_agenda'] = {
			label: 'Next Agenda Item',

		}
		actions['previous_agenda'] = {
			label: 'Previous Agenda Item',

		}
		actions['toggle_mode'] = {
			label: 'Toggle Live/Test Mode',

		}
		actions['set_live_mode'] = {
			label: 'Set Live Mode',

		}
		actions['set_test_mode'] = {
			label: 'Set Test Mode',

		}
		actions['set_hybrid_index'] = {
			label: 'Select Hybrid View',
			options: [
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
			]
		}
		actions['set_jit_slide'] = {
			label: 'Set JIT Slides ON/OFF',
			options: [
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
			]
		}
		actions['toggle_jit_slide'] = {
			label: 'Toggle JIT Slides',

		}
		actions['set_automation_status'] = {
			label: 'Set Mic Automation ON/OFF',
			options: [
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
			]
		}
		actions['toggle_automation'] = {
			label: 'Toggle Mic Automation',

		}
		actions['set_selected_seat'] = {
			label: 'Set Selected Seat',
			options: [
				{
					type: 'number',
					label: 'Seat ID',
					id: 'seat',
					default: '1',
					min: '0',
					max: '99999'
				}
			]
		}

		return actions
	}
}
