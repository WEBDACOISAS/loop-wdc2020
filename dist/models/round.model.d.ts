import { Entity } from '@loopback/repository';
export declare class Round extends Entity {
    roundId?: string;
    dateStart: string;
    dateEnd?: string;
    [prop: string]: any;
    constructor(data?: Partial<Round>);
}
export interface RoundRelations {
}
export declare type RoundWithRelations = Round & RoundRelations;
