
// JojaMart - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The fluorescent hum cuts out. The Joja jingle silences. The Library, with all its warm imperfection, is significantly better. You are back among the books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks out through the automatic door and does not walk back in.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
