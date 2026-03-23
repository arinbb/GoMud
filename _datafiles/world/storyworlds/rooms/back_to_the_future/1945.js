// Back to the Future -- The Gymnasium
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (step == "3") {
            user.SetMiscCharacterData("bttf_quest_step", "4");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Enchantment Under the Sea. This is where it has to happen. George has to ask Lorraine to dance. The mirror ball spins. The band needs a guitar player. Everything is converging.</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The mirror ball slows and the light it scatters contracts to a single bright point. The music fades -- the dancers freeze -- and the gymnasium dissolves in a shimmer of silver and blue. You are standing in the Grand Library, a single crepe-paper streamer curling slowly to the floor at your feet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves between one slow song and the next, gone before the mirror ball completes its turn.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step onto the dance floor. Couples swirl around you. The mirror ball scatters light across your hands, your face. For a moment you are completely inside 1955, and it is not bad at all.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " joins the dancers on the floor, swept up in the Enchantment Under the Sea.", user.UserId());
        return true;
    }

    return false;
}
