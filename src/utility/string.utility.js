/**
 * Convert a UTF8 string to a 24-character hexadecimal string to generate a database document ObjectId.
 *
 * Note: post-conversion, to match the 24-character limit of an ObjectId hexadecimal input value, the hexadecimal return
 * value will either be: (1) the hexadecimal string padded with '0' characters, assuming the input value length is less
 * than 12 characters; or (2) a substring of the hexadecimal string at positions (0, 23), assuming the input value
 * length is greater than 12 characters.
 *
 * Due to this restriction, this function should only be used in cases that the generated hexadecimal value will
 * maintain a guarantee that it is unique within the collection.
 *
 * @param value     a UTF8 string.
 *
 * @returns {string}    a 24-character hexadecimal string.
 */
function toHexadecimal(value) {
	let result = Buffer.from(value, 'utf8').toString('hex');

	if (result.length < 24) {
		result += '000000000000000000000000';
	}

	return result.substring(0, 23);
}

module.exports = { toHexadecimal };