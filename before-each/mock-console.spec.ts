// Make this file a module.
export { }

function mockConsole(console: Console = globalThis.console):
    {
        mockConsoleError: jest.Mock,
        mockConsoleEarn: jest.Mock,
        mockConsoleInfo: jest.Mock,
        mockConsoleLog: jest.Mock,
        mockConsoleDebug: jest.Mock,
    }
{
    const mockConsoleError = jest.fn();
    const mockConsoleEarn = jest.fn();
    const mockConsoleInfo = jest.fn();
    const mockConsoleLog = jest.fn();
    const mockConsoleDebug = jest.fn();

    console["error"] = mockConsoleError;
    console["warn"] = mockConsoleEarn;
    console["info"] = mockConsoleInfo;
    console["log"] = mockConsoleLog;
    console["debug"] = mockConsoleDebug;

    return {
        mockConsoleError,
        mockConsoleEarn,
        mockConsoleInfo,
        mockConsoleLog,
        mockConsoleDebug,
    };
}

test("console functions should not log to console", () =>
{
    // Arrange
    const {
        mockConsoleError,
        mockConsoleEarn,
        mockConsoleInfo,
        mockConsoleLog,
        mockConsoleDebug,
    } = mockConsole(console);

    // Act
    console.error("console.error");
    console.warn("console.warn");
    console.info("console.info");
    console.log("console.log");
    console.debug("console.debug");

    // Assert
    expect(mockConsoleError).toHaveBeenCalledTimes(1);
    expect(mockConsoleEarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleInfo).toHaveBeenCalledTimes(1);
    expect(mockConsoleLog).toHaveBeenCalledTimes(1);
    expect(mockConsoleDebug).toHaveBeenCalledTimes(1);
});
