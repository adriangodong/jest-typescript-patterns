import { TestConsumer } from "./lib/TestConsumer";
import { TestService } from "./lib/TestService";

// Mocking object functions.
test("getConsumerString() should call TestService.getServiceString()", () =>
{
    // Arrange

    // Create a mock of TestService...
    const mockTestService = {
        getServiceString: jest.fn()
    };

    // ...and mock TestService.getServiceString() return value...
    const mockString = "Mock string";
    mockTestService.getServiceString.mockReturnValue(mockString);

    // ...and inject the casted mock to the TestConsumer.
    const testConsumer = new TestConsumer(mockTestService as unknown as TestService);

    // Act
    const actualString = testConsumer.getConsumerString();

    // Assert
    expect(mockTestService.getServiceString).toHaveBeenCalledTimes(1);
    expect(actualString).toBe(mockString);
});

// Mocking object accessors.
test("consumerString should return value of TestService.serviceString", () =>
{
    // Arrange

    // Create a mock of TestService...
    const mockTestService = {};

    // ...and mock TestService.serviceString value...
    const mockString = "Mock string";
    const mockGetter = jest.fn().mockReturnValue(mockString);
    Object.defineProperty(mockTestService, "serviceString", {
        get: mockGetter
    });

    // ...and inject the mock to the TestConsumer.
    const testConsumer = new TestConsumer(mockTestService as unknown as TestService);

    // Act
    const actualString = testConsumer.consumerString;

    // Assert
    expect(mockGetter).toHaveBeenCalledTimes(1);
    expect(actualString).toBe(mockString);
});
