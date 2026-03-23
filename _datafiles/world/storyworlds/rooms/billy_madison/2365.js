
// Billy Madison - The Playground
// Easter egg: "dodgeball" -- 200 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The playground dissolves -- the swing set, the blacktop, the red rubber balls retreating back into film grain. The sound of recess fades into the paper-and-leather smell of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves off the playground in a shimmer of celluloid light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dodgeball" || (cmd == "play" && rest.toLowerCase().indexOf("dodgeball") >= 0) || (cmd == "throw" && rest.toLowerCase().indexOf("ball") >= 0)) {
        var key = "billy_madison_dodgeball_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a red dodgeball. It is warm from sitting in the afternoon sun. It fits your hand perfectly. You wind up.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">What follows is seventeen minutes of pure athletic domination. You don't know where it comes from. You've never thought of yourself as a dodgeball person. But today, on this blacktop, you are the best dodgeball player in the state of New Jersey.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The third-graders stop what they're doing to watch. Then they cheer. One of them says 'He's like a dodgeball Einstein.' You are absolutely a dodgeball Einstein.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up a dodgeball and dominates the entire playground. The children are in awe.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "dodgeball easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- Dodgeball Einstein.)</ansi>");
        }
        return true;
    }

    if (cmd == "swing" || (cmd == "sit" && rest.toLowerCase().indexOf("swing") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in one of the good swings -- not the twisted one, the good one -- and pump your legs until you're going high enough that the chain goes slack at the top. For a moment, at the peak of each arc, you can see over the fence. The whole town spreads out below you. It looks different from up here. It looks manageable.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " swings on the playground swing, going higher than is probably advisable.", user.UserId());
        return true;
    }

    return false;
}
