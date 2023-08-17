module.exports = function reverse(n) {
	const absoluteValue = Math.abs(n);
	const stringValue = String(absoluteValue);
	const arrayValue = stringValue.split('');
	const reverseValue = arrayValue.reverse();
	const joinValue = reverseValue.join('');

	return joinValue;
}
