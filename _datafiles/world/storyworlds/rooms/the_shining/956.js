
// The Shining - Staff Wing
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The flickering fluorescent light accelerates, strobing faster and faster until the corridor dissolves into rapid-fire film frames. The institutional green fades to the warm amber of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is caught in the strobing light and flickers out of existence.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
