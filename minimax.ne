@builtin "number.ne"
@builtin "whitespace.ne"



minimax -> unqextrema



unqextrema -> countedextrema
			| uncountedextrema

countedextrema -> countedmaxima
			| countedminima	

uncountedextrema -> maxima
			| minima


countedmaxima -> maxima _ number
countedminima -> minima _ number


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


