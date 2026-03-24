
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wheat rises around you, golden stalks closing in until all you see is gold and blue. Then the colors thin, the canvas dissolves, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades into the wheat and vanishes among the golden stalks.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "lie" || cmd == "lay" || cmd == "rest") {
        var easterKey = "starry_wheat";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "lying in the wheat field");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lie down among the wheat. The stalks close above you like a golden cathedral. The sky overhead is pure cobalt blue swirled with impossible stars. The wind moves through the field in long, breathing waves. For a moment you understand why he painted this.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — The wheat field breathes.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lie down again. The wheat whispers the same things. It never gets old.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down in the golden wheat and disappears among the stalks.", user.UserId());
        return true;
    }
    return false;
}
