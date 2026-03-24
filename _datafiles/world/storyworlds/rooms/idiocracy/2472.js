// Idiocracy -- The Street (2472)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Brawndo jingle cuts out and the garish signage fades and the projection light evens to white. You are back in the Screening Room. The silence is enormous. You stand in it for a while listening to the silence where the jingle was, thinking about crops and electrolytes and a man named Joe who only wanted to know why nobody would water the plants with water.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of 2505 and back toward something quieter.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "go" || cmd == "enter" || cmd == "stadium") {
        if (rest.toLowerCase().indexOf("stadium") >= 0 || cmd == "stadium") {
            user.Command("go stadium");
            return false;
        }
    }

    if (cmd == "go" && rest.toLowerCase().indexOf("alley") >= 0) {
        user.Command("go alley");
        return false;
    }

    return false;
}
