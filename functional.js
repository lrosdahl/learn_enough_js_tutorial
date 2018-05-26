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

// Return only states that are single words
function singleWord(a) {
		return a.filter(n => n.split(/\s+/).length === 1);
};

// Return only states with 'Dakota' in their names
function dakotas(a) {
		return a.filter(n => n.includes('Dakota'));
}

// Return only two name states with 'Dakota' in their names
function dakotasRegEx(a) {
		return dakotas(a.filter(n => n.split(/\s+/).length === 2));
}

// *************************Reduce*************************

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// This was my solution before I saw what he did
function combine(a, b) {
		return a.reduce((curVal, nextVal) => curVal + nextVal);
}

// His solution
function functionalSum(a) {
		return a.reduce((total, n) => { return total += n });
};

// Imperative solution
function imperativeLengths(states) {
		let lengths = {};
		states.forEach(function(state) {
				lengths[state] = state.length;
		});
		return lengths;
}

function stateLength(states) {
		return states.reduce((lengths, state) => {
				lengths[state] = state.length;
				return lengths;
		}, {});
}

console.log(stateLength(states));
