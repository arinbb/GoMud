// The Bar Floor
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sticky floor releases your shoes. The dartboard spins once. The pool table sits in silent judgment. The televisions flicker to static and the bar dissolves around you, leaving only the smell of spilled beer and the distant sound of a jukebox dying mid-song. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs toward the exit as the bar floor dissolves into static and swallows them whole.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
