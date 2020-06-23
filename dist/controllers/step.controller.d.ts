import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Step } from '../models';
import { StepRepository } from '../repositories';
export declare class StepController {
    stepRepository: StepRepository;
    constructor(stepRepository: StepRepository);
    create(step: Omit<Step, 'stepId'>): Promise<Step>;
    count(where?: Where<Step>): Promise<Count>;
    find(filter?: Filter<Step>): Promise<Step[]>;
    updateAll(step: Step, where?: Where<Step>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Step>): Promise<Step>;
    updateById(id: string, step: Step): Promise<void>;
    replaceById(id: string, step: Step): Promise<void>;
    deleteById(id: string): Promise<void>;
}
