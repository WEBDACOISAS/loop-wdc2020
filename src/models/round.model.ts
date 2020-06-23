import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Round extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  roundId?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateStart: string;

  @property({
    type: 'date',
  })
  dateEnd?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Round>) {
    super(data);
  }
}

export interface RoundRelations {
  // describe navigational properties here
}

export type RoundWithRelations = Round & RoundRelations;
