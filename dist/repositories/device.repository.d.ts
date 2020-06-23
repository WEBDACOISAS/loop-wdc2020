import { DefaultCrudRepository } from '@loopback/repository';
import { Device, DeviceRelations } from '../models';
import { MiotDataSource } from '../datasources';
export declare class DeviceRepository extends DefaultCrudRepository<Device, typeof Device.prototype.deviceId, DeviceRelations> {
    constructor(dataSource: MiotDataSource);
}
