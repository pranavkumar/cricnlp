// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "entity$subexpression$1", "symbols": [/[bB]/, /[aA]/, /[tT]/, /[sS]/, /[mM]/, /[aA]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$1"]},
    {"name": "entity$subexpression$2", "symbols": [/[bB]/, /[aA]/, /[tT]/, /[sS]/, /[mM]/, /[eE]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$2"]},
    {"name": "entity$subexpression$3", "symbols": [/[bB]/, /[oO]/, /[wW]/, /[lL]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$3"]},
    {"name": "entity$subexpression$4", "symbols": [/[bB]/, /[oO]/, /[wW]/, /[lL]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$4"]},
    {"name": "entity$subexpression$5", "symbols": [/[cC]/, /[rR]/, /[iI]/, /[cC]/, /[kK]/, /[eE]/, /[tT]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$5"]},
    {"name": "entity$subexpression$6", "symbols": [/[cC]/, /[rR]/, /[iI]/, /[cC]/, /[kK]/, /[eE]/, /[tT]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$6"]},
    {"name": "entity$subexpression$7", "symbols": [/[uU]/, /[mM]/, /[pP]/, /[iI]/, /[rR]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$7"]},
    {"name": "entity$subexpression$8", "symbols": [/[uU]/, /[mM]/, /[pP]/, /[iI]/, /[rR]/, /[eE]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$8"]},
    {"name": "entity$subexpression$9", "symbols": [/[fF]/, /[iI]/, /[eE]/, /[lL]/, /[dD]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$9"]},
    {"name": "entity$subexpression$10", "symbols": [/[fF]/, /[iI]/, /[eE]/, /[lL]/, /[dD]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "entity", "symbols": ["entity$subexpression$10"]}
]
  , ParserStart: "entity"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
