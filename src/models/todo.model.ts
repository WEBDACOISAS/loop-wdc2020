import {model, property} from '@loopback/repository';
import {Step} from '.';

@model()
export class Todo extends Step {

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
