@include "./wicketpos/wicketpos.ne"

achievement-> wickettakerstring
		| "run getter"i
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
		| nthwicket ws partnershipstring


nthwicket -> wicketpos ws "wicket"

partnershipstring -> "partnership"i
			| "partnerships"i

wickettakerstring -> "wicket taker"i
			| "wicket takers"i

ws -> " "
		| " " ws			

