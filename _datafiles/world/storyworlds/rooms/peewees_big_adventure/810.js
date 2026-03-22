
// Warner Bros. Studio Gate
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The studio gate swings shut behind you, and the whole Warner Bros. lot folds up like a movie set being struck. You're back in the Grand Library. That's a wrap.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flashes a studio pass, walks through the gate, and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
