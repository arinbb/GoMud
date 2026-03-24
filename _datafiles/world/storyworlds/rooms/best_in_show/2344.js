// Best in Show -- Grooming Area (2344)
// COMMANDS: name nuts / nuts / list nuts (easter egg 200 XP)
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        var step = user.GetMiscCharacterData("bis_quest_step");
        if (step == "1") {
            user.SetMiscCharacterData("bis_quest_step", "2");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: Best in Show -- You have visited the grooming area. Head to the main show ring to watch the competition.)</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grooming area dissolves in a cloud of conditioning spray. The dogs, the blow-dryers, the mixed nuts -- all folding back into film. The Grand Library is around you again, its air mercifully free of professional grooming products.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sidesteps a grooming table and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "nuts" || (cmd == "name" && rest.indexOf("nut") >= 0) || (cmd == "list" && rest.indexOf("nut") >= 0)) {
        var key = "easter_bis_nuts";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Harlan's nut knowledge");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Harlan looks up. A light comes on in his eyes.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Well,' he says, 'there's your peanut. Which is technically a legume, but most people count it. Your cashew, your pistachio, your hazelnut. Your Brazil nut -- comes in pods, big Amazon tree. Macadamia. Pine nut, which technically is a seed, but you get the same kind of people buying them. Walnut, pecan -- both in the hickory family. Almond, which is a drupe. Chestnut. Coconut, technically a fruit, but I count it out of respect.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">He pauses.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Black walnut,' he says. 'Almost forgot the black walnut. That would have been a shame.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Nut Knowledge Acquired)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Harlan goes through the list again, adding a few he missed last time. He always adds a few he missed last time.</ansi>");
        }
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down to pat Hubert. Your hand disappears into his ears. He does not react dramatically, but somewhere deep in that enormous placid dog, something registers your goodwill. Harlan watches and nods: 'He likes people.' This is true. Hubert has no enemies. He is better than most of us.</ansi>");
        return true;
    }

    if (cmd == "talk" && rest.indexOf("dummy") >= 0 || cmd == "look" && rest.indexOf("dummy") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The dummy regards you from the chair with its permanent mild surprise. Harlan glances over at it. 'That's just for shows,' he says, with the slight evasiveness of a man who is not entirely telling the truth about something small.</ansi>");
        return true;
    }

    if (cmd == "groom" || cmd == "brush" || cmd == "spray") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Harlan glances over. He says nothing, but the glance communicates something about the difference between someone who knows what they are doing and someone who picked up a brush in a grooming area without qualifications. You set the brush down. This was the right call.</ansi>");
        return true;
    }

    return false;
}
