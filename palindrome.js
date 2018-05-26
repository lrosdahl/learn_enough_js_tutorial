// Function to find if a word or phrase is a palindrome

let palindrome = string => {
		return string === reverse(string);
}

let reverse = string => {
		return string.toLowerCase().split("").reverse().join("");
}

function Phrase(content) {
		this.content = content;
}
