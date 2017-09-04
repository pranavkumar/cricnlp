// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "hello", "symbols": ["minimax", "ws", "environsel"]},
    {"name": "minimax", "symbols": ["maxima"]},
    {"name": "minimax", "symbols": ["minima"]},
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
    {"name": "entity$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$1"]},
    {"name": "entity$string$2", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$2"]},
    {"name": "entity$string$3", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$3"]},
    {"name": "entity$string$4", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$4"]},
    {"name": "entity$string$5", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$5"]},
    {"name": "entity$string$6", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$6"]},
    {"name": "entity$string$7", "symbols": [{"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$7"]},
    {"name": "entity$string$8", "symbols": [{"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$8"]},
    {"name": "entity$string$9", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"e"}, {"literal":"l"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$9"]},
    {"name": "entity$string$10", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"e"}, {"literal":"l"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "entity", "symbols": ["entity$string$10"]},
    {"name": "nationality$string$1", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$1"]},
    {"name": "nationality$string$2", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$2"]},
    {"name": "nationality$string$3", "symbols": [{"literal":"A"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$3"]},
    {"name": "nationality$string$4", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$4"]},
    {"name": "nationality$string$5", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$5"]},
    {"name": "nationality$string$6", "symbols": [{"literal":"B"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$6"]},
    {"name": "nationality$string$7", "symbols": [{"literal":"A"}, {"literal":"f"}, {"literal":"g"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$7"]},
    {"name": "nationality$string$8", "symbols": [{"literal":"I"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$8"]},
    {"name": "nationality$string$9", "symbols": [{"literal":"S"}, {"literal":"r"}, {"literal":"i"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$9"]},
    {"name": "nationality$string$10", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"A"}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$10"]},
    {"name": "nationality$string$11", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"Z"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nationality", "symbols": ["nationality$string$11"]},
    {"name": "achievement$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$1"]},
    {"name": "achievement$string$2", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$2"]},
    {"name": "achievement$string$3", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$3"]},
    {"name": "achievement$string$4", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$4"]},
    {"name": "achievement$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$5"]},
    {"name": "achievement$string$6", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"f"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$6"]},
    {"name": "achievement$string$7", "symbols": [{"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$7"]},
    {"name": "achievement$string$8", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "achievement", "symbols": ["achievement$string$8"]},
    {"name": "achievement", "symbols": ["partnership"]},
    {"name": "partnership$string$1", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "partnership", "symbols": ["partnership$string$1"]},
    {"name": "partnership$string$2", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "partnership", "symbols": ["nthwicket", "ws", "partnership$string$2"]},
    {"name": "nthwicket$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nthwicket", "symbols": ["wicketpos", "ws", "nthwicket$string$1"]},
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
    {"name": "arena", "symbols": ["format"]},
    {"name": "arena", "symbols": ["tournaments"]},
    {"name": "format$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "format", "symbols": ["format$string$1"]},
    {"name": "format", "symbols": [/[Oo]/, /[Dd]/, /[Ii]/]},
    {"name": "format", "symbols": [/[Tt]/, /[Ee]/, /[Ss]/, /[Tt]/]},
    {"name": "format$string$2", "symbols": [{"literal":"2"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "format", "symbols": [/[Tt]/, "format$string$2"]},
    {"name": "format$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "format", "symbols": ["format$string$3"]},
    {"name": "tournaments", "symbols": ["asiacupregex"]},
    {"name": "tournaments", "symbols": ["worldcupregex"]},
    {"name": "tournaments", "symbols": ["iplregex"]},
    {"name": "tournaments", "symbols": ["pslregex"]},
    {"name": "iplregex", "symbols": [/[Ii]/, /[Pp]/, /[Ll]/]},
    {"name": "asiacupregex", "symbols": [/[Aa]/, /[Ss]/, /[Ii]/, /[Aa]/, "ws", /[Cc]/, /[Uu]/, /[Pp]/]},
    {"name": "worldcupregex", "symbols": [/[Ww]/, /[Oo]/, /[Rr]/, /[Ll]/, /[Dd]/, "ws", /[Cc]/, /[Uu]/, /[Pp]/]},
    {"name": "pslregex", "symbols": [/[Pp]/, /[Ss]/, /[Ll]/]},
    {"name": "skill", "symbols": [/[Bb]/, /[Aa]/, /[Tt]/, /[Tt]/, /[Ii]/, /[Nn]/, /[Gg]/]},
    {"name": "skill", "symbols": [/[Bb]/, /[Oo]/, /[Ww]/, /[Ll]/, /[Ii]/, /[Nn]/, /[Gg]/]},
    {"name": "skill", "symbols": [/[Ff]/, /[Ii]/, /[Ee]/, /[Ll]/, /[Dd]/, /[Ii]/, /[Nn]/, /[Gg]/]},
    {"name": "ws", "symbols": [{"literal":" "}]},
    {"name": "ws", "symbols": [{"literal":" "}, "ws"]}
]
  , ParserStart: "hello"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
