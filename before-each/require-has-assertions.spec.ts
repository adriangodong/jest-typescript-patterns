// Make this file a module.
export {}

beforeEach(() =>
{
    // Arrange
    expect.hasAssertions();
});

test("void 0 should be falsy", () =>
{
    // Act
    const v0 = void 0;

    // Assert
    // Test will fail without the following line.
    expect(v0).toBeFalsy();
});

test("setTimeout should execute callback asynchronously", (done) =>
{
    setTimeout(() =>
    {
        // Assert
        expect(void 0).toBeFalsy();

        // Test will fail without done() call because Jest never executes the timeout handler without it.
        done();
    }, 0);
});
