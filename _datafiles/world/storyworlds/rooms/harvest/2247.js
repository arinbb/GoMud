
// Theres a World - Track 7
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Gravity finds you and pulls you home, the Earth growing from a marble to a whole world as you descend back through the golden California afternoon to the ranch, the Grand Library waiting beyond it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends from the void, growing smaller as they return to scale, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("earth") >= 0 || target.indexOf("world") >= 0 || target.indexOf("planet") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">From here the earth is specific: the California coast is a brown-green line on the blue edge of the Pacific. You can see where the ranch is, or approximately where it is, a small warm region in the larger warm region of Northern California. The wheat fields are too small to see. The man on the ranch is too small to see. The old man next door is too small to see. All of it is the size it actually is, which is very small, which changes nothing about how much it matters.</ansi>");
            return true;
        }
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The orchestra fills the void with something that should be too large for a record but somehow fits -- strings spreading wide, brass ascending, the whole London Symphony in the space between stars. This is the most orchestral moment on the album. It is also, paradoxically, the most grounded. Looking at the earth from outside it makes it more precious, not less. The music understands this and goes big to say so.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track7") != "visited") {
        user.SetMiscCharacterData("harvest_track7", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return true;
}
