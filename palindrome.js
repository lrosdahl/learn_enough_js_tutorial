// Function to find if a word or phrase is a palindrome

// Reverses a string.
function reverse(string) {
		return Array.from(string).reverse().join("");
}

function Phrase(content) {
		this.content = content;

		// Return a lowercase string
		this.processor = function(string) {
				return string.toLowerCase();
		}

		// Return processed content
		this.processedContent = function() {
				return this.processor(this.content);
		}

		// Returns true for a palindrome, false otherwise.
		this.palindrome = function palindrome() {
				return this.processedContent() === reverse(this.processedContent());
		}
}

function TranslatedPhrase(content, translation) {
		this.content = content;
		this.translation = translation;

		// Returns true for a palindrome, false otherwise.
		this.processedContent = function() {
				return this.processor(this.translation);
		}
}


TranslatedPhrase.prototype = new Phrase();

// *********************************

// fat arrow functions
//let palindrome = string => {
//		return string === reverse(string);
//}
//
//let reverse = string => {
//		return string.toLowerCase().split("").reverse().join("");
//}
