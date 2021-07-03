beforeEach(() =>
{
    // Arrange
    expect.hasAssertions();
});

test("each test must declare expect.hasAssertions to avoid no assertions", () =>
{
    // Assert
    // Test will fail without the next line.
    expect(void 0).toBeFalsy();
});

test("each test must declare expect.hasAssertions to avoid no assertions when async", (done) =>
{
    setTimeout(() =>
    {
        // Assert
        expect(void 0).toBeFalsy();

        // Test will fail without done() call because Jest never executes the timeout handler without it.
        done();
    }, 0);
});
