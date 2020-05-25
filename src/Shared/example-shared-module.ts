import Aero from '@rbxts/aerots/internal/Aero/Aero';
import { Shared } from 'global-registry';

export class ExampleSharedModule extends Aero.SharedModule<Shared> {
    Start() {
        print('ExampleSharedModule started!');
    }

    Init() {
        print('Initiated from ExampleSharedModule!');
    }

    foo(str: string) {
        print(str);
    }
}
