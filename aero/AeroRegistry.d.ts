import Date from './Shared/Date';
import Maid from './Shared/Maid';
import Event from './Shared/Event';
import Thread from './Shared/Thread';
import Base64 from './Shared/Base64';
import TableUtil from './Shared/TableUtil';
import NumberUtil from './Shared/NumberUtil';
import VectorUtil from './Shared/VectorUtil';
import ListenerList from './Shared/ListenerList';
import { Service, Controller, ClientModule, ServerModule } from './internal/Aero/Aero';

export interface AeroShared {
    Date: typeof Date;
    Maid: typeof Maid;
    Event: typeof Event;
    Thread: typeof Thread;
    Base64: typeof Base64;
    TableUtil: typeof TableUtil;
    NumberUtil: typeof NumberUtil;
    VectorUtil: typeof VectorUtil;
    ListenerList: typeof ListenerList;
}

export interface AeroServer {
    services: { [key: string]: Service<any, any> };
    modules: { [key: string]: ServerModule<any, any> };
}

export interface AeroClient {
    controllers: { [key: string]: Controller<any, any> };
    modules: { [key: string]: ClientModule<any, any> };
}
