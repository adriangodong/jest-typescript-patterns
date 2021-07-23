import { TestService } from "./lib/TestService";
import { TestUtility, getTestString } from "./lib/TestUtility";

jest.mock("./lib/TestUtility");

test("TestService.ctor() should instantiate TestUtility", () =>
{
    // Act
    new TestService();

    // Assert
    expect(TestUtility).toHaveBeenCalledTimes(1);
});

test("TestService.getServiceString() should call TestUtility.getTestString()", () =>
{
    // Arrange
    const mockString = "Mock string from TestUtility.getServiceString mock function.";
    const mockTestUtility = {
        getTestString: jest.fn().mockReturnValue(mockString)
    };
    (TestUtility as unknown as jest.Mock).mockReturnValue(mockTestUtility);

    const testService = new TestService();

    // Act
    const actualString = testService.getServiceString();

    // Assert
    expect(mockTestUtility.getTestString).toHaveBeenCalledTimes(1);
    expect(actualString).toBe(mockString);
});

test("TestService.serviceString should call TestUtility.testString", () =>
{
    // Arrange
    const mockString = "Mock string from TestUtility.serviceString mock getter.";
    const mockGetter = jest.fn().mockReturnValue(mockString);
    const mockTestUtility = {
    };
    Object.defineProperty(mockTestUtility, "testString", {
        get: mockGetter
    });
    (TestUtility as unknown as jest.Mock).mockReturnValue(mockTestUtility);

    const testService = new TestService();

    // Act
    const actualString = testService.serviceString;

    // Assert
    expect(mockGetter).toHaveBeenCalledTimes(1);
    expect(actualString).toBe(mockString);
});

test("TestService.getTestString() should call getTestString", () =>
{
    // Arrange
    const testService = new TestService();

    const expectedString = "Mock string from getTestString mock function.";
    (getTestString as unknown as jest.Mock).mockReturnValue(expectedString);

    // Act
    const actualString = testService.getTestString();

    // Assert
    expect(getTestString).toHaveBeenCalledTimes(1);
    expect(actualString).toBe(expectedString);
});
