"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let TemperatureRepository = class TemperatureRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Temperature, dataSource);
    }
};
TemperatureRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.wdc2020')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Wdc2020DataSource])
], TemperatureRepository);
exports.TemperatureRepository = TemperatureRepository;
//# sourceMappingURL=temperature.repository.js.map