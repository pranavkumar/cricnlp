@include "./wicketpos/wicketpos.ne"
@builtin "number.ne"

achievement-> wickettakerstring
		| "runs"i
		| "spell"i
		| "spells"i
		| "inning"i
		| "innings"i
		| "wickets"i
		| "fifties"i
		| "century"i
		| "centuries"i
		| "score"i
		| "scores"i
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

