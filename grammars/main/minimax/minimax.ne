@builtin "number.ne"
@builtin "whitespace.ne"








minimax -> countedextrema
			| uncountedextrema

countedextrema -> countedmaxima
			| countedminima	

uncountedextrema -> maxima
			| minima


countedmaxima -> maxima ws number
	| number ws maxima
countedminima -> minima ws number
	| number ws minima


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



aftern -> "st"
		| "nd"
		| "rd"
		| "th"		

number -> int 
	| int number



ws -> " "
		| " " ws	


