# Mock console logging functions (mock-console)

When console logging functions are used in test target, Jest will print the log messages to the terminal. This could be distracting when looking for an error during test execution. One common example is logging of caught exception. The error or warning logged isn't an indication of test error.

To avoid this issue, mock console object logging functions and inspect the mock instead.

## Links

* [Sample test](mock-console.spec.ts)
