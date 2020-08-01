class CovidTracker {
	async getInfectedCountry(country) {
		const countryResponse = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
		const countryName = await countryResponse.json();

		return countryName;
	}
}

class UI {
	constructor() {
		this.result = document.getElementById('result');
		this.input = document.getElementById('country-input');
	}
	showResult(country) {
		this.result.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
      <h2 class="text-center">PLACES</h2>
      <img src="img/covid.jpg" class="img-fluid mb-2">
        
      </div>
      <div class="col-md-9">
      <h1 class="alert bg-dark">Country: ${country.country}</h1>
      <h3 class="alert bg-danger">Total Cases: ${country.cases}</h3>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item bg-dark text-white">Active Cases: ${country.active} </li>
          <li class="list-group-item bg-light text-black">Critical Cases: ${country.critical} </li>
          <li class="list-group-item bg-dark text-white">Recovered: ${country.recovered}</li>
          <li class="list-group-item bg-light text-black">Total Deaths: ${country.deaths} </li>
          <li class="list-group-item bg-dark text-white">Today Cases: ${country.todayCases} </li>
          <li class="list-group-item bg-light text-black">Today Deaths: ${country.todayDeaths} </li>
          <li class="list-group-item bg-dark text-white">Today Recovered: ${country.todayRecovered}</li>
          <li class="list-group-item bg-light text-black">Total Tests: ${country.tests} </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id="repos"></div>   
    
    `;
	}
	showAlert(message, className) {
		// Clear any remaining alerts
		this.clearAlert();
		// Create Div
		const div = document.createElement('div');
		// Add class
		div.className = className;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get parent
		const container = document.querySelector('.searchContainer');
		// Get search box
		const search = document.querySelector('.search');
		// Insert alert
		container.insertBefore(div, search);
		setTimeout(() => {
			this.clearAlert();
		}, 5000);
	}

	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	clearCountry() {
		this.result.innerHTML = '';
	}

	clearFields() {
		this.input.value = '';
	}
}

export { CovidTracker, UI };
