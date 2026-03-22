
// The Shining - Torrance Apartment (REDRUM easter egg)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The television static swells, filling the room with white noise that becomes a roar. The screen grows, swallowing the apartment, and through the static you see the Grand Library taking shape, warm and quiet and safe.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the television static and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.indexOf("door") >= 0) {
        var easterKey = "shining_redrum";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "reading REDRUM");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You kneel before the bathroom door and trace the gouges with your finger. A child carved this — the letters are uneven, desperate, carved again and again until the wood splintered:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"1\">    R E D R U M</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stare at it. REDRUM. And then, in the reflection of the TV screen behind you, the letters reverse themselves:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"1\">    M U R D E R</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The television static screams. Then silence. The word on the door stares back at you.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — You read REDRUM.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">REDRUM. You already know what it means. The scratches in the door have not healed. They never will.</ansi>");
        }
        return true;
    }

    return false;
}
