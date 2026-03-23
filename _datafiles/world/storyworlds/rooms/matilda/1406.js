
// Matilda - Crunchem Hall Gates
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The iron gates swing shut behind you with a clang that echoes into silence. The school dissolves like a bad dream, and you find yourself standing in the warm light of the Grand Library. The relief is physical.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " passes through the gates and vanishes as they clang shut, leaving only an echo.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
