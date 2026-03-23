
// Wayne's World - Suburban Aurora Street
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Aurora street shimmers and the split-level houses flatten into film frames. The sound of the neighborhood fades as the library reassembles around you. Party on, Aurora.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like a heat mirage and vanishes from the Aurora street.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("excellent") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say \"EXCELLENT!\" to the Aurora sky. A neighbor across the street gives you a thumbs up. This is Aurora. This is fine.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shouts \"EXCELLENT!\" at the Aurora sky. A neighbor gives a thumbs up.", user.UserId());
        return true;
    }

    if (cmd == "excellent") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">EXCELLENT! You hold the note. The Aurora street seems to vibrate with approval.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says \"Excellent!\" with genuine feeling.", user.UserId());
        return true;
    }

    return false;
}
