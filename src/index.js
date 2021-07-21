"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = __importDefault(require("fs/promises"));
var FileTest = /** @class */ (function () {
    function FileTest(path) {
        this.path = path;
    }
    FileTest.prototype.getRandomNumber = function (min, max, decimal) {
        if (decimal) {
            var num = Math.random() * (max - min);
            return Number((num + min).toFixed(2));
        }
        else {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    };
    FileTest.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, promises_1.default.readFile(this.path, "utf-8")];
                    case 1:
                        data = _a.sent();
                        console.log(JSON.parse(data));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log([]);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileTest.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, dataParsed, randomNumber, newData, error_2, randomNumber, newData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, promises_1.default.readFile(this.path, "utf-8")];
                    case 1:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 3];
                        dataParsed = JSON.parse(data);
                        randomNumber = this.getRandomNumber(1, 1000, false);
                        newData = {
                            id: dataParsed.length + 1,
                            price: this.getRandomNumber(1, 1000, true),
                            title: "Product " + randomNumber,
                            thumbnail: "Link " + randomNumber,
                        };
                        dataParsed.push(newData);
                        return [4 /*yield*/, promises_1.default.writeFile(this.path, JSON.stringify(dataParsed, null, "\t"))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        randomNumber = this.getRandomNumber(1, 1000, false);
                        newData = [
                            {
                                id: 1,
                                price: this.getRandomNumber(1, 1000, true),
                                title: "Product " + randomNumber,
                                thumbnail: "Link " + randomNumber,
                            },
                        ];
                        return [4 /*yield*/, promises_1.default.writeFile(this.path, JSON.stringify(newData, null, "\t"))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FileTest.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, promises_1.default.rm(this.path)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FileTest;
}());
var file = new FileTest("./producto.txt");
