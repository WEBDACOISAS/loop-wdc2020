import {DefaultCrudRepository} from '@loopback/repository';
import {Device, DeviceRelations} from '../models';
import {MiotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceRepository extends DefaultCrudRepository<
  Device,
  typeof Device.prototype.deviceId,
  DeviceRelations
> {
  constructor(
    @inject('datasources.miot') dataSource: MiotDataSource,
  ) {
    super(Device, dataSource);
  }
}
