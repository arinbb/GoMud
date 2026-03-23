// The Wire - The Baltimore Sun Newsroom
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The newsroom dissolves into static. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the Sun newsroom.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
