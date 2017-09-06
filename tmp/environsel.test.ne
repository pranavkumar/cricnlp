



environsel -> entityenviron | statsenviron | achievementenviron
entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
stats -> skill ws "avg"
environ -> "in" ws "test"
arena -> format
		| tournament
		| place
ws -> " "
		| " " ws						

place -> "Mohali"i
	| "Mumbai"i
skill -> "batting"i
		| "bowling"i 
		| "fielding"i


achievement-> wickettakerstring
		| "run getter"i
		| "scorer"i
		| "runs"i
		| "wickets"i
		| "fifties"i
		| "centuries"i
		| "score"i
		| "scorers"i
		| partnership

partnership -> partnershipstring
		| nthwicket ws partnershipstring


nthwicket -> wicketpos ws "wicket"

partnershipstring -> "partnership"i
			| "partnerships"i

wickettakerstring -> "wicket taker"i
			| "wicket takers"i

ws -> " "
		| " " ws			



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

ws -> " "
		| " " ws	
tournament -> "Asia Cup"i
		| "World Cup"i
		| "IPL"i
		| "PSL"i

entity -> "batsman"i
		| "batsmen"i 
		| "bowler"i
		| "bowlers"i 
		| "cricketer"i
		| "cricketers"i 
		| "umpire"i
		| "umpires"i
		| "fielder"i
		| "fielders"i

format -> "ODI"i 
		| "Test"i
		| "T20"i 
		| "all formats"i