import Aero from '@rbxts/aerots/internal/Aero/Aero';
import { Client, Shared } from 'global-registry';

export class ExampleClientModule extends Aero.ClientModule<Client, Shared> {
    Start() {
        print('ExampleClientModule started!');
    }

    Init() {
        print('Initiated from ExampleClientModule!');
    }

    foo(str: string) {
        print('Someone sent a message!\n' + str);
    }
}
