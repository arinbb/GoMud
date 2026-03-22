
// Studio Backlot
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pirate ship, the spaceship, the Christmas village -- all the sets collapse flat like pop-up book pages closing. The backlot folds away and the Grand Library unfolds in its place.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dashes through three different movie sets and vanishes into a fourth.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
