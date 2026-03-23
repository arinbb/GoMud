// Far Cry 5 - Falls End
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return false;
    }
    var data = user.GetMiscCharacterData("fc5_quest_falls_end");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_falls_end", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Falls End. Still standing. You feel something release in your chest at the sight of the neon sign, the people moving with purpose, the resistance alive and working. It took effort to get here. It was worth the effort.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon Spread Eagle sign blurs and dims. The sound of Falls End — voices, vehicles, the distant hammering at the church — fades behind a rising warmth. The Grand Library's shelves appear around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from Falls End like a rumor, leaving only the buzz of the neon sign.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
