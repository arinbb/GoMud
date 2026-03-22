
// The Afterlife Hallway - green corridor, no way back to attic
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green fluorescent light intensifies until it whites out your vision. When it clears, the institutional corridor has been replaced by the warm wood and candlelight of the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is consumed by the green light and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Trying to go back through the chalk door
    if (cmd == "open" && rest.indexOf("door") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You press your hands against the wall where the chalk door was. The faint white lines smudge under your fingers. There's nothing here anymore -- just cold, smooth wall. The afterlife doesn't believe in return policies.</ansi>");
        return true;
    }

    // Reading the notices
    if (cmd == "read" && (rest.indexOf("notice") >= 0 || rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You read the notices on the wall:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"ATTENTION: All recently deceased must take a number.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Haunting permits require Form 27-B/6. No exceptions.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Do NOT open any doors marked SATURN.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Lost? You probably are. Take a number anyway.\"</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
