// Up in Smoke - The Police Station
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent lights dim to amber. The evidence board blurs. The donuts are the last thing to go. The Grand Library closes around you, quiet and certain, smelling of books rather than institutional coffee.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the squad room between one phone call and the next. Stedenko does not notice. He is looking at the board.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return true;
}
