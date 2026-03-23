var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The containment grid interior dissolves in a burst of red-black energy. The ghosts reach for you as the frame goes to static. Then: the Screening Room. Clean, warm, and considerably less supernatural than where you just were.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from inside the containment grid. The ghosts are briefly disappointed.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
