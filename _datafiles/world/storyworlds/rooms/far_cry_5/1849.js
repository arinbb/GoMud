// Far Cry 5 - The Bliss Fields
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return false;
    }
    var data = user.GetMiscCharacterData("fc5_quest_bliss");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_bliss", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">The Bliss fields. You are breathing it now. The edges of your vision are softer. The flowers are very beautiful. Faith is somewhere in them — or Faith's idea is somewhere in them — and the hymn she hums is in your chest before you realize you are hearing it.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Bliss fields dissolve petal by petal. Faith's humming fades last, carried off on a wind that has no direction. The Grand Library. Real. Still. Warm. You check your hands. They look normal. You are glad.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in a shimmer of purple pollen, drawn back through the Bliss toward somewhere more real.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "smell" || cmd == "sniff" || (cmd == "pick" && rest.indexOf("flower") >= 0) || (cmd == "smell" && rest.indexOf("flower") >= 0)) {
        var easterKey = "fc5_easter_bliss";
        var easterDone = user.GetMiscCharacterData(easterKey);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">You lean into a Bliss flower and breathe. The pollen hits immediately — warm, chemical-sweet, beautiful. The mountains above the fields are very clear. Everything else is softer. Faith's voice from everywhere: 'Beautiful, isn't it? This is what I wanted to give everyone. This peace. Is that such a sin?' You straighten up. The mountains are still there. You hold onto that.</ansi>");
        if (easterDone != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(250, "Breathed the Bliss");
            SendUserMessage(user.UserId(), "<ansi fg=\"purple\">(+250 XP — Faith's gift)</ansi>");
        }
        return true;
    }

    return false;
}
