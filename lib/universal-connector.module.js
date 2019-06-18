"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UniversalConnectorModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bot_controller_1 = require("./bot.controller");
const universal_client_adapter_1 = require("./universal-client.adapter");
let UniversalConnectorModule = UniversalConnectorModule_1 = class UniversalConnectorModule {
    static forRoot(entities = [], options) {
        const providers = [
            universal_client_adapter_1.UniversalClientAdapter,
        ];
        return {
            module: UniversalConnectorModule_1,
            controllers: [bot_controller_1.BotController],
            providers: providers,
            exports: providers,
        };
    }
};
UniversalConnectorModule = UniversalConnectorModule_1 = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
        ],
    })
], UniversalConnectorModule);
exports.UniversalConnectorModule = UniversalConnectorModule;
//# sourceMappingURL=universal-connector.module.js.map