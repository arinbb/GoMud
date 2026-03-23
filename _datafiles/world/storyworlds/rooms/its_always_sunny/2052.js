// The Sewer - Frank territory, rum ham easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sewer dissolves around you. The rum ham retreats into the dark. The lawn chair, the radio, the slow sewer water — all of it fades. Frank's kingdom closes. You are back in the Grand Library, and you have a new appreciation for rooms that are not sewers.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the sewer behind as the scene closes, the rum ham watching impassively from its ledge.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("ham") >= 0) {
        var key = "easter_sunny_rumham";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You examine the rum ham at length. It has been here for a while. The rum has penetrated deep into the meat. The label says FRANK. You are in a sewer looking at Frank Reynolds's personal rum ham on a ledge above the sewer water and this is, without question, the most Frank Reynolds thing you have ever encountered. The ham is perfect. The ham is exactly where it should be. Everything about this situation makes complete sense if you think about it the right way, which is Frank's way.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "Contemplated the rum ham");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+150 XP: Rum Ham Appreciation</ansi>");
        }
        return true;
    }

    if (cmd == "eat" && rest.toLowerCase().indexOf("ham") >= 0) {
        var key2 = "easter_sunny_rumham";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You eat the rum ham. Or part of it. It tastes of rum and pork and the particular satisfaction of a man who makes his own rules and also his own cured meats. It is extremely good. You feel guilty about eating Frank's ham but not that guilty. The ham tastes like freedom. The ham tastes like a lawn chair in a sewer. The ham tastes like choosing this on purpose.</ansi>");
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(150, "Ate the rum ham");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+150 XP: You Ate Frank's Rum Ham</ansi>");
        }
        return true;
    }

    return false;
}
