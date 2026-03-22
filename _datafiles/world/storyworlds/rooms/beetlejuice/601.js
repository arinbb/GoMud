
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The quaint main street dissolves like an old film reel reaching its end. The frames flicker, the colors fade, and you find yourself back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a film projection and fades from view.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
