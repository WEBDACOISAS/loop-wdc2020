import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {Round} from '../models';
import {RoundRepository} from '../repositories';

export class RouteController {
  constructor(
    @repository(RoundRepository)
    public roundRepository: RoundRepository,
  ) {}

  @post('/rounds', {
    responses: {
      '200': {
        description: 'Round model instance',
        content: {'application/json': {schema: getModelSchemaRef(Round)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Round, {
            title: 'NewRound',
            exclude: ['roundId'],
          }),
        },
      },
    })
    round: Omit<Round, 'roundId'>,
  ): Promise<Round> {
    return this.roundRepository.create(round);
  }

  @get('/rounds/count', {
    responses: {
      '200': {
        description: 'Round model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Round) where?: Where<Round>,
  ): Promise<Count> {
    return this.roundRepository.count(where);
  }

  @get('/rounds', {
    responses: {
      '200': {
        description: 'Array of Round model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Round, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Round) filter?: Filter<Round>,
  ): Promise<Round[]> {
    return this.roundRepository.find(filter);
  }

  @patch('/rounds', {
    responses: {
      '200': {
        description: 'Round PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Round, {partial: true}),
        },
      },
    })
    round: Round,
    @param.where(Round) where?: Where<Round>,
  ): Promise<Count> {
    return this.roundRepository.updateAll(round, where);
  }

  @get('/rounds/{id}', {
    responses: {
      '200': {
        description: 'Round model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Round, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Round, {exclude: 'where'}) filter?: FilterExcludingWhere<Round>
  ): Promise<Round> {
    return this.roundRepository.findById(id, filter);
  }

  @patch('/rounds/{id}', {
    responses: {
      '204': {
        description: 'Round PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Round, {partial: true}),
        },
      },
    })
    round: Round,
  ): Promise<void> {
    await this.roundRepository.updateById(id, round);
  }

  @put('/rounds/{id}', {
    responses: {
      '204': {
        description: 'Round PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() round: Round,
  ): Promise<void> {
    await this.roundRepository.replaceById(id, round);
  }

  @del('/rounds/{id}', {
    responses: {
      '204': {
        description: 'Round DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.roundRepository.deleteById(id);
  }
}
