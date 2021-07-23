import { TestService } from "./TestService";

export class TestConsumer
{
    constructor(private readonly service: TestService)
    {
    }

    getConsumerString(): string
    {
        return this.service.getServiceString();
    }

    get consumerString(): string
    {
        return this.service.serviceString;
    }
}
