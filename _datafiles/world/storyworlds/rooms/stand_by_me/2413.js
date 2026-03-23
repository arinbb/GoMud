// Stand By Me -- Ace Merrill's Confrontation (2413)
// ZONE COMMANDS: stand / go (easter egg, 250 XP)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The confrontation dissolves. Ace Merrill's face goes flat and grey and the forest closes. You are back in the Grand Library. The knife is not real. You are safe. But you know what you would have done.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the confrontation like a thought you decide not to finish.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "stand" || cmd == "go") {
        handleStandUp(user, room);
        return true;
    }

    return false;
}

function handleStandUp(user, room) {
    var key = "easter_sbm_ace";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You stood. You stood then and you would stand again. This is not nothing.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(250, "standing up to Ace Merrill");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">Gordie steps forward. His voice is steady, which surprises him more than anyone. He tells Ace Merrill to go. He says it clearly. He does not look away from Ace's face while he says it.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">Ace Merrill looks at him for a long moment. He looks at the switchblade. He looks back at Gordie. He looks at Chris, who is right behind Gordie. He looks at all four of them standing together, which is different from any one of them standing alone, and something in his calculation shifts.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">'You'll regret this, Lachance,' Ace says. He says it like a promise. He is not wrong. But he also walks away. The older boys walk away. The four boys stand there and watch them go and do not say anything until they are out of sight. Then Vern sits down very suddenly in the ferns.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">That was the bravest thing Gordie Lachance ever did, up to that point. He will do braver things later. But this was the beginning of knowing he could.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP: You stood up to Ace Merrill.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps forward to face Ace Merrill. The four boys hold their ground. The older boys eventually look away.", user.UserId());
}
