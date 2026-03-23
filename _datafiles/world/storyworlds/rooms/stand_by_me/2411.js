// Stand By Me -- Back Harlow Road (2411)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The road dissolves. The old forest goes grey. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " turns at the road crossing and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
