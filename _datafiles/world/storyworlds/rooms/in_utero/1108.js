
// Milk It - Track 8
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The room stops pretending. Walls, floor, furniture -- everything freezes mid-transformation, caught between states, then collapses into a single point of silence. The contradictions cancel each other out. Zero. Nothing. Then the Grand Library, solid and stable, and you do not entirely trust it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " melts into the shifting floor and resolidifies somewhere else entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
