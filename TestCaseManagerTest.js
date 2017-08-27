const TestCaseManager = require('./TestCaseManager');

function test1() {
	return TestCaseManager.testResult(true, true);
}

TestCaseManager.runTests([test1]);