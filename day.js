// Returns the day of the week for the given date.

let day = date => {
		const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return dayOfTheWeek[date.getDay()];
}

