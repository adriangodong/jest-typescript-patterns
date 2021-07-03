test("console functions should not log to console", () =>
{
    // Arrange
    const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => void 0);

    const consoleWarnSpy = jest
        .spyOn(console, "warn")
        .mockImplementation(() => void 0);

    const consoleInfoSpy = jest
        .spyOn(console, "info")
        .mockImplementation(() => void 0);

    const consoleLogSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => void 0);

    const consoleDebugSpy = jest
        .spyOn(console, "debug")
        .mockImplementation(() => void 0);

    // Act
    console.error("console.error");
    console.warn("console.warn");
    console.info("console.info");
    console.log("console.log");
    console.debug("console.debug");

    // Assert
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
});
