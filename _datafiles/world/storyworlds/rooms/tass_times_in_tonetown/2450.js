// ZONE COMMANDS: search (2450 reveals workshop), pose/strut (2452), buy outfit/dress (2456), dance/headbang (2457), destroy/break ray (2461), free gramps/rescue (2462), look town/look down (2464)
// Tass Times in Tonetown -- Gramps Cabin (entry room, 2450)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The game disc slides into the console. The screen erupts with angular neon shapes -- magenta, electric blue, a green that has strong opinions. A hoop of light assembles itself from the center of the screen outward, buzzing with dimensional energy. The room smells of electricity and something sweet. Then the hoop fills the whole screen and you are not watching anymore. You are on the other side of it, standing in a small cabin that smells of wood smoke and invention, a glowing iron hoop on the wall ahead, a dog looking at you with expectant certainty.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

    if (user.HasQuest(450) == false) {
        user.GiveQuest(450);
    }

    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hoop on the wall pulses once, magenta-bright. The cabin air thickens and goes sweet-electric. You step back through the shimmer and land in the Arcade, the console's screen fading from neon to black, the smell of Tonetown still faintly in your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps toward the glowing hoop, shimmers at its edges, and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "search" || (cmd == "look" && rest.toLowerCase().indexOf("workshop") >= 0)) {
        if (user.GetMiscCharacterData("easter_tass_workshop") != "found") {
            user.SetMiscCharacterData("easter_tass_workshop", "found");
            user.GrantXP(200, "discovered Gramps' hidden workshop");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You push on the bookcase by the far wall experimentally. It moves. Behind it is a panel, and behind the panel is a room that smells of solder and blueprint paper and the specific excitement of someone who was inventing something important. A hidden workshop. Gramps' real workshop. The one where it all started.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- discovered Gramps' hidden workshop)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds a hidden panel in the bookcase and pushes it open.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The hidden workshop door is behind the bookcase -- you remember now.</ansi>");
        }
        return true;
    }

    return false;
}
