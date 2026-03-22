
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"red\">A cold dread settles into your bones. The Overlook Hotel presses against your mind like a hand on a window. Your senses sharpen — you hear whispers in the walls, notice details you shouldn't be able to see. The hotel wants you to see. It wants you to know.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"15\">The dread lifts like fog burning off in morning sun. Warmth returns to your fingers. The whispers in the walls fade to silence. You can breathe again.</ansi>");
}
