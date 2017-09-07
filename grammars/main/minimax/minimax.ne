@builtin "number.ne"
@builtin "whitespace.ne"








minimax -> countedextrema
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
		| "greatest"
		| "fastest"

minima -> "worst" 
		| "least" 
		| "lowest"
		| "slowest"

number -> int 
	| int number

ws -> " "
		| " " ws	


