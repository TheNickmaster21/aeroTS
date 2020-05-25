import Aero from '../../aero/internal/Aero/Aero';

export class ExampleSharedModule extends Aero.SharedModule {
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
