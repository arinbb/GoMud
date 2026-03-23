// Stand By Me -- The Clearing by the Creek (2410)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The creek sound fades. The clearing closes. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands in the clearing a moment, then is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
