import { AeroServer, AeroShared, AeroClient } from '../../AeroRegistry';

export abstract class Service<SE extends AeroServer, SH extends AeroShared> {
    Start(): void;

    Init(): void;

    Services: SE['services'];

    Modules: SE['modules'];

    Shared: SH;
}

export abstract class Controller<C extends AeroClient, SH extends AeroShared> {
    Start(): void;

    Init(): void;

    Start(): void;

    Init(): void;

    Controllers: C['controllers'];

    Modules: C['modules'];

    Shared: SH;
}

export abstract class ServerModule<SE extends AeroServer, SH extends AeroShared> {
    Start?(): void;

    Init?(): void;

    Services: SE['services'];

    Modules: SE['modules'];

    Shared: SH;
}

export abstract class ClientModule<C extends AeroClient, SH extends AeroShared> {
    Start?(): void;

    Init?(): void;

    Controllers: C['controllers'];

    Modules: C['modules'];

    Shared: SH;
}

export abstract class SharedModule<SH extends AeroShared> {
    Start?(): void;

    Init?(): void;

    Shared: SH;
}
