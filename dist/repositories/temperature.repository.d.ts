import { DefaultCrudRepository } from '@loopback/repository';
import { Temperature, TemperatureRelations } from '../models';
import { Wdc2020DataSource } from '../datasources';
export declare class TemperatureRepository extends DefaultCrudRepository<Temperature, typeof Temperature.prototype.id, TemperatureRelations> {
    constructor(dataSource: Wdc2020DataSource);
}
