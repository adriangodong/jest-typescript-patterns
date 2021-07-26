export {};

class Stopwatch
{
    constructor(onTimeUpdate: () => void)
    {
        setInterval(onTimeUpdate, 1000);
    }
}

beforeEach(() =>
{
    // Arrange
    jest.useFakeTimers();
    expect.hasAssertions();
});

test.each([
    [500, 0],
    [1500, 1],
    [2500, 2]
])("Stopwatch should call callback every second", (elapsed, expectedCallbackCount) =>
{
    // Arrange
    const mockHandleTimeUpdate = jest.fn();
    new Stopwatch(mockHandleTimeUpdate);

    // Act
    jest.advanceTimersByTime(elapsed);

    // Assert
    expect(mockHandleTimeUpdate).toHaveBeenCalledTimes(expectedCallbackCount);
});
