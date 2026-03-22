
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"green\">Reality bends. Colors are brighter, sounds are louder, and the impossible feels like it might just be Tuesday. Cartoon logic is in full effect.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"8\">The cartoon logic fades. Physics reasserts itself, somewhat disappointingly.</ansi>");
}
