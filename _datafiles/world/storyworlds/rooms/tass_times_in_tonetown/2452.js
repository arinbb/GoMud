// Tass Times in Tonetown -- Downtown Tonetown (2452)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon downtown fades to a single point of magenta light, then winks out. You are back in the Arcade, the console screen going dark, the hum of Tonetown still in your memory like a sustained chord.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers between neon signs and vanishes from downtown Tonetown.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pose" || cmd == "strut") {
        if (user.GetMiscCharacterData("easter_tass_pose") != "found") {
            user.SetMiscCharacterData("easter_tass_pose", "found");
            user.GrantXP(150, "struck a tass pose in downtown Tonetown");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You plant your feet at the correct angular distance apart, adopt an expression that communicates both availability and disdain, and hold the pose with total commitment. Three citizens slow down to observe. One nods. Another makes a small approving sound. A third photographs the moment with professional intention. For exactly five seconds, you are the most tass thing in downtown Tonetown.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- struck a tass pose in downtown Tonetown)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " strikes a pose in the middle of the downtown intersection and holds it with alarming confidence.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You strike your downtown pose. A passing citizen nods. You nod back. This is how Tonetown works.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " poses in the intersection with practiced confidence.", user.UserId());
        }
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("times") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Today's edition of the Tonetown Times leads with: UNTASS ZONE EXPANDS TO SWAMP ROAD. Below the fold: GRAMPS STILL MISSING. EDITOR DEMANDS ACTION. An opinion column asks: IF WE TOLERATE GREY ARCHITECTURE, WHAT ARE WE? The crossword has been replaced with a diagram of Snotty's untass ray, labeled KNOW YOUR ENEMY.</ansi>");
        return true;
    }

    return false;
}
