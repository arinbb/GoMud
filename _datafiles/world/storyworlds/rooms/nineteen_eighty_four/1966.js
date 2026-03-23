// Syme's Table - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Syme's voice cuts off mid-sentence about the beauty of lexical reduction. The canteen dissolves. The Grand Library solidifies around you. The shelves full of books you can actually read are here. Orwell's words about destroying words are, with some irony, still intact.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades while Syme is still talking. He does not notice.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
