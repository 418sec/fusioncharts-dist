let groupFadeIn=function(){return[{initialAttr:{opacity:1},finalAttr:{opacity:1},slot:'plot'}]},sumlabelFadeIn=function(){return[{initialAttr:{opacity:0},finalAttr:{opacity:1},slot:'final'}]};export default{"initial.group.cartesianStackGroup":function(){return{"group.appearing":groupFadeIn,"text.appearing":sumlabelFadeIn,"*":null}},"initial.group.marimekkoStackgroup":function(){return{"text.appearing":sumlabelFadeIn,"*":null}}};