
// Wayne's World - Stan Mikita's Back Booth
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The back booth dissolves. The vinyl creak fades. The library comes back together from warm light and the smell of old paper. Excellent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the back booth like a tape left in a hot car.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You slide into the booth. The vinyl creaks in exactly the right way. This is the greatest seat in Aurora. You feel this immediately.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slides into the famous back booth with the ease of someone who has found their place.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("table") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Coffee rings on coffee rings. A faint phone number in blue ballpoint — illegible. Near the napkin dispenser, scratched in careful letters: \"G.A.\" Garth was here.</ansi>");
        return true;
    }

    return false;
}
