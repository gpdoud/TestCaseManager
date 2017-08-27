const TestCaseManager = require('./TestCaseManager');
const Fraction2Decimal = require('./Fraction2Decimal');

function Test(num, den, exp) {
	var act = "undefined";
	try {
		act = Fraction2Decimal.Fraction2Decimal(num,den);
	} catch(act) {
	}
	return TestCaseManager.testResult(exp, act);
}
function Test_neg100_div_neg100() {
	return Test(-100, -100, 1.0);
}
function Test_neg100_div_neg50() {
	return Test(-100, -50, 2.0);
}
function Test_neg100_div_zero() {
	return Test(-100, 0, "undefined");
}
function Test_neg100_div_pos50() {
	return Test(-100, 50, -2.0);
}
function Test_neg100_div_pos100() {
	return Test(-100, 100, -1.0);
}
function Test_neg50_div_neg100() {
	return Test(-50, -100, 0.5);
}
function Test_neg50_div_neg50() {
	return Test(-50, -50, 1.0);
}
function Test_neg50_div_zero() {
	return Test(-50, 0, "undefined");
}
function Test_neg50_div_pos50() {
	return Test(-50, 50, -1.0);
}
function Test_neg50_div_pos100() {
	return Test(-50, 100, -0.5);
}
var testCases = [
	Test_neg100_div_neg100,
	Test_neg100_div_neg50,
	Test_neg100_div_zero,
	Test_neg100_div_pos50,
	Test_neg100_div_pos100,
	Test_neg50_div_neg100,
	Test_neg50_div_neg50,
	Test_neg50_div_zero,
	Test_neg50_div_pos50,
	Test_neg50_div_pos100
];

TestCaseManager.runTests(testCases);