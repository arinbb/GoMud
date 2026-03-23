// Back to the Future -- Lyon Estates (Under Construction)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The surveyor stakes blur into a grid of light, then the grid folds in on itself like a map being put away. The bare California earth fades. You are in the Grand Library, the smell of turned soil still faint on your boots.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the construction site as if they were never on the survey.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
