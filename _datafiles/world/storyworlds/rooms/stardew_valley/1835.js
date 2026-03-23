
// The Railroad and Spa - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The mountain air grows thin. The hot spring steam thins with it. The train tracks run into the distance and then run into the Library's shelved aisles. You are home among the books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks up the summit trail and does not return from it.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
