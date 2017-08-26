function test1() {
	return testResult(true, true);
}
function test2() {
	return testResult(true, false);
}
function test3() {
	return testResult(false, true);
}
function test4() {
	return testResult(false, false);
}

function testResult(expected, actual, desc = null) {
	return {
		expected: expected,
		actual: actual,
		desc: desc
	}
}
function runTests(tests) {

	var testSuite = true;
	for(test of tests) {
		var rc = test();
		console.log("Test:", test.name, "expected[", rc.expected, "],actual[", rc.actual, 
			"],result[", rc.expected == rc.actual ? "passed ]" : "failed ]");
		testSuite = testSuite && (rc.expected == rc.actual);
	}
	return testSuite;

}

var testCase = runTests([test1, test2, test3, test4]);
console.log("Test suite result[", testCase ? "passed ]" : "failed ]");