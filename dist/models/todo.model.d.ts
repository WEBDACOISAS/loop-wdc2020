import { Step } from '.';
export declare class Todo extends Step {
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
