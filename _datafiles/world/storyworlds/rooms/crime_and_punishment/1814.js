
// The Vacant Lot
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The vacant lot, the stone, the crooked tree — all dissolve into prose. The heat fades. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the vacant lot, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest == "stone") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The large flat stone. Grey, unremarkable, lying against the base of the wall where it has always lain. Nothing marks it. Nothing about it suggests that anything was ever placed beneath it. It is a stone. You find yourself looking at it for a long time.</ansi>");
        return true;
    }

    if (cmd == "lift" || (cmd == "move" && rest == "stone") || (cmd == "look" && rest == "under stone")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You move the stone. Under it: bare earth, a few insects, the damp smell of turned soil. Nothing. There is nothing here. Whatever was buried here is gone, or was never here, or has become indistinguishable from the earth it was hidden in.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put the stone back. The lot looks exactly as it did.</ansi>");
        return true;
    }

    return false;
}
