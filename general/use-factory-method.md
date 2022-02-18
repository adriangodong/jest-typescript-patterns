# Use factory method to create test objects (use-factory-method)

When we create an object to test, often the dependencies are injected via constructor parameters. When the set of dependencies change, we will need to update all existing calls and this can become very tedious. Instead of calling the constructor directly, we should create a factory method. The factory method will use a constant object containing the default values for each constructor parameter. The factory method takes an optional parameter that will override the default values as needed.

## Links

* [Sample test](use-factory-method.spec.ts)
