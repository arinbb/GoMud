
// World 2-3 Bridge Level - Standard return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The platforms over the water dissolve. The Cheep-Cheeps drop back into a sea that fades to code. The bridge level is over. You are back in the Arcade, your balance slightly wrong from all the narrow platforms.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates over the water and fades back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "jump" || cmd == "dodge") && rest.indexOf("cheep") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leap aside as a Cheep-Cheep arcs overhead. It clears you by an inch, lands behind you, and slides into the water. You are getting better at this. The fish does not notice. The fish will never notice. The fish has a fixed arc and that is enough.</ansi>");
        return true;
    }

    return false;
}
