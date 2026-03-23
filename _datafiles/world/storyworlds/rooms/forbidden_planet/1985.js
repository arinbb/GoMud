
// Forbidden Planet - Morbius House Interior
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Krell artifacts on their pedestals flicker and go dark. The bookshelves dissolve into the shelves of the Grand Library. Shakespeare's painted eyes follow you as you go, out through the film grain, back to the amber warmth of home.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the alien book-light and returns to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
