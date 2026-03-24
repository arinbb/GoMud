// Tass Times in Tonetown -- The Tass Market (2456)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The racks of jumpsuits fade. The boot wall goes dark. You are back in the Arcade, but you feel different -- like someone who has been near a place that knew exactly what it was for.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the Tass Market between one rotation of the sunglass display and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "buy" || cmd == "dress" || (cmd == "wear" && rest.toLowerCase().indexOf("outfit") >= 0) || (cmd == "try" && rest.toLowerCase().indexOf("on") >= 0)) {
        if (user.GetMiscCharacterData("easter_tass_outfit") != "found") {
            user.SetMiscCharacterData("easter_tass_outfit", "found");
            user.GrantXP(200, "became tass at the Tass Market");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You select a geometric magenta jumpsuit, a pair of boots with angular stitching that adds exactly two inches of authority, and the sunglasses from the display with the lightning bolt frames. You take them to the fitting room. The curtain closes. The mirror shows you as a slightly more angular, significantly more deliberate version of yourself. When you pull back the curtain, the proprietor surveys you for exactly one second and nods once. You are tass. Not merely tass -- Committed. The citizens of Tonetown will see you differently now.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- became tass at the Tass Market)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " enters the fitting room and emerges in an outfit that the Tass Market proprietor assesses and immediately approves.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You are already tass. The proprietor nods at you as you browse. You are allowed to be here.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("fitting") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The fitting room curtain is printed with a geometric pattern that creates the visual impression of the curtain being further away than it is. From inside, the mirror shows you from a slightly different angle than normal -- the angle that the market wants you to consider. It is a flattering angle. It is a tass angle. The market is not lying to you. It is showing you what you could be.</ansi>");
        return true;
    }

    return false;
}
