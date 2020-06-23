"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Temperature = class Temperature extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Temperature.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Temperature.prototype, "Division", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Temperature.prototype, "temp", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Temperature.prototype, "date", void 0);
Temperature = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Temperature);
exports.Temperature = Temperature;
//# sourceMappingURL=temperature.model.js.map