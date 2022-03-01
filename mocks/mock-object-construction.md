# Mocking objects instantiated within test object (mock-object-construction)

When a test object creates its dependency inside its private implementation and this dependency needs to be mocked, mock the import and replace it with a mock function. For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");
```

The constructor output is an automocked object.

If we need to modify the automocked object, create the modified mock object and set the import mock return value to the mock object. If the object's properties (value, get, or set) need to be mocked, use `Object.defineProperty()` to populate the field with mock(s). For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");

const mockFunction = jest.fn();
const mockClass = {
    fn: mockFunction
};

// Define any accessed property.
Object.defineProperty(mockClass, "getter", {
    get: mockGetter
});

(ConcreteClass as unknown as jest.Mock).mockReturnValue(mockClass);
```

If we need to return different mocked objects (e.g. the mocked class is instantiated multiple times), create a factory method instead and set the import mock implementation to the factory method. For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");

(ConcreteClass as unknown as jest.Mock).mockImplementation(() =>
{
    return {
        id: Date.now(),
        fn: jest.fn()
    };
});
```

## Links

* [Sample test](mock-object-construction.spec.ts)
