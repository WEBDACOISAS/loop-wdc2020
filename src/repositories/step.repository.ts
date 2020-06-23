import {DefaultCrudRepository} from '@loopback/repository';
import {Step, StepRelations} from '../models';
import {MiotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StepRepository extends DefaultCrudRepository<
  Step,
  typeof Step.prototype.stepId,
  StepRelations
> {
  constructor(
    @inject('datasources.miot') dataSource: MiotDataSource,
  ) {
    super(Step, dataSource);
  }
}
