
// The Shining - Elevator Hall (blood elevator easter egg)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The elevator doors groan and the corridor tilts. The hexagonal carpet dissolves into film grain, each hexagon becoming a frame of celluloid, flickering past until the Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the hexagonal carpet pattern and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "open" && rest.indexOf("elevator") >= 0) || (cmd == "push" && rest.indexOf("button") >= 0) || (cmd == "press" && rest.indexOf("button") >= 0)) {
        var easterKey = "shining_elevator";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "opening the elevator");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You press the call button. A ding echoes down the corridor.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The brass doors shudder. They groan. They part.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"1\">A WALL OF BLOOD erupts from the elevator shaft — a tidal wave of dark crimson that crashes against the far wall, floods across the ceiling, swallows the carpet. It surges toward you in slow motion, impossibly thick, impossibly red, filling the corridor like water filling a sealed room. Furniture lifts and tumbles in the torrent. The blood reaches your ankles, your knees, and then —</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">It stops. The corridor is dry. The elevator doors are closed. The thin dark seepage continues as before, as if nothing happened.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — You opened the elevator.)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " presses the elevator button. The doors open, and for a terrible moment, the corridor fills with something dark and crimson. Then it is gone.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You press the button. The elevator dings. The doors do not open. But the dark liquid seeping from beneath them seems to flow a little faster for a moment.</ansi>");
        }
        return true;
    }

    return false;
}
