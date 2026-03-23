
// The Night of Joy - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sticky floor releases you with a reluctant sucking sound, the dim bar light fades, and the Night of Joy dissolves into paragraphs of prose. You are back in the Grand Library, your shoes slightly cleaner.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peels away from the sticky floor and dissolves into the story like a drink diluted past recognition.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
