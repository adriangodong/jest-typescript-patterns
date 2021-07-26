# instanceof compatible mocks (instanceof)

When a test target uses `instanceOf` to determine object type and the object is a Jest mock, create the mock object using `Object.create()` instead to maintain equality when testing the object prototype (what `instanceOf` uses). The mock object's members can then be modified using regular function assignment or `Object.assign()` for bulk assignment.

For example:
```typescript
const obj = Object.create(MediaRecorder.prototype);
obj.start = jest.fn();

obj instanceof MediaRecorder; // returns true
```

The main drawback is the mock no longer have typing. Compare this with mock object construction in [mock-object-construction](./mock-object-construction.md).

## Links

* [Sample test](instanceof.spec.ts)
