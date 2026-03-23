
// Paris, Texas - A Motel Room
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The motel room dissolves the way motel rooms dissolve — imperceptibly at first, then all at once. The bedspread, the television, the highway headlights on the ceiling. Then library light, warm and specific, and the smell of old books replacing the smell of temporary.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies back on the bedspread and slowly becomes transparent, then gone, like light fading.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
