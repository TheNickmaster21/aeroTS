import Aero from '../../../aero/internal/Aero/Aero';

export class ExampleController extends Aero.Controller {
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
