
// Matilda - Front Walk
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The garden gnome winks at you — or perhaps it is just the light. The concrete path beneath your feet softens into carpet, the dead grass becomes bookshelves, and the Grand Library forms around you like a story remembering itself.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks down the path and fades like a mirage, leaving the garden gnome staring at empty air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
