
// Jurassic Park - The Gallimimus Flats
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Gallimimus stampede past and you're caught in the flowing edge of the herd, the drumbeat of their feet dissolving into soundtrack percussion that trails off into the quiet of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up in the Gallimimus herd and vanishes in the thundering mass.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "run" || cmd == "chase" || (cmd == "follow" && (rest.indexOf("gallimimus") >= 0 || rest.indexOf("herd") >= 0 || rest.indexOf("dinosaur") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You run with the Gallimimus. For about four seconds this is exhilarating — you're in the herd, surrounded on all sides by amber-feathered flanks and churning legs, and they're fast, much faster than you, and you can feel their passage as a physical force. Then one of them pulls ahead and the ones behind you catch up and you're briefly inside the herd's momentum, unable to stop. Then they veer and you fall behind. You stand in the grass, breathing hard, watching them run. They do not look back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " runs with the Gallimimus herd, briefly, before falling behind.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("gallimimus") >= 0 || rest.indexOf("herd") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">They are extraordinary. Eight feet at the hip, built for pure speed, their amber-feathered forelimbs tucked close as they run. The flock-brain that drives them is ancient and absolute — a stimulus hits one and the information propagates through the group in a wave before any individual has consciously responded. You are watching something that existed before thought. It is the most beautiful thing on this island that is not actively trying to kill you.</ansi>");
        return true;
    }

    return false;
}
