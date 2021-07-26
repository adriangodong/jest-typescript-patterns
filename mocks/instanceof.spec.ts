import { isTestUtility, TestUtility } from "./lib/TestUtility";

test("isTestUtility should return true for a TestUtility instance", () =>
{
    // Arrange
    const mockTestUtility = Object.create(TestUtility.prototype);

    // Act, Assert
    expect(isTestUtility(mockTestUtility)).toBeTruthy();
});

test("isTestUtility should return false for a non-TestUtility instance", () =>
{
    // Arrange
    const mockTestUtility = {} as unknown as TestUtility;

    // Act, Assert
    expect(isTestUtility(mockTestUtility)).toBeFalsy();
});
