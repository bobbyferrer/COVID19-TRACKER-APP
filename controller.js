import { CovidTracker, UI } from './model.js';

const covidtracker = new CovidTracker();
const ui = new UI();

const formInput = document.getElementById('form-input');

formInput.addEventListener('submit', (e) => {
	const searchCountry = document.getElementById('country-input').value;

	if (searchCountry !== '') {
		covidtracker.getInfectedCountry(searchCountry).then((data) => {
			console.log(data);
			if (data.message === "Country not found or doesn't have any cases") {
				// Show alert
				ui.showAlert(
					"Change a few things up and try submitting again. Country not found or doesn't have any cases!",
					'alert alert-dismissible alert-danger'
				);
				ui.clearCountry();
				ui.clearFields();

				console.log('Country not found');
			} else {
				ui.showResult(data);
				ui.clearFields();
				console.log(data);
			}
		});
	} else {
		ui.clearCountry();
	}

	e.preventDefault();
});
