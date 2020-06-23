import {DefaultCrudRepository} from '@loopback/repository';
import {Temperature, TemperatureRelations} from '../models';
import {Wdc2020DataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TemperatureRepository extends DefaultCrudRepository<
  Temperature,
  typeof Temperature.prototype.id,
  TemperatureRelations
> {
  constructor(
    @inject('datasources.wdc2020') dataSource: Wdc2020DataSource,
  ) {
    super(Temperature, dataSource);
  }
}
