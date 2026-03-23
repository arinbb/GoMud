
// Matilda - Matilda's Bedroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up one of the books stacked on the floor and open it. The pages glow with warm light, and as you read the first line, the tiny bedroom dissolves around you. The stories carry you back to the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens a book and is gently absorbed into its pages, vanishing from the room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
