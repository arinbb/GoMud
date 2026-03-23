
// Matilda - Playground
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The chain-link fence dissolves into threads of light that weave themselves into bookshelves. The cracked asphalt softens into library carpet. The Grand Library forms around you, warm and safe and far from the playground.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks through the chain-link fence as if it were made of mist, and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
