var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("quest_240_step");
    if (step == "3") {
        user.SetMiscCharacterData("quest_240_step", "4");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The story recognizes you. The ballroom is exactly as it should be: chaotic, green, and delicious to at least one entity present.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ballroom fades in a spray of green ectoplasm. Slimer waves goodbye with a small green hand. Film grain. The Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the ballroom. Slimer is briefly sad, then finds more shrimp.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fire" || cmd == "shoot") {
        if (user.GetMiscCharacterData("easter_ghostbusters_ballroom") != "found") {
            user.SetMiscCharacterData("easter_ghostbusters_ballroom", "found");
            user.GrantXP(200, "proton stream easter egg");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You raise your proton pack and fire a stream across the ballroom. The stream catches a chandelier, then a wall sconce, then wraps around a table. Ray shouts \"DON'T CROSS THE STREAMS!\" Peter shouts \"I'M NOT CROSSING THE STREAMS!\" The streams cross. The resulting explosion coats the entire ballroom in a thick layer of marshmallow topping.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- Proton Stream Chaos achieved.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You fire again. The streams cross. Marshmallow everywhere. Some things don't get old.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fires a proton stream. The streams cross. The ballroom becomes a marshmallow disaster.", user.UserId());
        return true;
    }

    return false;
}
