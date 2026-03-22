
// The Secret Door - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The secret door closes silently. The mountain fades. The keyhole winks out like a dying star, and the narrow ledge dissolves beneath your feet into the solid floor of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " passes through the secret door and vanishes, the stone sealing shut behind them as they return to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
