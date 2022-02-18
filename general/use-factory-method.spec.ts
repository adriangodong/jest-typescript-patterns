// Target class.
class TestClass
{
    constructor(readonly id: string, readonly index: number)
    {
    }
}

// Default values for constructor parameter.
const defaultTestClassInit =
{
    id: "id",
    index: 0,
};

// Factory method.
function createTestClass(initOverride?: Partial<typeof defaultTestClassInit>): TestClass
{
    const init = { ...defaultTestClassInit, ...initOverride };
    return new TestClass(init.id, init.index);
}

// Use factory method to test object
test("constructor should not fail", () =>
{
    // Arrange, Act
    const testClass = createTestClass();

    // Assert
    expect(testClass).toBeDefined();
});

// Use factory method parameter to override constructor parameter value.
test("constructor should set id and index", () =>
{
    // Arrange, Act
    const id = "custom-id"
    const index = 1;
    const testClass = createTestClass({ id, index });

    // Assert
    expect(testClass.id).toBe(id);
    expect(testClass.index).toBe(index);
});
