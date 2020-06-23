import { Entity } from '@loopback/repository';
export declare class Client extends Entity {
    id?: number;
    name: string;
    idade?: number;
    [prop: string]: any;
    constructor(data?: Partial<Client>);
}
export interface ClientRelations {
}
export declare type ClientWithRelations = Client & ClientRelations;
