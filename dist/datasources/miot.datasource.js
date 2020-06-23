"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'miot',
    connector: 'mongodb',
    url: 'mongodb+srv://19809:hiqIjsu5ZLIAEnqh@cluster0-dws0l.mongodb.net/test?retryWrites=true&w=majority',
    //url: 'mongodb+srv://iotecosmiot:iotecos123@cluster0-dws0l.mongodb.net/test?retryWrites=true&w=majority',
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
let MiotDataSource = class MiotDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MiotDataSource.dataSourceName = 'miot';
MiotDataSource.defaultConfig = config;
MiotDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.miot', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MiotDataSource);
exports.MiotDataSource = MiotDataSource;
//# sourceMappingURL=miot.datasource.js.map