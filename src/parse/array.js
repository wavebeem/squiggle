var H = require("../parse-helpers");
var ast = require("../ast");

var wrap = H.wrap;
var list0 = H.list0;

module.exports = function(ps) {
    var Array_ =
        wrap("[", list0(ps.Separator, ps.Expr), "]")
        .map(ast.Array);

    return Array_;
};
