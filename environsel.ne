@include "./entity.ne"
@include "./format.ne"
@include "./tournament.ne"
@include "./achievement.ne"
@include "./skill.ne"
@include "./place.ne"
@include "./ws.ne"




environsel -> entityenviron | statsenviron | achievementenviron
entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
stats -> skill ws "avg"
environ -> "in" ws arena
arena -> format
		| tournament
		| place
ws -> " "
		| " " ws						
