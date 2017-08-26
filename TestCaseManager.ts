export class TestCaseManager {

	public testResult(expected:boolean, actual:boolean, desc:string = null): any {
		return {
			expected: expected,
			actual: actual,
			desc: desc
		}
	}
	public runTests(tests:Function[]): boolean {

		var testSuite = true;
		for(let test of tests) {
			var rc = test();
			console.log("Test:", test.prototype.name, "expected[", rc.expected, "],actual[", rc.actual, 
				"],result[", rc.expected == rc.actual ? "passed ]" : "failed ]");
			testSuite = testSuite && (rc.expected == rc.actual);
		}
		return testSuite;

	}
}