
// Eagles' Eyrie - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">An eagle swoops down and catches you gently in its talons. The world spins -- mountains, forests, rivers blur into streaks of color that become brushstrokes on a page. The eagle sets you down softly in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is snatched up by a great eagle and carried away in a rush of golden feathers, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
