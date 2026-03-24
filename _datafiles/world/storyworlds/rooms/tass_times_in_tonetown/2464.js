// Tass Times in Tonetown -- The Rooftops (2464)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rooftop view fades -- neon downtown going dark from north to south, swamp going lighter as the grey bleaches out, and then all of it is gone and you are back in the Arcade with the full scope of Tonetown still in your mind like a map you drew yourself.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the rooftops, carrying the view.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" && rest.toLowerCase().indexOf("town") >= 0) || (cmd == "look" && rest.toLowerCase().indexOf("down") >= 0) || cmd == "survey") {
        if (user.GetMiscCharacterData("easter_tass_rooftop") != "found") {
            user.SetMiscCharacterData("easter_tass_rooftop", "found");
            user.GrantXP(200, "surveyed all of Tonetown from the rooftops");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You look out over all of Tonetown from the highest point on Tass Avenue. The north is a grid of neon and deliberate architecture -- every building an argument, every sign a declaration, every citizen a moving point of chromatic intensity. The center is the avenue at full operational tassness, exactly as it should be. To the south, the gradient fails: color fading to grey, building confidence fading to flat compliance, the toxic swamp, and at the very edge, Snotty's beige mansion sitting in its self-imposed dullness like a full stop on a paragraph the city was still writing. From up here, the story is completely readable: what Tonetown was, what it is fighting to remain, and what you are doing in it. You see it all at once. You understand it completely. It is, despite everything, extremely tass from up here.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- surveyed all of Tonetown from the rooftops)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " surveys all of Tonetown from the rooftops with the expression of someone who now understands the full picture.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You look out over Tonetown again. The gradient is still there -- neon in the north, grey in the south. But now you know what it means and what needs to happen. The view is exactly as comprehensive as before.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("escape") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The fire escape zigzag pattern, seen from above, clearly spells TASS in the Tonetown building alphabet. You have to step back to see it -- you have to be at exactly this height. The architect who designed it put it here for the people who would climb up and look down. For the people paying attention. You are paying attention. This is your reward: knowing the building is always saying something, even when nobody looks up.</ansi>");
        return true;
    }

    return false;
}
