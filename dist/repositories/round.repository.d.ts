import { DefaultCrudRepository } from '@loopback/repository';
import { Round, RoundRelations } from '../models';
import { MiotDataSource } from '../datasources';
export declare class RoundRepository extends DefaultCrudRepository<Round, typeof Round.prototype.roundId, RoundRelations> {
    constructor(dataSource: MiotDataSource);
}
