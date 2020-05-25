import Aero from '../../../aero/internal/Aero/Aero';

export class ExampleService extends Aero.Service {
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
