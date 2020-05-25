import { Server, Shared, Client } from '../../../src/GlobalRegistry';

export abstract class Service {
    Start(): void;

    Init(): void;

    Services: Server['services'];

    Modules: Server['modules'];

    Shared: Shared;
}

export abstract class Controller {
    Start(): void;

    Init(): void;

    Start(): void;

    Init(): void;

    Controllers: Client['controllers'];

    Modules: Client['modules'];

    Shared: Shared;
}

export abstract class ServerModule {
    Start?(): void;

    Init?(): void;

    Services: Server['services'];

    Modules: Server['modules'];

    Shared: Shared;
}

export abstract class ClientModule {
    Start?(): void;

    Init?(): void;

    Controllers: Client['controllers'];

    Modules: Client['modules'];

    Shared: Shared;
}

export abstract class SharedModule {
    Start?(): void;

    Init?(): void;

    Shared: Shared;
}
