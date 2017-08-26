import { TestCaseManager } from './TestCaseManager';

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


var testCase = runTests([test1, test2, test3, test4]);
console.log("Test suite result[", testCase ? "passed ]" : "failed ]");