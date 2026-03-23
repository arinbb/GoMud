
function onStart(user, buff) {
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">The New Orleans heat settles over you. Your senses sharpen. Every color is brighter, every smell stronger, every person more interesting than they have any right to be.</ansi>");
    return true;
}

function onEnd(user, buff) {
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">The heat lifts. The jazz fades. New Orleans releases its grip on you, reluctantly.</ansi>");
    return true;
}
