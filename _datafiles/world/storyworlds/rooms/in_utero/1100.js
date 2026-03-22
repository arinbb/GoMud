
// Pachyderm Studios - Entry room for In Utero zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tape slows, the reels grind to a halt, and the red recording light finally goes dark. The studio dissolves into static -- white noise that thins and fades until you are standing in silence, back in the Grand Library, your ears still ringing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and white noise, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">...static...</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">A single chord -- massive, distorted, and beautiful -- tears through the air like a wound opening. The needle drops. The tape rolls. You are inside the album now.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}
