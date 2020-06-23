"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StepController = class StepController {
    constructor(stepRepository) {
        this.stepRepository = stepRepository;
    }
    async create(step) {
        return this.stepRepository.create(step);
    }
    async count(where) {
        return this.stepRepository.count(where);
    }
    async find(filter) {
        return this.stepRepository.find(filter);
    }
    async updateAll(step, where) {
        return this.stepRepository.updateAll(step, where);
    }
    async findById(id, filter) {
        return this.stepRepository.findById(id, filter);
    }
    async updateById(id, step) {
        await this.stepRepository.updateById(id, step);
    }
    async replaceById(id, step) {
        await this.stepRepository.replaceById(id, step);
    }
    async deleteById(id) {
        await this.stepRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/steps', {
        responses: {
            '200': {
                description: 'Step model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Step) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Step, {
                    title: 'NewStep',
                    exclude: ['stepId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/steps/count', {
        responses: {
            '200': {
                description: 'Step model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Step)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/steps', {
        responses: {
            '200': {
                description: 'Array of Step model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Step, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Step)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/steps', {
        responses: {
            '200': {
                description: 'Step PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Step, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Step)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Step, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/steps/{id}', {
        responses: {
            '200': {
                description: 'Step model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Step, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Step, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/steps/{id}', {
        responses: {
            '204': {
                description: 'Step PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Step, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Step]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/steps/{id}', {
        responses: {
            '204': {
                description: 'Step PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Step]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/steps/{id}', {
        responses: {
            '204': {
                description: 'Step DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StepController.prototype, "deleteById", null);
StepController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.StepRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StepRepository])
], StepController);
exports.StepController = StepController;
//# sourceMappingURL=step.controller.js.map