import Aero from '@rbxts/aerots/internal/Aero/Aero';
import { Client, Shared } from 'global-registry';

export class ExampleController extends Aero.Controller<Client, Shared> {
    Start() {
        print('ExampleController started!');
    }

    Init() {
        print('Initiated from ExampleController!');
    }

    foo(str: string) {
        print('Someone sent a message!\n' + str);
    }
}
