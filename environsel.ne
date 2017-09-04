@include "./entity.ne"
@include "./format.ne"
@include "./tournaments.ne"
@include "./achievement.ne"
@include "./skill.ne"
@include "./ws.ne"




environsel -> entityenviron | statsenviron | achievementenviron
entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
stats -> skill ws "avg"
environ -> "in" ws arena
arena -> format
		| tournaments				
