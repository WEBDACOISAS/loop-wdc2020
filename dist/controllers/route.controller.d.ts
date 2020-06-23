import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Round } from '../models';
import { RoundRepository } from '../repositories';
export declare class RouteController {
    roundRepository: RoundRepository;
    constructor(roundRepository: RoundRepository);
    create(round: Omit<Round, 'roundId'>): Promise<Round>;
    count(where?: Where<Round>): Promise<Count>;
    find(filter?: Filter<Round>): Promise<Round[]>;
    updateAll(round: Round, where?: Where<Round>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Round>): Promise<Round>;
    updateById(id: string, round: Round): Promise<void>;
    replaceById(id: string, round: Round): Promise<void>;
    deleteById(id: string): Promise<void>;
}
