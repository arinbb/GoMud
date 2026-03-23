// The Street - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The grey London street thins like fog burning off. The posters fade, the telescreen hum fades, the cold retreats. You are back in the Grand Library. You find your face still carefully blank. It takes a moment to remember you do not have to do that here.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs into the grey background and disappears, like a thought that was never thought.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
