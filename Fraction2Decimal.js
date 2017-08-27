module.exports = {

	Fraction2Decimal : function(numerator, denominator) {
		if(denominator === 0) {
			throw "undefined";
		}
		return numerator / denominator;
	}
}