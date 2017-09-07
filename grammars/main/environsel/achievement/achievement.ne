@include "./wicketpos/wicketpos.ne"
@builtin "number.ne"

achievement-> wickettakerstring
		| "run getter"i
		| "run getters"i
		| "scorer"i
		| "runs"i
		| "wickets"i
		| "fifties"i
		| "century"i
		| "centuries"i
		| "score"i
		| "scorers"i
		| partnership

partnership -> partnershipstring
		| wicketpartnership
		| runpartnership


wicketpartnership -> nthwicket ws partnershipstring

runpartnership -> number ws runstring ws partnershipstring


nthwicket -> wicketpos ws "wicket"

partnershipstring -> "partnership"i
			| "partnerships"i

runstring -> "run"
	| "runs"			

wickettakerstring -> "wicket taker"i
			| "wicket takers"i

number -> int 
	| int number

ws -> " "
		| " " ws			

