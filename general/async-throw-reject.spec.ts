// 3 classes of errors:

// 1. throw in synchronous function
function syncThrow(): void
{
    throw "syncThrow error";
}

// 2. throw in asynchronous function
async function asyncThrow(): Promise<void>
{
    throw "asyncThrow error";
}

// 3. Promise rejection in synchronous function
function promiseReject(): Promise<void>
{
    return Promise.reject("promiseReject error");
}


// Make sure we always hit the expected error for each test.
beforeEach(() =>
{
    expect.hasAssertions();
});


// Each error clas can be handled in two ways:

// 1.a. Sync throw + try-catch
test("syncThrow try-catch", () =>
{
    try
    {
        // Act
        syncThrow();
    }
    catch (error)
    {
        // Assert
        expect(error).toBeDefined();
    }
});

// 1.b. Sync throw + expect-toThrow
test("syncThrow expect-toThrow", () =>
{
    // Assert
    expect(() =>
    {
        // Act
        syncThrow();
    }).toThrow();
});

// 2.a. Async throw + try-catch
test("asyncThrow try-catch", async () =>
{
    try
    {
        // Act
        await asyncThrow();
    }
    catch (error)
    {
        // Assert
        expect(error).toBeDefined();
    }
});

// 2.b. Async throw + expect-rejects
test("asyncThrow expect-rejects", () =>
{
    // Act
    const promise = asyncThrow();

    // Assert
    expect(promise).rejects.toBeDefined();
});

// 3.a. Sync Promise rejection + try-catch
test("promiseReject try-catch", async () =>
{
    try
    {
        // Act
        await promiseReject();
    }
    catch (error)
    {
        // Assert
        expect(error).toBeDefined();
    }
});

// 3.b. Sync Promise rejection + expect-rejects
test("promiseReject expect-rejects", () =>
{
    // Act
    const promise = promiseReject();

    // Assert
    expect(promise).rejects.toBeDefined();
});
