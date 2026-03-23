// Stand By Me -- The Railroad Tracks Start (2403)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The tracks shimmer in the heat. The projected light holds for a moment -- the two rails converging south -- then the image collapses. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands at the trailhead a moment, then is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
