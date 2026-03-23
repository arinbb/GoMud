// Stand By Me -- Along the Tracks (2404)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The green light between the firs fades. The rails go grey and then flat and then gone. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears between the trees, the forest closing behind them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
