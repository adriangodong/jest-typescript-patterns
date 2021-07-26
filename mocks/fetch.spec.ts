import fetch from "jest-fetch-mock";

import { TestService } from "./lib/TestService";

beforeEach(() =>
{
    fetch.enableMocks();
    fetch.resetMocks();

    expect.hasAssertions();
});

test("TestService.getApiString should call API", async () =>
{
    // Arrange
    const expectedString = "API string from mock.";
    fetch.mockResponse(expectedString);

    const testService = new TestService();

    // Act
    const actualString = await testService.getApiString();

    // Assert
    expect(actualString).toBe(expectedString);

    // Act, Assert #2
    expect(testService.getApiString()).resolves.toBe(expectedString);
});

test("TestService.getApiString error should throw", async () =>
{
    // Arrange
    const expectedString = "API error string from mock.";
    fetch.mockResponse(expectedString, { status: 500 });

    const testService = new TestService();

    // Assert
    try
    {
        await testService.getApiString();
    }
    catch (error)
    {
        expect(error).toBeDefined();
    }

    // Act, Assert #2
    expect(testService.getApiString()).rejects.toMatchSnapshot();
});
