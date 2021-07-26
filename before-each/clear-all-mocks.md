# Clear all mocks before each run (clear-all-mocks)

Each individual test should be independent of each other, but Jest keeps mock states consistent between test runs on the same test suite. For example, if a test uses one instance of jest.fn() on multiple tests, the call count will increase as each test runs. This could cause test issue if different tests expects different output values or different call counts.

To avoid this issue, call `jest.clearAllMocks()` before each test run.

## Notes

* Contrast this with `jest.resetAllMocks()` which will remove mock implementations as well. Often mock implementation is declared during construction and expected to last for the whole suite.

## Links

* [Sample test](clear-all-mocks.spec.ts)
* [Jest documentation (jest.clearAllMocks())](https://jestjs.io/docs/jest-object#jestclearallmocks)
