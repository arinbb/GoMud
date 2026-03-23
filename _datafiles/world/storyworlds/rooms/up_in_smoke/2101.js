// Up in Smoke - The Street Corner
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The taco stand smoke rises and spreads until it is everywhere and then nowhere. The sound of the oldies station fades. The warm shelves of the Grand Library close around you, smelling of paper and dust.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the smog like a memory of a song you almost remember.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return false;
}
