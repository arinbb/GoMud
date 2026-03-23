
// Bourbon Street - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon signs dim, the jazz fades to silence, and Bourbon Street dissolves like bourbon in water -- slowly, then all at once. You are back in the Grand Library, the book closed and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the neon-lit haze of Bourbon Street and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
