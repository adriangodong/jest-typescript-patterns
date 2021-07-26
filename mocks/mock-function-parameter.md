# Mocking functions injected via parameter (mock-function-parameter)

When a test object receives a dependency through constructor parameter (or a test function through parameter) and the dependency is a mock function, create a mock function and pass it to the receiver.

For example:
```typescript
function callDependency(callback: () => void): void
{
    callback();
}

const mockCallback = jest.fn();

callDependency(mockCallback);
```

## Links

* [Sample test](mock-function-parameter.spec.ts)
