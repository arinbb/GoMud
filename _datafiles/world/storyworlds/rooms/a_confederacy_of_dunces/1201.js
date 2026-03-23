
// Canal Street - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The streetcar bells fade, the neon signs dim, and Canal Street dissolves into prose. The words rearrange themselves into pages, the pages fold into a book, and you find yourself back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wavers like a heat mirage on the pavement and vanishes into the pages of the story.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
