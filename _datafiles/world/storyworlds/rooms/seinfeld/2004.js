
// Seinfeld - The Lobby and Street
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The street dissolves. The newsstand, the cabs, the pigeons -- all of it folds back into the reel. The Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the lobby, stepping through a gap in the city that closes behind them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
