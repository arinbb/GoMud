
// Jurassic Park - The T. Rex Paddock
// Easter egg: "stand still" triggers encounter, first time = 300 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_trex")) {
        user.SetMiscCharacterData("jp_quest_trex", "true");
        // Quest step 4: Experience the T. Rex paddock
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: You have experienced the T. Rex paddock.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rain intensifies to a white curtain, and within the white, film grain. The impact tremors fade. The paddock dissolves. The Screening Room reassembles itself around you, still and warm and small and safe.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the rain and is gone from the paddock.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "stand" && rest.indexOf("still") >= 0) {
        var easterKey = "jp_trex_encounter";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(300, "standing still in the T. Rex paddock");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You go still. Completely still. Malcolm said don't move — its vision is based on movement. You hold your breath.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The cup of water on the dashboard ripples. One ring. Two. The interval is gone — they're coming one after another now, a drumbeat.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The fence shudders. The whole nine-foot grid of chain-link, shuddering, as something on the other side tests it.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The darkness beyond the fence resolves — slowly, in pieces — into a shape. A head. A head the size of a car, emerging from the rain and the dark into the headlight beam. One eye, amber and vertical-pupiled, catches the light and holds it. The eye is the size of a hubcap. It is looking directly at you. Its breath fogs in the rain.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You do not move. You barely exist. The T. Rex's attention rests on you like physical weight for five seconds, ten, an eternity. Then its head swings away. It moves on. The darkness closes. The water in the cup settles.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP — You stood still.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You go still. The water ripples. The fence shudders. The darkness stirs. You have been here before, and you know what to do. You do it. The amber eye finds you and moves on. Every time, the same six seconds of geological time.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes completely still, staring into the dark paddock.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("water") >= 0 || rest.indexOf("cup") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">A plastic cup on the Explorer dashboard, half full of water. The surface is vibrating. Concentric rings, moving outward from the center. One per second. Then the interval between rings contracts. The rings are coming faster. The source of the vibration is getting closer.</ansi>");
        return true;
    }

    if (cmd == "touch" && (rest.indexOf("fence") >= 0 || rest.indexOf("wire") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the fence. It's dead — the indicator lights confirm it. Cold wire. No shock. This should be a relief. The fence being dead means the T. Rex is behind an unelectrified nine-foot chain-link barrier in the dark and the rain. The fence being dead is the opposite of a relief.</ansi>");
        return true;
    }

    return false;
}
