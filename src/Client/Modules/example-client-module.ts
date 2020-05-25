import Aero from '../../../aero/internal/Aero/Aero';

export class ExampleClientModule extends Aero.ClientModule {
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
