// import modules here, e.g.

import { AeroShared, AeroServer, AeroClient } from '../aero/AeroRegistry';
import { ExampleSharedModule } from 'Shared/example-shared-module';
import { ExampleService } from 'Server/Services/example-service';
import { ExampleServerModule } from 'Server/Modules/example-server-module';
import { ExampleController } from 'Client/Controllers/example-controller';
import { ExampleClientModule } from 'Client/Modules/example-client-module';

// import mySharedModule = require('Shared/mySharedModule');

// import myService = require('Server/Services/myService');
// import myServerModule = require('Server/Modules/myServerModule');

// import myController = require('Client/Controllers/myController');
// import myClientModule = require('Client/Modules/myClientModule');

// put all shared stuff here
interface Shared extends AeroShared {
    // module: moduleDefinition
    // e.g. module2: module2;

    exampleSharedModule: ExampleSharedModule;
}

// put all server stuff here
interface Server extends AeroServer {
    services: {
        // service: serviceDefinition
        // e.g. myService: myService;

        exampleService: ExampleService;
    };

    modules: {
        // module: moduleDefinition
        // e.g. myServerModule: myServerModule

        exampleServerModule: ExampleServerModule;
    };
}

// put all client stuff here
interface Client extends AeroClient {
    controllers: {
        // controller: controllerDefinition
        // e.g. myController: myController

        exampleController: ExampleController;
    };

    modules: {
        // module: moduleDefinition
        // e.g. myClientModule: myClientModule

        exampleClientModule: ExampleClientModule;
    };
}
