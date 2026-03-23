
// Billy Madison - The Cafeteria
// Easter egg: "lunch lady" or "sloppy joe" -- 150 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cafeteria dissolves in a final waft of sloppy joe. The lunch ladies watch you go with professional neutrality. The tray in your hand becomes nothing. The Grand Library assembles from paper and warmth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the cafeteria. The lunch line continues without missing a beat.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "lunch" && rest.toLowerCase().indexOf("lady") >= 0) {
        var key = "billy_madison_lunchlady_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You approach the lunch line. The lunch lady looks up. She has seen everything and is unmoved by it. She smacks a ladle of sloppy joe onto a tray and slides it toward you.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Sloppy joe, sloppy sloppy joe,\" Billy says from somewhere behind you, unprompted, with the enthusiasm of someone who is very into this song.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " approaches the lunch lady. Billy starts singing the sloppy joe song.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "lunch lady easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Sloppy sloppy joe.)</ansi>");
        }
        return true;
    }

    if (cmd == "sloppy" || (rest.toLowerCase().indexOf("sloppy") >= 0 && cmd == "eat") || (cmd == "say" && rest.toLowerCase().indexOf("sloppy") >= 0)) {
        var key2 = "billy_madison_lunchlady_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">SLOPPY JOE. SLOPPY SLOPPY JOE. Billy's voice rises from somewhere in the lunch line, and now everyone in the cafeteria has either heard this song before or is about to learn it. The lunch lady does not break stride. She has served through worse.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " triggers a rendition of the Sloppy Joe song. The cafeteria vibrates.", user.UserId());
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(150, "sloppy joe easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Sloppy sloppy joe.)</ansi>");
        }
        return true;
    }

    if (cmd == "eat" || cmd == "lunch") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You get a lunch tray. Sloppy joe, corn, chocolate milk. The sloppy joe tastes exactly like it smells: like a school lunch that has found its calling. The chocolate milk is cold. The corn is fine. You have eaten this lunch a hundred times and it is correct every time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats a school lunch with genuine appreciation.", user.UserId());
        return true;
    }

    return false;
}
