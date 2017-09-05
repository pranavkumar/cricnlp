@include "./entity.ne"
@include "./grammars/environsel/format.ne"
@include "./grammars/environsel/tournament.ne"
@include "./grammars/environsel/achievement/achievement.ne"
@include "./grammars/environsel/skill.ne"
@include "./grammars/environsel/place.ne"




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
