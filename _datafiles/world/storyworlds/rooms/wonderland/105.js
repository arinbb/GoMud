
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Cheshire Cat grins wider than ever. 'Leaving so soon? Well, if you must...' Its grin expands until it fills your entire vision, then folds inward like a closing book. You find yourself in the Library, smiling for no reason you can explain.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the Cheshire Cat's enormous grin and fades away, leaving only a faint smile in the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
