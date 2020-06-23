import {DefaultCrudRepository} from '@loopback/repository';
import {Round, RoundRelations} from '../models';
import {MiotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RoundRepository extends DefaultCrudRepository<
  Round,
  typeof Round.prototype.roundId,
  RoundRelations
> {
  constructor(
    @inject('datasources.miot') dataSource: MiotDataSource,
  ) {
    super(Round, dataSource);
  }
}
