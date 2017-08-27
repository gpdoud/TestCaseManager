
function testResult(expected, actual, desc = null) {
    return {
        expected: expected,
        actual: actual,
        desc: desc
    }
}

function runTests(tests) {

    var testSuiteResult = true;
    for(test of tests) {
        var rc = test();
        console.log("Test:", test.name, "exp[", rc.expected, "],act[", rc.actual, 
            "],result[", rc.expected == rc.actual ? "PASS ]" : "FAIL ]");
        testSuiteResult = testSuiteResult && (rc.expected == rc.actual);
    }
    return testSuiteResult;

}

