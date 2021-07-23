test("", () =>
{
    // Arrange
    const mockMediaStream = {};
    const mockMediaStreamCtor = jest.fn().mockImplementation(() => mockMediaStream);
    Object.defineProperty(global, "MediaStream", {
        value: mockMediaStreamCtor
    });

    // Act
    const mediaStream = new MediaStream();

    // Assert
    expect(mediaStream).toBe(mockMediaStream);
});

test("", () =>
{
    // Arrange
    const mockRandomNumber = 2;
    const mockMath = {
        random: jest.fn().mockReturnValue(mockRandomNumber)
    };
    Object.defineProperty(global, "Math", {
        value: mockMath
    });

    // Act
    const actualRandomNumber = Math.random();

    // Assert
    expect(actualRandomNumber).toBe(mockRandomNumber);
});
