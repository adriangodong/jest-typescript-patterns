# Mocking objects injected via parameter (mock-object-parameter)

When a test object receives a dependency through constructor parameter (or a test function through parameter) and the dependency is a mock object; create an object, mock its called functions, and pass it to the receiver. Type cast the mock object to unknown and then to the mocked type right before passing. This allows retaining the `jest.Mock` type on the mock function.

For example:
```typescript
function callDependency(dependency: Dependency): void
{
    dependency.doStuff();
}

// Type of mockDependency.doStuff is jest.Mock<any, any>.
const mockDependency = {
    doStuff: jest.fn()
};

// Type cast to avoid TypeScript compiler error.
callDependency(mockDependency as unknown as Dependency);
```

## Links

* [Sample test](mock-object-parameter.spec.ts)
