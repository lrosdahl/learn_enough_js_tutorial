// Functional programming

// *************************Map*************************
let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

// Make a string URL ready
function urlify(string) {
		return string.toLowerCase().split(/\s+/).join('-')
}

// Take the states and make them URL ready (using urlify)
// then add the URL to each state
function functionalMap(states) {
		let url = "http://example/";
		let stateName = states.map(state => urlify(state));
		return urlState = stateName.map(state => url + state);
}

// console.log(functionalMap(states));

// *************************Filter*************************

function singleWord(a) {
		return a.filter(n => n.split(/\s+/).length === 1);
};

function dakotas(a) {
		return a.filter(n => n.includes('Dakota'));
}

function dakotasRegEx(a) {
		return dakotas(a.filter(n => n.split(/\s+/).length === 2));
}

console.log(dakotasRegEx(states));
