// Back to the Future -- Biffs Garage
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Biff takes a step toward you. The garage lights flicker. In the strobing dark, you find the exit -- the only one that matters -- and you take it, and the garage folds away like a bad dream. You are in the Grand Library, catching your breath.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from Biffs garage, right before things got worse.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
