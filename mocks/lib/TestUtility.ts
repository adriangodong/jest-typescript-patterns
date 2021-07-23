export class TestUtility
{
    getTestString(): string
    {
        return "A string from getTestString function of TestUtility class instance.";
    }
    
    get testString(): string
    {
        return "A string from get accessor of TestUtility class instance.";
    }
}

export function getTestString(): string
{
    return "A string from getTestString function of TestUtility module.";
}
