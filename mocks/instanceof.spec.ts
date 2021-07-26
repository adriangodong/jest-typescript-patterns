import { TestService } from "./lib/TestService";
import { isTestService } from "./lib/TestUtility";

test("isTestService should return true for a TestService instance", () =>
{
    // Arrange
    const mockTestService = Object.create(TestService.prototype);

    // Act, Assert
    expect(isTestService(mockTestService)).toBeTruthy();
});

test("isTestService should return false for a non-TestService instance", () =>
{
    // Arrange
    const mockTestService = {} as unknown as TestService;

    // Act, Assert
    expect(isTestService(mockTestService)).toBeFalsy();
});
