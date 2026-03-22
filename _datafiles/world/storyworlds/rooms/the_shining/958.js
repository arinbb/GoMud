
// The Shining - Guest Corridor
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The corridor telescopes, doors rushing past you like frames of film on a reel spinning out of control. The hexagonal carpet dissolves beneath your feet, and you fall through static into the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pulled backward through the telescoping corridor and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
