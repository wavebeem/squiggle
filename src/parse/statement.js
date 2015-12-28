"use strict";

var P = require("parsimmon");

var ast = require("../ast");

module.exports = function(ps) {
    return P.alt(
        ps.Let,
        ps.Expr.map(function(expr) {
            return ast.ExprStmt(null, expr);
        })
    );
};
