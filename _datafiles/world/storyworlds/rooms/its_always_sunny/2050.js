// The Waitress Apartment
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves — the layers of locks, the notepad with its impressed heart, the cat food behind the milk. The Waitress's careful domesticity fades. You are back in the Grand Library, which has never had a stalker problem, which is a feature you are newly appreciating.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the Waitress's apartment, the locks clicking shut behind them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
