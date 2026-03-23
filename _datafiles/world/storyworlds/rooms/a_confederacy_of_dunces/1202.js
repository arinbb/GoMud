
// The French Quarter - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The jazz fades to silence, the iron balconies dissolve into sentences, and the French Quarter folds itself back into the pages of the novel. You are returned to the Grand Library, the book warm in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like a jazz note into the humid air and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
