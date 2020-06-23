import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Temperature } from '../models';
import { TemperatureRepository } from '../repositories';
export declare class TemperatureController {
    temperatureRepository: TemperatureRepository;
    constructor(temperatureRepository: TemperatureRepository);
    create(temperature: Omit<Temperature, 'id'>): Promise<Temperature>;
    count(where?: Where<Temperature>): Promise<Count>;
    find(filter?: Filter<Temperature>): Promise<Temperature[]>;
    updateAll(temperature: Temperature, where?: Where<Temperature>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Temperature>): Promise<Temperature>;
    updateById(id: number, temperature: Temperature): Promise<void>;
    replaceById(id: number, temperature: Temperature): Promise<void>;
    deleteById(id: number): Promise<void>;
}
