import Aero from '../../../aero/internal/Aero/Aero';

export class ExampleServerModule extends Aero.ServerModule {
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
