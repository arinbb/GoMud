
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The front hallway stretches and warps like a funhouse mirror. The staircase spirals into text, the walls fold into pages, and you tumble back to the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the spiraling staircase and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onIdle(room) {
    if (!UtilIsDay()) {
        var messages = [
            "The staircase creaks with heavy, deliberate footsteps. No one is on it.",
            "A cold draft blows through the hallway, carrying the scent of earth and old flowers.",
            "The coat rack shadows stretch across the wall like reaching fingers."
        ];
        var pick = Math.floor(Math.random() * messages.length);
        // 40% chance to show a night message vs normal idle
        if (Math.random() < 0.4) {
            room.SendText(messages[pick]);
            return true;
        }
    }
    return false;
}
