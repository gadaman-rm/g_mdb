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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = exports.GMDb = void 0;
var mongodb_1 = require("mongodb");
Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function () { return mongodb_1.ObjectId; } });
var GMDb = /** @class */ (function () {
    function GMDb(url) {
        this.find = function (dbName, collectionName, searchObj, serachCondition, projection) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, filteredDocs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            if (!projection) return [3 /*break*/, 2];
                            return [4 /*yield*/, collection.find(searchObj, serachCondition).project(projection).toArray()];
                        case 1:
                            filteredDocs = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, collection.find(searchObj, serachCondition).toArray()];
                        case 3:
                            filteredDocs = _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, filteredDocs];
                    }
                });
            });
        };
        this.findOne = function (dbName, collectionName, searchObj) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, foundDoc;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.findOne(searchObj)];
                        case 1:
                            foundDoc = _a.sent();
                            return [2 /*return*/, foundDoc];
                    }
                });
            });
        };
        this.updateOne = function (dbName, collectionName, searchObj, updateObj) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, updateResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.updateOne(searchObj, {
                                    $set: updateObj,
                                })];
                        case 1:
                            updateResult = _a.sent();
                            return [2 /*return*/, updateResult];
                    }
                });
            });
        };
        this.insertOne = function (dbName, collectionName, insertObj) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, insertResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.insertOne(insertObj)];
                        case 1:
                            insertResult = _a.sent();
                            return [2 /*return*/, insertResult];
                    }
                });
            });
        };
        this.deleteOne = function (dbName, collectionName, searchObj) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, foundDoc;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.deleteOne(searchObj)];
                        case 1:
                            foundDoc = _a.sent();
                            return [2 /*return*/, foundDoc];
                    }
                });
            });
        };
        this.findSortSkipLimit = function (dbName, collectionName, searchObj, sortObj, skipIndex, limitCount) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, filteredDocs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.find(searchObj).sort(sortObj).skip(skipIndex).limit(limitCount).toArray()];
                        case 1:
                            filteredDocs = _a.sent();
                            return [2 /*return*/, filteredDocs];
                    }
                });
            });
        };
        this.countOfData = function (dbName, collectionName, searchObj) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.countDocuments(searchObj)];
                        case 1:
                            count = _a.sent();
                            return [2 /*return*/, count];
                    }
                });
            });
        };
        this.createIndex = function (dbName, collectionName, fields, options) {
            return __awaiter(this, void 0, void 0, function () {
                var db, collection, createResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = this.client.db(dbName);
                            collection = db.collection(collectionName);
                            return [4 /*yield*/, collection.createIndex(fields, options)];
                        case 1:
                            createResult = _a.sent();
                            return [2 /*return*/, createResult];
                    }
                });
            });
        };
        this.client = new mongodb_1.MongoClient(url);
        this.client.connect();
    }
    return GMDb;
}());
exports.GMDb = GMDb;
