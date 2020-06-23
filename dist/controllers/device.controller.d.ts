import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Device } from '../models';
import { DeviceRepository } from '../repositories';
export declare class DeviceController {
    deviceRepository: DeviceRepository;
    constructor(deviceRepository: DeviceRepository);
    create(device: Omit<Device, 'deviceId'>): Promise<Device>;
    count(where?: Where<Device>): Promise<Count>;
    find(filter?: Filter<Device>): Promise<Device[]>;
    updateAll(device: Device, where?: Where<Device>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Device>): Promise<Device>;
    updateById(id: string, device: Device): Promise<void>;
    replaceById(id: string, device: Device): Promise<void>;
    deleteById(id: string): Promise<void>;
}
