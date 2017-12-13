var BAT_LENGTH=10,
	MIN=-1.0,
	MAX=1.0,
var uint,
	bat_t[],
	bats_t[],
	fit_t,
	bats_fit_t;

	function init_bat( bat_t bat, len){
		for (uint i = 0; i<length; i++){
			bat.push_back(rand_in(MIN, MAX)); 
		}
	}	

	function rand_in(max, min) {

		return min + (Math.random()/((Math.random(max)/(max-min));
	}

	function init_bat(bat_length, float pMIN=MIN, float pMAX=MAX) { 
		var bat;
		for (var i=0; i<bat_length; i++ ) 
			{bat.push_back(rand_in(pMIN, pMAX)); 
		} 
		return bat; 
	}

	function init_population(pop,population_length,bat_length) { 
		for (uint i=0; i< population_length; i++) { 
			pop.push_back( init_bat(bat_length)); 
		} 
	}

	function init_fit(fit,length) { 
		for (uint i=0; i<length; i++) { 
			fit.push_back(FLT_MAX); 
		} 
	}

	function evaluate_population(fit,population, fit_t (fit_fnc)(bat_t) ) { 
		var i=0; 
		arr.forEach(population.begin(), population.end(), [&i, &fit, &fit_fnc](bat_t &bat) { 
			fit[i++] = fit_fnc(bat); 
		} ); 
	}

	display_population_with_fit(bats_t &population, const bats_fit_t &fit){

		int tmp=0;
		std::for_each(population.begin(), population.end(), [&fit, &tmp](bat_t bat) {
			std::for_each(bat.begin(), bat.end(),  [](float i) { std::cout << i << " ";});
			std::cout << "fit: " << fit[tmp++];
			std::cout << std::endl;
		});
	}

	function display_velocities(const std::vector<bat_t> &v) {
		std::for_each(v.begin(), v.end(), [](bat_t vb){ std::for_each(vb.begin(), vb.end(), [](float i){std::cout<<" " << i;}); std::cout << std::endl;});
	}

	bat_t return_best_bat(bats_t population, bats_fit_t fit) {
		bats_fit_t::iterator fit_it = std::min_element(fit.begin(), fit.end());
		uint idx = fit_it - fit.begin();

		return population[idx];
	}
	void display_v(bat_t bat) {
			std::for_each(bat.begin(), bat.end(), print_bat());
			std::cout <<  std::endl;
		}


	void display_bat(bat_t bat, float fit) {
		std::for_each(bat.begin(), bat.end(), print_bat());
		std::cout << " with fit: " << fit <<  std::endl;
	}

	namespace functions {
		float sphere(bat_t &bat) {
				fit_t  fit=0;
				std::for_each(bat.begin(), bat.end(), [&fit](fit_t &i) {fit+=pow(i,2.0);});
				return fit;
		}

		float rastrigin(bat_t &bat) {
			fit_t fit = 0.0;
			float An = 10.0*bat.size();
			fit+=An;
			std::for_each(bat.begin(), bat.end(), [&](fit_t &x) {fit+=pow(x,2.0)-10*cos(2*3.14159265*x); });
			return fit;
		}

	}
}
