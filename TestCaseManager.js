"use strict";
exports.__esModule = true;
var TestCaseManager = (function () {
    function TestCaseManager() {
    }
    TestCaseManager.prototype.testResult = function (expected, actual, desc) {
        if (desc === void 0) { desc = null; }
        return {
            expected: expected,
            actual: actual,
            desc: desc
        };
    };
    TestCaseManager.prototype.runTests = function (tests) {
        var testSuite = true;
        for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
            var test = tests_1[_i];
            var rc = test();
            console.log("Test:", test.prototype.name, "expected[", rc.expected, "],actual[", rc.actual, "],result[", rc.expected == rc.actual ? "passed ]" : "failed ]");
            testSuite = testSuite && (rc.expected == rc.actual);
        }
        return testSuite;
    };
    return TestCaseManager;
}());
exports.TestCaseManager = TestCaseManager;
