"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wdc2020DataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'wdc2020',
    connector: 'mongodb',
    url: 'mongodb+srv://wdcmiot:wdcmiot123@cluster0-hq6rn.mongodb.net/wdc2020?retryWrites=true&w=majority',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let Wdc2020DataSource = class Wdc2020DataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
Wdc2020DataSource.dataSourceName = 'wdc2020';
Wdc2020DataSource.defaultConfig = config;
Wdc2020DataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.wdc2020', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], Wdc2020DataSource);
exports.Wdc2020DataSource = Wdc2020DataSource;
//# sourceMappingURL=wdc2020.datasource.js.map