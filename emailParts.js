// Find the parts of an email address (before/after @)

let emailParts = email => {
		return email.toLowerCase().split("@");
}
