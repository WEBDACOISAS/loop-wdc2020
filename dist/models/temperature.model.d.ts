import { Entity } from '@loopback/repository';
export declare class Temperature extends Entity {
    id?: number;
    Division: string;
    temp?: number;
    date?: string;
    [prop: string]: any;
    constructor(data?: Partial<Temperature>);
}
export interface TemperatureRelations {
}
export declare type TemperatureWithRelations = Temperature & TemperatureRelations;
