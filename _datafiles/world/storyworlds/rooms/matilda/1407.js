
// Matilda - School Corridor
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent lights flicker and die. In the darkness, the corridor stretches and warps, and the institutional green walls soften into mahogany bookshelves. The buzzing stops. You are in the Grand Library, surrounded by silence and warmth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the flickering darkness between the fluorescent lights and does not reappear.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
