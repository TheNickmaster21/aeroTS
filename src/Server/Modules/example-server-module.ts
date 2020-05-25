import Aero from '@rbxts/aerots/internal/Aero/Aero';
import { Server, Shared } from 'global-registry';

export class ExampleServerModule extends Aero.ServerModule<Server, Shared> {
    Start() {
        print('ExampleServerModule started!');
    }

    Init() {
        print('Initiated from ExampleServerModule!');
    }

    foo(str: string) {
        print('Someone sent a message!\n' + str);
    }
}
