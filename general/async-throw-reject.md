# Handling failures in asynchronous code (async-throw-reject)

When a test function encounters an error, there are multiple ways the caller can receive the error. It will depend on whether the test function is marked as `async` and whether the caller uses `await` when calling the test function.

Jest provides a mechanism to assert an error is received using `expect().toThrow` or `expect().rejects`, but it is not the most ergonomic API since we need to wrap the calling code in a function and pass it to `expect()`. It is recommended to use `try-catch` block instead and do some assertions inside the `catch` block. Combined with [require-has-assertions](../before-each/require-has-assertions.md), unexpected not-fail will result in a test execution error.

## Links

* [Sample test](async-throw-reject.spec.ts)
* [Jest documentation (Testing Asynchronous Code)](https://jestjs.io/docs/asynchronous)
