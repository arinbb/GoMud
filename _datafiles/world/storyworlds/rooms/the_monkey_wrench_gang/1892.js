
// The Power Line - cut wire easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "cut") {
        var target = rest.toLowerCase();
        if (target.indexOf("wire") >= 0 || target.indexOf("line") >= 0 || target.indexOf("cable") >= 0 || target == "") {
            var key = "mwg_powerline_cut";
            if (user.GetMiscCharacterData(key) != "done") {
                user.SetMiscCharacterData(key, "done");
                user.GrantXP(200, "lights out");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The bolt cutters are cold in your hands. The cable is thicker than you expected -- an inch of steel-cored aluminum -- but the cutters are rated for it. You position them, breathe, and apply pressure. The cable parts with a sound like a gunshot, the cut ends springing back and the whole line going slack, the catenary collapsing between towers. Somewhere to the south, circuits are tripping and backup systems are engaging and someone in a control room is watching indicators go red. The desert is quiet. The hum is gone. You can hear, for the first time, the wind in the sage -- just the wind, just the sage, just the desert the way it was before any of this. You walk back to the jeep and drive into the dark.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP -- a small interruption)</ansi>");
                SendRoomMessage(room.RoomId(), "<ansi fg=\"8\">" + user.GetCharacterName(true) + " cuts the power line. The hum stops. The desert is quiet.</ansi>", user.UserId());
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The cable is already cut. The line hangs slack between the towers. Phoenix is running on backup power and bafflement.</ansi>");
            }
            return true;
        }
    }

    return false;
}
