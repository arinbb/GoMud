var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The gentle room lets you go quietly, the acoustic warmth following you back to the Grand Library like the smell of a house you love.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the gentle room quietly, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest.indexOf("window") >= 0 || rest.indexOf("sky") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You look up through the window at the Chicago sky. Most of the stars are washed out by the city's light, but some remain -- the dependable ones, the ones that have been there every night of a childhood. You have been looking at these exact stars from this exact angle for years. They look back without comment.</ansi>");
        return true;
    }

    return false;
}
