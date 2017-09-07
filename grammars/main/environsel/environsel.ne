@include "./format/format.ne"
@include "./entity/entity.ne"
@include "./tournament/tournament.ne"
@include "./achievement/achievement.ne"
@include "./place/place.ne"
@include "./skill/skill.ne"




environsel -> entityenviron | statsenviron | achievementenviron
entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
stats -> skill
	| skill ws "avg"
environ -> "in" ws arena
arena -> format
		| tournament
		| place
ws -> " "
		| " " ws						
