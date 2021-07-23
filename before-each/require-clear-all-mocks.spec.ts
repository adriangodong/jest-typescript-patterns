// Make this a module.
export {}

const mock = jest.fn();

beforeEach(() =>
{
    // Arrange
    // Contrast this with jest.resetAllMocks() which will remove mock implementations as well.
    // Often we declare mock implementation during construction and expect that to last for the whole suite.
    jest.clearAllMocks();
});

test.each([0, 1, 2])("each test must call jest.clearAllMocks to avoid cross-test pollution", () => {
    // Act
    mock();

    // Assert
    // Test will fail without jest.clearAllMocks() because the call count is not reset.
    expect(mock).toHaveBeenCalledTimes(1);
});
