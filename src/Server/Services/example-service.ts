import Aero from '@rbxts/aerots/internal/Aero/Aero';
import { AeroServer } from '../../../aero/AeroRegistry';
import { Shared } from 'global-registry';

export class ExampleService extends Aero.Service<AeroServer, Shared> {
    Start() {
        print('ExampleService started!');
    }

    Init() {
        print('Initiated from ExampleService!');
    }

    foo(str: string) {
        print('Someone sent a message!\n' + str);
    }
}
