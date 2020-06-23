import { DefaultCrudRepository } from '@loopback/repository';
import { Step, StepRelations } from '../models';
import { MiotDataSource } from '../datasources';
export declare class StepRepository extends DefaultCrudRepository<Step, typeof Step.prototype.stepId, StepRelations> {
    constructor(dataSource: MiotDataSource);
}
