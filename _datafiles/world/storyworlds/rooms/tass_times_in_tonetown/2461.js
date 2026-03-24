// Tass Times in Tonetown -- Snottys Laboratory (2461)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The laboratory's grey instruments fade to a grey that becomes the Arcade's warm dark. You are back. The untass ray's hum takes a moment to leave your bones.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the laboratory leaving no mark, which is more tass than anything Snotty has ever done.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "destroy" || (cmd == "break" && (rest.toLowerCase().indexOf("ray") >= 0 || rest.toLowerCase().indexOf("device") >= 0 || rest.toLowerCase().indexOf("machine") >= 0)) || cmd == "smash" || cmd == "sabotage") {
        if (user.GetMiscCharacterData("easter_tass_ray") != "found") {
            user.SetMiscCharacterData("easter_tass_ray", "found");
            user.GrantXP(300, "destroyed the untass ray");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You cross the laboratory floor in three steps, take the untass ray off its tripod with both hands, and bring it down on the instrument bank with the full force of someone who has been in the swamp and knows what this machine has been doing. The device makes a sound like a grey idea failing. Beakers rattle. Instruments flatline. The monotonous hum stops, and in the sudden quiet, the laboratory seems slightly larger. Slightly warmer. The grey on the walls is still grey, but it is now just paint and not an argument. Through the north door, a voice says: 'I heard that. Good.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP -- destroyed the untass ray)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lifts the untass ray off its tripod and destroys it against the instrument bank with total commitment.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The untass ray is already destroyed. Its components are scattered across the floor. The hum is gone. The work is done.</ansi>");
        }
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("chart") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Snotty's chart maps the tass index of Tonetown over six months. The line starts high -- the city at full chromatic capacity, an 87 on whatever scale Snotty uses. Each data point after that is lower. Month by month, the untass ray extending its range, the index declining. The most recent data point: 34. The chart has a projected line continuing downward to zero, dated six months from now. Zero on this chart is labeled, in Snotty's handwriting, COMPLETION.</ansi>");
        return true;
    }

    return false;
}
