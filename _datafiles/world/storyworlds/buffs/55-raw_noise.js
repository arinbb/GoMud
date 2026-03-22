
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"8\">The noise strips away pretense. Everything is louder, realer, more honest. You hear what's actually there.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"8\">The noise fades. The world softens back to its usual comfortable lies.</ansi>");
}
