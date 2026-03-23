// MTVs The State - The Ball Pit (2390)
// Easter egg: 'jump' or 'swim' => 150 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You surface from the ball pit. The Grand Library. You are carrying two balls you did not mean to take. They are here now. You set them on a shelf.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs out of the ball pit and exits. Balls cascade to fill the space they left.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "jump") {
        var key = "the_state_ballpit_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You run at the ball pit and throw yourself into it. The balls part and swallow you and close over your head. You sink into primary colors. You are completely submerged in childhood. It is the best decision you have made in a while.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " runs and leaps into the ball pit with total commitment. The balls close over them.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You surface, laughing. The balls are everywhere. This is correct.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "ball pit easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">(+150 XP — Fully committed.)</ansi>");
        }
        return true;
    }

    if (cmd == "swim") {
        var key2 = "the_state_ballpit_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You wade into the ball pit and attempt a swimming motion. You do not go anywhere. You are not swimming. You are thrashing gently in a sea of plastic spheres and it is extremely satisfying.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " swims through the ball pit. Technique: questionable. Commitment: absolute.", user.UserId());
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(150, "ball pit easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">(+150 XP — The stroke needs work. The enthusiasm does not.)</ansi>");
        }
        return true;
    }

    if (cmd == "enter" || cmd == "get" || cmd == "go") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("pit") >= 0 || restLower.indexOf("ball") >= 0 || restLower.indexOf("in") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You step off the edge and into the ball pit. The balls rise to your waist and then your chest. You are in it. You are in the ball pit. This is real.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " enters the ball pit with the calm of someone who has been waiting for this.", user.UserId());
            return true;
        }
    }

    return false;
}
