import { v4 as uuid } from "uuid";

const randomValue = uuid();
const mock = jest.fn<string, []>().mockReturnValue(randomValue);

beforeEach(() =>
{
    // Arrange
    jest.clearAllMocks();
});

test("Mock must be called only once for each test run", () =>
{
    // Act
    const actualValue = mock();

    // Assert
    expect(mock).toHaveBeenCalledTimes(1);
    expect(actualValue).toBe(randomValue);
});

test("Mock must be called only once for each test run", () =>
{
    // Act
    const actualValue = mock();

    // Assert
    expect(mock).toHaveBeenCalledTimes(1);
    expect(actualValue).toBe(randomValue);
});
