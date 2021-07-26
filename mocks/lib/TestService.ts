import { TestUtility, getTestString } from "./TestUtility";

export class TestService
{
    private readonly utility: TestUtility;

    constructor()
    {
        this.utility = new TestUtility();
    }

    getServiceString(): string
    {
        return this.utility.getTestString();
    }

    get serviceString(): string
    {
        return this.utility.testString;
    }

    getTestString(): string
    {
        return getTestString();
    }

    async getApiString(): Promise<string>
    {
        const response = await fetch("https://example.com");

        if (response.ok)
        {
            return await response.text();
        }
        else
        {
            throw response;
        }
    }
}
