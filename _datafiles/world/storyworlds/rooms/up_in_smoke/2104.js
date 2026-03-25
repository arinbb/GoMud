// Up in Smoke - Pedros Cousins House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The noise and warmth of the house rises to a peak and then dissolves. The smell of tamales gives way to the smell of old books. The Grand Library closes around you, quiet and orderly and smelling of paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes between one kid running through and the next. Nobody notices for a while.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return true;
}
