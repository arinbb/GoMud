
// Prytania Theater - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The projector flickers and dies, the screen goes white, and the Prytania Theater fades to black like the end of a film. The credits roll in words that rearrange themselves into the pages of a novel, and you find yourself back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades to black like the end of a film and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
