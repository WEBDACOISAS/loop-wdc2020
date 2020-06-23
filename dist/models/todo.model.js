"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
let Todo = class Todo extends _1.Step {
    constructor(data) {
        super(data);
    }
};
Todo = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map