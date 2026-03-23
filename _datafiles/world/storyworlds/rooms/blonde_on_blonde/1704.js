
// One of Us Must Know - Track 4
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The snow continues as you dissolve, the footprints already filling, already gone. You are back in the Grand Library where nothing is covered or cold or late.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the snowfall, drifting back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "get") {
        if (rest.indexOf("coat") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You lift the coat from the bench. It is heavier than expected -- not from weight but from having been left here, from the weight of the leaving. The snow falls off the shoulders. You hold it for a moment and then put it back. It belongs to the bench. It belongs to the argument. It belongs to the song.</ansi>");
            return true;
        }
    }

    return false;
}
