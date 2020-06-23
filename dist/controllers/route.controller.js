"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RouteController = class RouteController {
    constructor(roundRepository) {
        this.roundRepository = roundRepository;
    }
    async create(round) {
        return this.roundRepository.create(round);
    }
    async count(where) {
        return this.roundRepository.count(where);
    }
    async find(filter) {
        return this.roundRepository.find(filter);
    }
    async updateAll(round, where) {
        return this.roundRepository.updateAll(round, where);
    }
    async findById(id, filter) {
        return this.roundRepository.findById(id, filter);
    }
    async updateById(id, round) {
        await this.roundRepository.updateById(id, round);
    }
    async replaceById(id, round) {
        await this.roundRepository.replaceById(id, round);
    }
    async deleteById(id) {
        await this.roundRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/rounds', {
        responses: {
            '200': {
                description: 'Round model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Round) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Round, {
                    title: 'NewRound',
                    exclude: ['roundId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/rounds/count', {
        responses: {
            '200': {
                description: 'Round model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Round)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/rounds', {
        responses: {
            '200': {
                description: 'Array of Round model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Round, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Round)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/rounds', {
        responses: {
            '200': {
                description: 'Round PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Round, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Round)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Round, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/rounds/{id}', {
        responses: {
            '200': {
                description: 'Round model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Round, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Round, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/rounds/{id}', {
        responses: {
            '204': {
                description: 'Round PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Round, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Round]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/rounds/{id}', {
        responses: {
            '204': {
                description: 'Round PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Round]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/rounds/{id}', {
        responses: {
            '204': {
                description: 'Round DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteController.prototype, "deleteById", null);
RouteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RoundRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoundRepository])
], RouteController);
exports.RouteController = RouteController;
//# sourceMappingURL=route.controller.js.map