"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TemperatureController = class TemperatureController {
    constructor(temperatureRepository) {
        this.temperatureRepository = temperatureRepository;
    }
    async create(temperature) {
        return this.temperatureRepository.create(temperature);
    }
    async count(where) {
        return this.temperatureRepository.count(where);
    }
    async find(filter) {
        return this.temperatureRepository.find(filter);
    }
    async updateAll(temperature, where) {
        return this.temperatureRepository.updateAll(temperature, where);
    }
    async findById(id, filter) {
        return this.temperatureRepository.findById(id, filter);
    }
    async updateById(id, temperature) {
        await this.temperatureRepository.updateById(id, temperature);
    }
    async replaceById(id, temperature) {
        await this.temperatureRepository.replaceById(id, temperature);
    }
    async deleteById(id) {
        await this.temperatureRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/temperatures', {
        responses: {
            '200': {
                description: 'Temperature model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Temperature) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Temperature, {
                    title: 'NewTemperature',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/temperatures/count', {
        responses: {
            '200': {
                description: 'Temperature model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Temperature)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/temperatures', {
        responses: {
            '200': {
                description: 'Array of Temperature model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Temperature, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Temperature)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/temperatures', {
        responses: {
            '200': {
                description: 'Temperature PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Temperature, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Temperature)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Temperature, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/temperatures/{id}', {
        responses: {
            '200': {
                description: 'Temperature model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Temperature, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Temperature, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/temperatures/{id}', {
        responses: {
            '204': {
                description: 'Temperature PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Temperature, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Temperature]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/temperatures/{id}', {
        responses: {
            '204': {
                description: 'Temperature PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Temperature]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/temperatures/{id}', {
        responses: {
            '204': {
                description: 'Temperature DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TemperatureController.prototype, "deleteById", null);
TemperatureController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TemperatureRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TemperatureRepository])
], TemperatureController);
exports.TemperatureController = TemperatureController;
//# sourceMappingURL=temperature.controller.js.map