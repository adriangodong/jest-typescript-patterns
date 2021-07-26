# Mocking built-in DOM objects/functions/fields (mock-dom-members)

When a test target uses built-in DOM members and they need to be mocked, use `Object.defineProperty()` to replace the built-in implementation with a mock.

For example:
```typescript
// Constructor
const mockMediaStream = {};
const mockMediaStreamCtor = jest.fn().mockImplementation(() => mockMediaStream);
Object.defineProperty(window, "MediaStream", {
    value: mockMediaStreamCtor
});

// Function
const mockRandomNumber = 2;
const mockMath = {
    random: jest.fn().mockReturnValue(mockRandomNumber)
};
Object.defineProperty(window, "Math", {
    value: mockMath
});
```

## Links

* [Sample test](mock-dom-members.spec.ts)
