// Idiocracy -- St Gods Memorial Hospital (2474)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The antiseptic smell fades and the waiting room chairs dissolve and you are back in the Screening Room. You check yourself over out of instinct. No diagnosis ticket. No label. You are not sick, fine, or a tard, or anyway you have not been officially evaluated. That might be for the best.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the hospital without a diagnosis, which may be the best outcome available.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "diagnose" || cmd == "check" || (cmd == "use" && rest.toLowerCase().indexOf("machine") >= 0) || (cmd == "enter" && rest.toLowerCase().indexOf("machine") >= 0)) {
        handleDiagnoseEasterEgg(user, room);
        return true;
    }

    return false;
}

function handleDiagnoseEasterEgg(user, room) {
    var key = "easter_idiocracy_diagnose";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The machine whirs. A ticket prints. It says TARD. You did not need a second opinion but you have one now.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "the diagnosis machine");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the diagnosis machine. It is the size of a photo booth. The door closes. Something hums. Something blinks. A reading is taken of your general status as a person. The machine considers the data. The machine has been processing data since 2298. The machine has never been wrong, in the sense that the machine's outputs have never been questioned. After three seconds, a ticket prints from the bottom slot. You pull it out. It reads: SICK. You are informed by Dr. Lexus, who has been standing nearby waiting, that the treatment is Brawndo. You ask if you could have water instead. Dr. Lexus looks at you for a long time. 'Water?' he says. 'Like from a toilet?'</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: The machine has diagnosed you.)</ansi>");

    var step = user.GetMiscCharacterData("idiocracy_quest_step");
    if (step == "2" || step == "1") {
        user.SetMiscCharacterData("idiocracy_quest_step", "3");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You have been officially diagnosed.)</ansi>");
    }

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the diagnosis machine. A ticket prints. Their face suggests it is not a good ticket.", user.UserId());
}
