
// Pledging My Time - Track 2
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The blues guitarist nods once without looking up. The bartender turns the last glass upside-down. The bar dissolves into the ambient quiet of the Grand Library and you are back among the books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the bar like the last customer, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
