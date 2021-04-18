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
			label: 'Next agenda item',

		}
		actions['previous_agenda'] = {
			label: 'Previous agenda item',

		}
		actions['toggle_mode'] = {
			label: 'Toggle Live/Test',

		}

		return actions
	}
}
