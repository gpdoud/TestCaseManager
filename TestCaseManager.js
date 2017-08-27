module.exports = {

    testResult : function(expected, actual, desc = null) {
        return {
            expected: expected,
            actual: actual,
            desc: desc
        }
    },

    runTests : function(tests) {

        var testSuiteResult = true;
        for(test of tests) {
            var rc = test();
            console.log("Test:", test.name, "exp[", rc.expected, "],act[", rc.actual, 
                "],result[", rc.expected === rc.actual ? "PASS ]" : "FAIL ]");
            testSuiteResult = testSuiteResult && (rc.expected == rc.actual);
        }
        console.log("Tests:", testSuiteResult ? "PASS" : "FAIL");

    }
}