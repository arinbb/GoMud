
// Most Likely You Go Your Way and I'll Go Mine - Track 9
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The judge records your departure in his ledger. Both roads dissolve and you are back in the Grand Library, having gone your way, which led here, which is fine.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " chooses a direction and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask") {
        if (rest.indexOf("judge") >= 0 || rest.indexOf("road") >= 0 || rest.indexOf("verdict") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The judge opens one eye fully. \"Most likely,\" he says, with the tone of a man who has said these words ten thousand times and found them true ten thousand times. He closes the eye. He is done. The gavel stays on his knee. The verdict was most likely. The verdict has been delivered. Court is more or less adjourned.</ansi>");
            return true;
        }
    }

    return false;
}
