# Require expect.hasAssertions() for each test (require-has-assertions)

According to the spirit of Test Driven Development, every test case has to start with a failing result. In case of asynchronous code, often the callback was never executed or tested, and test is passing unexpectedly.

To avoid this issue, always call `expect.hasAssertions()` before each test. Tests that don't have any assertion (call to `expect()` never execute) will fail.

## Links

* [Sample test](require-has-assertions.spec.ts)
* [Jest documentation (expect.hasAssertions())](https://jestjs.io/docs/expect#expecthasassertions)
