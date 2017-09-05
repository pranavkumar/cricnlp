@include "./ws.ne"
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