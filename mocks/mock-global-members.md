# Mocking global objects/functions/fields (mock-global-members)

When a test target uses a global member and they need to be mocked, use `Object.defineProperty()` to replace the built-in implementation with a mock. This is similar to [mock-dom-members](./mock-dom-members.md).

For example:
```typescript
// Constructor
const mockJquery = {};
const mockJqueryCtor = jest.fn().mockImplementation(() => mockJquery);
Object.defineProperty(global, "$", {
    value: mockJqueryCtor
});
```

## Links

* [Sample test](mock-global-members.spec.ts)
