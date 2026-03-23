
// Sonyas Room - Quest step 6 + Easter egg: read bible / read lazarus
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candlelight in Sonya's room dims and goes out. The bare boards dissolve into text. The smell of tallow gives way to old paper. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from Sonya's candlelit room, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest == "bible" || rest == "lazarus" || rest == "testament" || rest == "book")) {
        var xpKey = "cnp_sonya_bible";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(250, "the Lazarus passage");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">Sonya opens the New Testament to the passage she knows by heart. Her voice is low and direct, not theatrical, not performing piety — she reads the way you breathe, because it is necessary.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.'</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">She reads the whole chapter. Lazarus in the tomb four days. The stone rolled away. Come forth. He that was dead came forth, bound hand and foot with graveclothes. And Jesus said unto them, Loose him, and let him go.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">Raskolnikov listens with his eyes shut. He knows what she is saying to him. He knows she knows what she is saying to him. This is the whole argument, laid out without argument, in someone else's words.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP: the resurrection of Lazarus)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">Sonya's voice, reading. The same passage she always reads. Come forth. Loose him, and let him go. You know it now. You will always know it.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_sonya")) {
        user.SetMiscCharacterData("cnp_q_sonya", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: You have found Sonya Marmeladova.)</ansi>");
    }
    return false;
}
