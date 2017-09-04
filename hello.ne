
hello -> minimax ws environsel

minimax -> maxima | minima
environsel -> entityenviron | statsenviron | achievementenviron

entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
				
stats -> skill ws "avg"
environ -> "in" ws arena



maxima -> "best" 
		| "top" 
		| "most" 
		| "highest"
		| "fastest"

minima -> "worst" 
		| "least" 
		| "lowest"
		| "slowest"

entity -> "batsman"
		| "batsmen" 
		| "bowler"
		| "bowlers" 
		| "cricketer"
		| "cricketers" 
		| "umpire"
		| "umpires"
		| "fielder"
		| "fielders"


nationality -> "Indian"
		| "Pakistani"
		| "Australian"
		| "English"
		| "West indian"
		| "Bangladeshi"
		| "Afghanistani"
		| "Irish"
		| "Sri lankan"
		| "South African"
		| "New Zealand"		

achievement-> "wicket taker"
		| "run getter"
		| "scorer"
		| "runs"
		| "wickets"
		| "fifties"
		| "centuries"
		| "score"
		| partnership

partnership -> "partnership"
		| nthwicket ws "partnership"		

nthwicket -> wicketpos ws "wicket"


wicketpos -> numpos aftern
		| numpos ws aftern
		| alphapos

numpos -> [1-9]
		| "10"


aftern -> "st"
		| "nd"
		| "rd"
		| "th"


alphapos -> "first"
	| "second"
	| "third"
	| "fourth"
	| "fifth"
	| "sixth"
	| "seventh"
	| "eighth"
	| "ninth"
	| "tenth"
	| "last"				

arena -> format
		| tournaments				

format -> "all formats" 
		| [Oo] [Dd] [Ii] 
		| [Tt] [Ee] [Ss] [Tt] 
		| [Tt] "20" 
		| "all formats"

tournaments -> asiacupregex
		| worldcupregex
		| iplregex
		| pslregex

iplregex -> [Ii] [Pp] [Ll]
asiacupregex -> [Aa] [Ss] [Ii] [Aa] ws [Cc] [Uu] [Pp]
worldcupregex -> [Ww] [Oo] [Rr] [Ll] [Dd] ws [Cc] [Uu] [Pp]
pslregex -> [Pp] [Ss] [Ll]

skill -> [Bb] [Aa] [Tt] [Tt] [Ii] [Nn] [Gg]
		| [Bb] [Oo] [Ww] [Ll] [Ii] [Nn] [Gg] 
		| [Ff] [Ii] [Ee] [Ll] [Dd] [Ii] [Nn] [Gg]

ws -> " "
		| " " ws


