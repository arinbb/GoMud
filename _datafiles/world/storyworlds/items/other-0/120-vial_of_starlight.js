
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">You hold up the vial of starlight. The swirling liquid blazes with sudden intensity, and for a moment the world around you is transformed — every surface becomes a canvas of thick, passionate brushstrokes. Colors burn with impossible vividness. Then the light settles, and the world returns to normal, but you feel a lingering warmth from the captured starlight.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a glowing vial, and for a moment the air around them shimmers with swirling starlight.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The starlight inside the vial moves in slow spirals, echoing the great turning sky of Van Gogh's painting. It is warm to the touch and pulses gently, like a tiny heartbeat made of light.</ansi>");
    return true;
}
