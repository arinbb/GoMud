
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parents' room softens — the patched quilt, the shoe polish tin, the pressed Sunday suit all fading like a memory you cannot hold. You stand in the Grand Library, changed by what you witnessed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips from the room as quietly as a father leaving before dawn.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"6\">You step into the quiet bedroom and feel the weight of a life lived in service. The shoe polish on the dresser. The pressed suit in the closet. The bed where a man sleeps briefly before rising again in the cold.</ansi>");
    return true;
}
