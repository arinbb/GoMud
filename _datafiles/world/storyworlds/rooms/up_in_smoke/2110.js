// Up in Smoke - Stedenkos Unmarked Car
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The beige interior of the Plymouth fades. The binoculars blur. The 405 dissolves to bookshelves. The Grand Library closes around you, quiet and warm and free of Stedenko.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of the unmarked car while Stedenko is watching something else. He writes it in his notepad. Then crosses it out.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return false;
}
