import { Entity } from '@loopback/repository';
export declare class Step extends Entity {
    stepId?: string;
    dateStart: string;
    dateEnd?: string;
    geoStart: string;
    geoEnd?: string;
    addedWeight?: number;
    [prop: string]: any;
    constructor(data?: Partial<Step>);
}
export interface StepRelations {
}
export declare type StepWithRelations = Step & StepRelations;
