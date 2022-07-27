declare var $: {
    new(): {};
};

test("Create jQuery should not fail", () =>
{
    // Arrange
    const mockJquery = {};
    const mockJqueryCtor = jest.fn().mockImplementation(() => mockJquery);
    Object.defineProperty(global, "$", {
        value: mockJqueryCtor
    });

    // Act
    const jQuery = new $();

    // Assert
    expect(jQuery).toBe(mockJquery);
});
