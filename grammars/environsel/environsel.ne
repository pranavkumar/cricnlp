@include "./grammars/entity.ne"
@include "./grammars/format.ne"
@include "./grammars/tournament.ne"
@include "./grammars/achievement.ne"
@include "./grammars/skill.ne"
@include "./grammars/place.ne"




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
