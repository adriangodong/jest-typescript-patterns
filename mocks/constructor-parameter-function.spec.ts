// Make this a module.
export {}

class TestCaller
{
    constructor(onCreated: () => void)
    {
        onCreated();
    }
}

test("TestCaller.ctor() should call onCreated callback", () =>
{
    // Arrange
    const mockHandleCreated = jest.fn();

    // Act
    new TestCaller(mockHandleCreated);

    // Assert
    expect(mockHandleCreated).toHaveBeenCalledTimes(1);
});
