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
			label: 'Toggle Live/Test',

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
		actions['set_automation_status'] = {
			label: 'Set Mic Automation',
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

		return actions
	}
}
