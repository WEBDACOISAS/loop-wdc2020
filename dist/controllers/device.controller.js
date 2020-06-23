"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DeviceController = class DeviceController {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    async create(device) {
        return this.deviceRepository.create(device);
    }
    async count(where) {
        return this.deviceRepository.count(where);
    }
    async find(filter) {
        return this.deviceRepository.find(filter);
    }
    async updateAll(device, where) {
        return this.deviceRepository.updateAll(device, where);
    }
    async findById(id, filter) {
        return this.deviceRepository.findById(id, filter);
    }
    async updateById(id, device) {
        await this.deviceRepository.updateById(id, device);
    }
    async replaceById(id, device) {
        await this.deviceRepository.replaceById(id, device);
    }
    async deleteById(id) {
        await this.deviceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/devices', {
        responses: {
            '200': {
                description: 'Device model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Device) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Device, {
                    title: 'NewDevice',
                    exclude: ['deviceId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/devices/count', {
        responses: {
            '200': {
                description: 'Device model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Device)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/devices', {
        responses: {
            '200': {
                description: 'Array of Device model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Device, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Device)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/devices', {
        responses: {
            '200': {
                description: 'Device PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Device, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Device)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Device, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/devices/{id}', {
        responses: {
            '200': {
                description: 'Device model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Device, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Device, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/devices/{id}', {
        responses: {
            '204': {
                description: 'Device PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Device, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Device]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/devices/{id}', {
        responses: {
            '204': {
                description: 'Device PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Device]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/devices/{id}', {
        responses: {
            '204': {
                description: 'Device DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "deleteById", null);
DeviceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DeviceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DeviceRepository])
], DeviceController);
exports.DeviceController = DeviceController;
//# sourceMappingURL=device.controller.js.map