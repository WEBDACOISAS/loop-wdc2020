import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Step extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  stepId?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateStart: string;

  @property({
    type: 'date',
  })
  dateEnd?: string;

  @property({
    type: 'string',
    required: true,
  })
  geoStart: string;

  @property({
    type: 'string',
  })
  geoEnd?: string;

  @property({
    type: 'number',
  })
  addedWeight?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Step>) {
    super(data);
  }
}

export interface StepRelations {
  // describe navigational properties here
}

export type StepWithRelations = Step & StepRelations;
