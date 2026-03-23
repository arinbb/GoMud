// The Wire - The Rooftop
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The rooftop dissolves into grey. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the rooftop.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
