// Up in Smoke - The Roxy Theatre
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The stage lights flare white and then dim to the warm amber of the Grand Library reading lamps. The crowd noise fades. The smell of the velvet curtains becomes the smell of old books. You are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the stage lighting and is gone between one song and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return false;
}
