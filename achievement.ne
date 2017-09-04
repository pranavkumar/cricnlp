@include "./wicketpos.ne"
@include "./ws.ne"
achievement-> "wicket taker"i
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
