@include "./format.ne"
@include "./entity.ne"
@include "./tournament.ne"
@include "./achievement/achievement.ne"
@include "./skill.ne"
@include "./place.ne"




environsel -> entityenviron | statsenviron | achievementenviron
entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
stats -> skill ws "avg"
environ -> "in" ws "test"
arena -> format
		| tournament
		| place
ws -> " "
		| " " ws						
