import { Entity } from '@loopback/repository';
export declare class Device extends Entity {
    deviceId?: string;
    title: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<Device>);
}
export interface DeviceRelations {
}
export declare type DeviceWithRelations = Device & DeviceRelations;
