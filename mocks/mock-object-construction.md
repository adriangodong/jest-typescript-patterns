# Mocking objects instantiated within test object (mock-object-construction)

When a test object creates its dependency inside its private implemeentation and this dependency needs to be mocked, mock the import and replace it with a mock function. For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");
```

If the dependency's functions need to be mocked, create an object with relevant functions populated with a mock. Afterwards, set the import mock return value to the mock object. For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");

const mockFunction = jest.fn();
const mockClass = {
    fn: mockFunction
};

(ConcreteClass as unknown as jest.Mock).mockReturnValue(mockClass);
```

If the dependency's fields (value, get, or set) need to be mocked, create an object and use `Object.defineProperty()` to populate the field with mock(s). Afterwards, set the import mock return value to the mock object. For example:
```typescript
import { ConcreteClass } from "./ConcreteClass";

jest.mock("./ConcreteClass");

const mockGetter = jest.fn();
const mockClass = {
};
Object.defineProperty(mockClass, "field", {
    get: mockGetter
});

(ConcreteClass as unknown as jest.Mock).mockReturnValue(mockClass);
```

## Links

* [Sample test](mock-object-construction.spec.ts)
