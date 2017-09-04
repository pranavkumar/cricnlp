@include "./tournaments.ne"
@include "./entity.ne"
@include "./nationality.ne"
@include "./format.ne"
@include "./achievement.ne"
@include "./minimax.ne"
@include "./ws.ne"

cricnlp -> minimax ws environsel

environsel -> entityenviron | statsenviron | achievementenviron

entityenviron -> entity ws environ
statsenviron -> stats ws environ
achievementenviron -> achievement ws environ
				
stats -> skill ws "avg"
environ -> "in" ws arena






arena -> format
		| tournaments				

format -> "all formats" 
		| [Oo] [Dd] [Ii] 
		| [Tt] [Ee] [Ss] [Tt] 
		| [Tt] "20" 
		| "all formats"


iplregex -> [Ii] [Pp] [Ll]
asiacupregex -> [Aa] [Ss] [Ii] [Aa] ws [Cc] [Uu] [Pp]
worldcupregex -> [Ww] [Oo] [Rr] [Ll] [Dd] ws [Cc] [Uu] [Pp]
pslregex -> [Pp] [Ss] [Ll]

skill -> [Bb] [Aa] [Tt] [Tt] [Ii] [Nn] [Gg]
		| [Bb] [Oo] [Ww] [Ll] [Ii] [Nn] [Gg] 
		| [Ff] [Ii] [Ee] [Ll] [Dd] [Ii] [Nn] [Gg]




