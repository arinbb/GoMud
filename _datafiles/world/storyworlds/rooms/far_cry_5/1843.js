// Far Cry 5 - The Spread Eagle Bar
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return true;
    }
    var data = user.GetMiscCharacterData("fc5_quest_spread_eagle");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_spread_eagle", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Spread Eagle Bar. Resistance headquarters, last bar standing, the heart of what Hope County is fighting to remain. The country music hits you in the chest. Mary May looks up. You are here. That means something.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Spread Eagle's neon blurs into the warm amber light of the Grand Library. The country music fades. Mary May's voice, last heard, carries for a moment: 'Don't forget what you saw here.' Then the shelves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is carried out on a last note of country music, vanishing from the Spread Eagle.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || cmd == "order") {
        var easterKey = "fc5_easter_drink";
        var easterDone = user.GetMiscCharacterData(easterKey);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Mary May sets a glass in front of you without asking. Good whiskey, Montana pour — generous. She raises her own glass. 'To Hope County,' she says. 'To everybody still here. To everybody we're getting back.' She drinks. You drink. The whiskey is real and warm and exactly what was needed.</ansi>");
        if (easterDone != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "Spread Eagle toast with Mary May");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP — 'To Hope County')</ansi>");
        }
        return true;
    }

    if (cmd == "listen" || (cmd == "look" && rest.indexOf("jukebox") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The jukebox changes tracks. Waylon Jennings: 'Are You Ready for the Country.' Somebody in the back of the bar exhales with feeling. Mary May keeps moving. The song says everything she doesn't have time to say right now.</ansi>");
        return true;
    }

    return false;
}
