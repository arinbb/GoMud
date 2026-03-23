
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You let the balloon's string run through your fingers. It floats upward, straining gently, and hangs there at the end of the string, round and perfectly red, turning slowly. It smells, faintly, of green walls and dying fire and a voice whispering hush. You pull it back down and hold it. The balloon is content to be held.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lets a tiny red balloon float up on its string, then pulls it gently back.", user.UserId());
    return true;
}

function onCommand_release(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You let go of the string. The balloon rises. You watch it go -- up past the furniture, up past the ceiling, up into wherever balloons go when you let them go. The string trails behind it, white and getting smaller. You watch until you cannot see it. You are surprised to find you are not sad. The balloon needed to go. Balloons always do. You reach into your pocket and find the string is there -- the balloon will come back when you need it.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " releases the tiny red balloon and watches it drift upward and away.", user.UserId());
    return true;
}

function onFound(user, item) {
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">The quiet old lady presses something into your hand as you prepare to leave -- a tiny red balloon on a white string. 'Goodnight,' she says. You carry it out of the book and into the world.</ansi>");
    return false;
}
