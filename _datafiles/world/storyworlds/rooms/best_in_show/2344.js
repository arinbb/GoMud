// Best in Show - Harlan's Room
// COMMANDS: name nuts, list nuts, nuts (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Harlan's room dissolves. Hubert, the dummy, the mixed nuts -- all of it folding back into the film. The Grand Library returns, and you could swear the air in it smells very faintly of pine nuts and Bloodhound.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says farewell to Hubert and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "nuts" || cmd == "name" && rest.indexOf("nuts") >= 0 || cmd == "list" && rest.indexOf("nuts") >= 0) {
        var key = "easter_best_in_show_nuts";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Harlan's nut knowledge");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Harlan looks up. A light comes on in his eyes.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Well,' he says, 'there's your peanut. Which is technically a legume, but most people count it. Your cashew, your pistachio, your hazelnut. Your Brazil nut, which comes from a tree in the Amazon basin, big tree, the nuts fall in pods. Macadamia. Pine nut, which technically is a seed, but you get the same kind of people buying them. Walnut, pecan -- those are both in the hickory family, which, Juglans cinerea, that's the butternut, which some people don't think of as a nut but it is. Almond, which is a drupe. Chestnut. Coconut, technically not a nut at all, it's a fruit, but I count it out of respect.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">He pauses.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Black walnut,' he says. 'Almost forgot the black walnut. That'd be a shame.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Nut Knowledge Acquired)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Harlan goes through the list again, adding a few he missed last time. He always adds a few he missed last time.</ansi>");
        }
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down to pat Hubert. Your hand disappears into his ears. He does not react, but somewhere deep within that enormous placid dog, something registers your goodwill. Harlan watches and nods: 'He likes people.' This is true of Hubert. He likes everyone. He has no enemies. He is better than most of us.</ansi>");
        return true;
    }

    if (cmd == "talk" && rest.indexOf("dummy") >= 0 || cmd == "look" && rest.indexOf("dummy") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The dummy regards you from the corner with its permanent mild surprise. Harlan glances over at it. 'That's just for shows,' he says, with the slight evasiveness of a man who is not entirely telling the truth about something small.</ansi>");
        return true;
    }

    return false;
}
