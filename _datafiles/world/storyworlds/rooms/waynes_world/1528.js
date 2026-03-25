
// Wayne's World - Backstage at the Gasworks
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The backstage green room dissolves. The stage lights bleed through the walls one last time and then fade. Library warmth. Party on, Wayne.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from backstage like a roadie at wrap time.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "bow" || cmd == "kneel" || (cmd == "say" && rest.toLowerCase().indexOf("worthy") >= 0) || cmd == "worthy") {
        var key = "waynes_world_worthy_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You drop to your knees and bow. It feels correct. It feels like the only correct thing to do in the presence of this much rock history.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"WE'RE NOT WORTHY! WE'RE NOT WORTHY! WE'RE NOT WORTHY!\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " falls to their knees, bowing low. \"WE'RE NOT WORTHY! WE'RE NOT WORTHY!\"", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Alice Cooper looks down at you with practiced patience. \"Please,\" he says, with genuine warmth. \"Rise.\"</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "we're not worthy easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — We're not worthy!)</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 4: Meet Alice Cooper backstage
    if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step4")) {
        user.SetMiscCharacterData("ww_quest_step4", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Met Alice Cooper backstage.)</ansi>");
    }
    return true;
}
