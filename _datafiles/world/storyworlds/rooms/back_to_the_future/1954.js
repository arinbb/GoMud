// Back to the Future -- The Dance Floor (stage)
// Easter egg: "play guitar" triggers the Johnny B. Goode scene
var LIBRARY_ROOM = 1;
var EASTER_KEY = "bttf_egg_guitar";

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The last chord rings out and the gymnasium erupts. In the noise and the mirror-ball light, you step back from the microphone -- and the stage dissolves beneath your feet. You land, gently, in the Grand Library. Your ears are still ringing. In the best possible way.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a final bow and vanishes from the stage in a shower of mirror-ball light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("guitar") >= 0 || restLower.indexOf("strat") >= 0 || restLower.indexOf("music") >= 0 || restLower.length == 0) {
            triggerJohnnyBGoode(user, room);
            return true;
        }
    }

    if (cmd == "pick") {
        var restLower2 = rest.toLowerCase();
        if (restLower2.indexOf("guitar") >= 0 || restLower2.indexOf("up") >= 0) {
            triggerJohnnyBGoode(user, room);
            return true;
        }
    }

    if (cmd == "strum" || cmd == "shred" || cmd == "perform") {
        triggerJohnnyBGoode(user, room);
        return true;
    }

    return false;
}

function triggerJohnnyBGoode(user, room) {
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (step == "4" || step == "3") {
            user.SetMiscCharacterData("bttf_quest_step", "5");
        }
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the Stratocaster. The neck is warm. The strings bite your fingertips.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step to the microphone. The gymnasium goes quiet.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">You hit the opening riff of Johnny B. Goode.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The crowd hesitates for exactly one measure -- and then they explode. Every couple on the floor finds the beat simultaneously. The mirror ball spins faster. Marvin Berry holds the telephone receiver toward you and hollers into it: \"Chuck! Chuck, you gotta hear this! Listen to this kid!\"</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You play the solo. You play it harder. Your left hand goes somewhere it has never gone before. The notes come out of you like they were always in there, waiting for 1955.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"I guess you guys aren't ready for that yet.\"</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step back from the mic. The gymnasium stares at you.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"But your kids are gonna love it.\"</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tears into a guitar solo that the Enchantment Under the Sea crowd will remember for the rest of their lives.", user.UserId());

    if (user.GetMiscCharacterData(EASTER_KEY) != "found") {
        user.SetMiscCharacterData(EASTER_KEY, "found");
        user.GrantXP(300, "Johnny B. Goode performance");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+300 XP -- you invented rock and roll. Sort of.)</ansi>");
    }
}
