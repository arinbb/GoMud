// Stand By Me -- The Junkyard (2402)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The junkyard shimmers. The towers of crushed cars go grey and flat. You are back in the Grand Library with the smell of hot metal still faintly in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the junkyard like a ghost, there and then not.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
