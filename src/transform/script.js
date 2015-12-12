var es = require("../es");
var ast = require("../ast");
var helpersFor = require("../helpers-for");
var fileWrapper = require("../file-wrapper");

function Script(transform, node) {
    var ret = ast.ExprStmt(null, ast.Undefined(null));
    var block = ast.Block(null, node.statements, ret);
    var expr = transform(block);
    var predef = helpersFor(expr);
    var stmt = es.ExpressionStatement(null, expr);
    var body = predef.concat(stmt);
    return fileWrapper(body);
}

module.exports = Script;
