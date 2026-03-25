// Up in Smoke - Tijuana
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dust of the Tijuana street spirals upward and becomes the floating motes of the Grand Library. The trumpet from the cantina fades. The velvet paintings blur into bookshelves. You are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bargains briefly with a souvenir vendor and then disappears entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return true;
}
