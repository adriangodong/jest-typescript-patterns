/**
 * @jest-environment jsdom
 */

test("Create MediaStream should not fail", () =>
{
    // Arrange
    const mockMediaStream = {};
    const mockMediaStreamCtor = jest.fn().mockImplementation(() => mockMediaStream);
    Object.defineProperty(window, "MediaStream", {
        value: mockMediaStreamCtor
    });

    // Act
    const mediaStream = new MediaStream();

    // Assert
    expect(mediaStream).toBe(mockMediaStream);
});

test("Math.random should be random", () =>
{
    // Arrange
    const mockRandomNumber = 2;
    const mockMath = {
        random: jest.fn().mockReturnValue(mockRandomNumber)
    };
    Object.defineProperty(window, "Math", {
        value: mockMath
    });

    // Act
    const actualRandomNumber = Math.random();

    // Assert
    expect(actualRandomNumber).toBe(mockRandomNumber);
});
