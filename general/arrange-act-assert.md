# Arrange-Act-Assert (arrange-act-assert)

Separate the test code into three distinct blocks; arrange, act, and assert.

Arrange is the block where all test setups are done. This includes creating the test target if it's an object, creating the mocks if needed, and setting up any prerequisites.

Act is the block where the test target is executed. Ideally this is a one liner calling a function.

Assert is the block where all expectations are tested.

For example:
```typescript
test("Math.random should not return invalid random value", () =>
{
    // Arrange
    const invalidRandomValue = -1;

    // Act
    const actualRandomValue = Math.random();

    // Assert
    expect(actualRandomValue).not.toBe(invalidRandomValue);
});
```

## Links

* [Various links to Arrange-Act-Assert pattern](https://www.bing.com/search?q=arrange-act-assert+pattern)
