@builtin "number.ne"
@builtin "whitespace.ne"
@builtin "whitespace.ne"


@include "./ws.ne"



minimax -> unqextrema



unqextrema -> countedextrema
			| uncountedextrema

countedextrema -> countedmaxima
			| countedminima	

uncountedextrema -> maxima
			| minima


countedmaxima -> maxima ws number
countedminima -> minima ws number


maxima -> "best" 
		| "top" 
		| "most" 
		| "highest"
		| "fastest"

minima -> "worst" 
		| "least" 
		| "lowest"
		| "slowest"

number -> int 
	| int number

ws -> " "
		| " " ws	


