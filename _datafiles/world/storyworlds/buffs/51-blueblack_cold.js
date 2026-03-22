
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"6\">The blueblack cold settles into your bones. Every sound is sharper -- the creak of floorboards, the tick of the radiator, the silence between. You hear everything in this house.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"yellow\">The cold releases you. Warmth returns to your hands and face.</ansi>");
}
