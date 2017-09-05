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
    {"name": "entity", "symbols": ["entity$subexpression$10"]},
    {"name": "format$subexpression$1", "symbols": [/[oO]/, /[dD]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "format", "symbols": ["format$subexpression$1"]},
    {"name": "format$subexpression$2", "symbols": [/[tT]/, /[eE]/, /[sS]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "format", "symbols": ["format$subexpression$2"]},
    {"name": "format$subexpression$3", "symbols": [/[tT]/, {"literal":"2"}, {"literal":"0"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "format", "symbols": ["format$subexpression$3"]},
    {"name": "format$subexpression$4", "symbols": [/[aA]/, /[lL]/, /[lL]/, {"literal":" "}, /[fF]/, /[oO]/, /[rR]/, /[mM]/, /[aA]/, /[tT]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "format", "symbols": ["format$subexpression$4"]},
    {"name": "tournament$subexpression$1", "symbols": [/[aA]/, /[sS]/, /[iI]/, /[aA]/, {"literal":" "}, /[cC]/, /[uU]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "tournament", "symbols": ["tournament$subexpression$1"]},
    {"name": "tournament$subexpression$2", "symbols": [/[wW]/, /[oO]/, /[rR]/, /[lL]/, /[dD]/, {"literal":" "}, /[cC]/, /[uU]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "tournament", "symbols": ["tournament$subexpression$2"]},
    {"name": "tournament$subexpression$3", "symbols": [/[iI]/, /[pP]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "tournament", "symbols": ["tournament$subexpression$3"]},
    {"name": "tournament$subexpression$4", "symbols": [/[pP]/, /[sS]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "tournament", "symbols": ["tournament$subexpression$4"]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]},
    {"name": "wicketpos", "symbols": ["numpos", "aftern"]},
    {"name": "wicketpos", "symbols": ["numpos", "ws", "aftern"]},
    {"name": "wicketpos", "symbols": ["alphapos"]},
    {"name": "numpos", "symbols": [/[1-9]/]},
    {"name": "numpos$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "numpos", "symbols": ["numpos$string$1"]},
    {"name": "aftern$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "aftern", "symbols": ["aftern$string$1"]},
    {"name": "aftern$string$2", "symbols": [{"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "aftern", "symbols": ["aftern$string$2"]},
    {"name": "aftern$string$3", "symbols": [{"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "aftern", "symbols": ["aftern$string$3"]},
    {"name": "aftern$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "aftern", "symbols": ["aftern$string$4"]},
    {"name": "alphapos$string$1", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$1"]},
    {"name": "alphapos$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$2"]},
    {"name": "alphapos$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$3"]},
    {"name": "alphapos$string$4", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$4"]},
    {"name": "alphapos$string$5", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"f"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$5"]},
    {"name": "alphapos$string$6", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"x"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$6"]},
    {"name": "alphapos$string$7", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$7"]},
    {"name": "alphapos$string$8", "symbols": [{"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$8"]},
    {"name": "alphapos$string$9", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$9"]},
    {"name": "alphapos$string$10", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$10"]},
    {"name": "alphapos$string$11", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "alphapos", "symbols": ["alphapos$string$11"]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]},
    {"name": "achievement", "symbols": ["wickettakerstring"]},
    {"name": "achievement$subexpression$1", "symbols": [/[rR]/, /[uU]/, /[nN]/, {"literal":" "}, /[gG]/, /[eE]/, /[tT]/, /[tT]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$1"]},
    {"name": "achievement$subexpression$2", "symbols": [/[sS]/, /[cC]/, /[oO]/, /[rR]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$2"]},
    {"name": "achievement$subexpression$3", "symbols": [/[rR]/, /[uU]/, /[nN]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$3"]},
    {"name": "achievement$subexpression$4", "symbols": [/[wW]/, /[iI]/, /[cC]/, /[kK]/, /[eE]/, /[tT]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$4"]},
    {"name": "achievement$subexpression$5", "symbols": [/[fF]/, /[iI]/, /[fF]/, /[tT]/, /[iI]/, /[eE]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$5"]},
    {"name": "achievement$subexpression$6", "symbols": [/[cC]/, /[eE]/, /[nN]/, /[tT]/, /[uU]/, /[rR]/, /[iI]/, /[eE]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$6"]},
    {"name": "achievement$subexpression$7", "symbols": [/[sS]/, /[cC]/, /[oO]/, /[rR]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$7"]},
    {"name": "achievement$subexpression$8", "symbols": [/[sS]/, /[cC]/, /[oO]/, /[rR]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "achievement", "symbols": ["achievement$subexpression$8"]},
    {"name": "achievement", "symbols": ["partnership"]},
    {"name": "partnership", "symbols": ["partnershipstring"]},
    {"name": "partnership", "symbols": ["nthwicket", "ws", "partnershipstring"]},
    {"name": "nthwicket$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nthwicket", "symbols": ["wicketpos", "ws", "nthwicket$string$1"]},
    {"name": "partnershipstring$subexpression$1", "symbols": [/[pP]/, /[aA]/, /[rR]/, /[tT]/, /[nN]/, /[eE]/, /[rR]/, /[sS]/, /[hH]/, /[iI]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "partnershipstring", "symbols": ["partnershipstring$subexpression$1"]},
    {"name": "partnershipstring$subexpression$2", "symbols": [/[pP]/, /[aA]/, /[rR]/, /[tT]/, /[nN]/, /[eE]/, /[rR]/, /[sS]/, /[hH]/, /[iI]/, /[pP]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "partnershipstring", "symbols": ["partnershipstring$subexpression$2"]},
    {"name": "wickettakerstring$subexpression$1", "symbols": [/[wW]/, /[iI]/, /[cC]/, /[kK]/, /[eE]/, /[tT]/, {"literal":" "}, /[tT]/, /[aA]/, /[kK]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "wickettakerstring", "symbols": ["wickettakerstring$subexpression$1"]},
    {"name": "wickettakerstring$subexpression$2", "symbols": [/[wW]/, /[iI]/, /[cC]/, /[kK]/, /[eE]/, /[tT]/, {"literal":" "}, /[tT]/, /[aA]/, /[kK]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "wickettakerstring", "symbols": ["wickettakerstring$subexpression$2"]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]},
    {"name": "skill$subexpression$1", "symbols": [/[bB]/, /[aA]/, /[tT]/, /[tT]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "skill", "symbols": ["skill$subexpression$1"]},
    {"name": "skill$subexpression$2", "symbols": [/[bB]/, /[oO]/, /[wW]/, /[lL]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "skill", "symbols": ["skill$subexpression$2"]},
    {"name": "skill$subexpression$3", "symbols": [/[fF]/, /[iI]/, /[eE]/, /[lL]/, /[dD]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "skill", "symbols": ["skill$subexpression$3"]},
    {"name": "place$subexpression$1", "symbols": [/[mM]/, /[oO]/, /[hH]/, /[aA]/, /[lL]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "place", "symbols": ["place$subexpression$1"]},
    {"name": "place$subexpression$2", "symbols": [/[mM]/, /[uU]/, /[mM]/, /[bB]/, /[aA]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "place", "symbols": ["place$subexpression$2"]},
    {"name": "environsel", "symbols": ["entityenviron"]},
    {"name": "environsel", "symbols": ["statsenviron"]},
    {"name": "environsel", "symbols": ["achievementenviron"]},
    {"name": "entityenviron", "symbols": ["entity", "ws", "environ"]},
    {"name": "statsenviron", "symbols": ["stats", "ws", "environ"]},
    {"name": "achievementenviron", "symbols": ["achievement", "ws", "environ"]},
    {"name": "stats$string$1", "symbols": [{"literal":"a"}, {"literal":"v"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "stats", "symbols": ["skill", "ws", "stats$string$1"]},
    {"name": "environ$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "environ", "symbols": ["environ$string$1", "ws", "arena"]},
    {"name": "arena", "symbols": ["format"]},
    {"name": "arena", "symbols": ["tournament"]},
    {"name": "arena", "symbols": ["place"]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "minimax", "symbols": ["unqextrema"]},
    {"name": "unqextrema", "symbols": ["countedextrema"]},
    {"name": "unqextrema", "symbols": ["uncountedextrema"]},
    {"name": "countedextrema", "symbols": ["countedmaxima"]},
    {"name": "countedextrema", "symbols": ["countedminima"]},
    {"name": "uncountedextrema", "symbols": ["maxima"]},
    {"name": "uncountedextrema", "symbols": ["minima"]},
    {"name": "countedmaxima", "symbols": ["maxima", "ws", "number"]},
    {"name": "countedminima", "symbols": ["minima", "ws", "number"]},
    {"name": "maxima$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "maxima", "symbols": ["maxima$string$1"]},
    {"name": "maxima$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "maxima", "symbols": ["maxima$string$2"]},
    {"name": "maxima$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "maxima", "symbols": ["maxima$string$3"]},
    {"name": "maxima$string$4", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "maxima", "symbols": ["maxima$string$4"]},
    {"name": "maxima$string$5", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "maxima", "symbols": ["maxima$string$5"]},
    {"name": "minima$string$1", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minima", "symbols": ["minima$string$1"]},
    {"name": "minima$string$2", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minima", "symbols": ["minima$string$2"]},
    {"name": "minima$string$3", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minima", "symbols": ["minima$string$3"]},
    {"name": "minima$string$4", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minima", "symbols": ["minima$string$4"]},
    {"name": "number", "symbols": ["int"]},
    {"name": "number", "symbols": ["int", "number"]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]},
    {"name": "cricnlp", "symbols": ["minimax", "_", "environsel"]}
]
  , ParserStart: "cricnlp"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
