"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
var isAdmin = true;
var checkAdmin = function (req, res, next) {
    if (isAdmin) {
        return next();
    }
    else {
        return res
            .status(401)
            .json({ error: "No estás autorizado a realizar esta acción" });
    }
};
exports.checkAdmin = checkAdmin;
