@include "./wicketpos.ne"
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


