import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Temperature} from '../models';
import {TemperatureRepository} from '../repositories';

export class TemperatureController {
  constructor(
    @repository(TemperatureRepository)
    public temperatureRepository : TemperatureRepository,
  ) {}

  @post('/temperatures', {
    responses: {
      '200': {
        description: 'Temperature model instance',
        content: {'application/json': {schema: getModelSchemaRef(Temperature)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Temperature, {
            title: 'NewTemperature',
            exclude: ['id'],
          }),
        },
      },
    })
    temperature: Omit<Temperature, 'id'>,
  ): Promise<Temperature> {
    return this.temperatureRepository.create(temperature);
  }

  @get('/temperatures/count', {
    responses: {
      '200': {
        description: 'Temperature model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Temperature) where?: Where<Temperature>,
  ): Promise<Count> {
    return this.temperatureRepository.count(where);
  }

  @get('/temperatures', {
    responses: {
      '200': {
        description: 'Array of Temperature model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Temperature, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Temperature) filter?: Filter<Temperature>,
  ): Promise<Temperature[]> {
    return this.temperatureRepository.find(filter);
  }

  @patch('/temperatures', {
    responses: {
      '200': {
        description: 'Temperature PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Temperature, {partial: true}),
        },
      },
    })
    temperature: Temperature,
    @param.where(Temperature) where?: Where<Temperature>,
  ): Promise<Count> {
    return this.temperatureRepository.updateAll(temperature, where);
  }

  @get('/temperatures/{id}', {
    responses: {
      '200': {
        description: 'Temperature model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Temperature, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Temperature, {exclude: 'where'}) filter?: FilterExcludingWhere<Temperature>
  ): Promise<Temperature> {
    return this.temperatureRepository.findById(id, filter);
  }

  @patch('/temperatures/{id}', {
    responses: {
      '204': {
        description: 'Temperature PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Temperature, {partial: true}),
        },
      },
    })
    temperature: Temperature,
  ): Promise<void> {
    await this.temperatureRepository.updateById(id, temperature);
  }

  @put('/temperatures/{id}', {
    responses: {
      '204': {
        description: 'Temperature PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() temperature: Temperature,
  ): Promise<void> {
    await this.temperatureRepository.replaceById(id, temperature);
  }

  @del('/temperatures/{id}', {
    responses: {
      '204': {
        description: 'Temperature DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.temperatureRepository.deleteById(id);
  }
}
