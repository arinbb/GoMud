
// Out on the Weekend - Track 1
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The highway stretches out ahead one more time, the headlights coming on as dusk falls, and then the whole road dissolves into warm static. You are back in the Grand Library. The sense of going nowhere in particular lingers pleasantly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the evening highway light and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drive" || cmd == "go" || cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in the driver seat of the idling pickup. The road atlas is open to California. The cassette tape has no label. The radio plays something warm and unhurried. You could go north. You could turn around. You could sit here until the light is gone completely. None of these is the wrong choice.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        var target = rest.toLowerCase();
        if (target.indexOf("radio") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The radio plays a song you almost know. It ends. There is static. Then another song, closer, warmer. The signal comes and goes. This is the best way to hear music -- through distance, through interference, imperfect and alive.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track1") != "visited") {
        user.SetMiscCharacterData("harvest_track1", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return true;
}
