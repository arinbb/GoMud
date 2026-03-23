// Six Feet Under - Claires Bedroom
// Room 2227
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lava lamp fades. The photographs dissolve. Claires room recedes and the Grand Library returns, warm and full of other stories.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of Claires room and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drive" || cmd == "leave") {
        if (!user.GetMiscCharacterData("sfu_easter_drive")) {
            user.SetMiscCharacterData("sfu_easter_drive", "found");
            user.GrantXP(300, "Finding the open road");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You say the word or think it -- leave -- and something in Claires room responds. The window seems to widen. The photographs flutter. The lava lamp goes still. And then you are in the hallway, and then you are moving, and then the funeral home is behind you and the street is under your feet and it is leading somewhere. You follow it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+300 XP: the road opens)</ansi>");
        }
        room.AddTemporaryExit("road", "the open road", 2233, 120);
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">A path opens. The <ansi fg=\"exit\">road</ansi> is there now, leading out.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("photo") >= 0 || rest.indexOf("wall") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The photographs on the wall make a kind of map of what Claire sees and what she notices. The funeral home shot at an angle that makes it strange and familiar at once. A portrait of Ruth at the kitchen window that captures something Ruth does not know about herself. A self-portrait that is mostly shadow. The family in the backyard, unposed, caught in the act of being themselves. She sees them. They do not always know they are being seen.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("camera") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The camera is loaded with film -- maybe half a roll remaining. You pick it up, feel its weight, look through the viewfinder. The room looks different through the viewfinder. Everything does. Claire figured this out early. You put it back carefully, exactly as it was.</ansi>");
        return true;
    }

    return false;
}