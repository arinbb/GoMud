
// Marnies Ranch - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The sounds of the ranch -- the animals, the creaking barn door, Marnie's steady voice -- fade slowly. The smell of hay is the last thing to go. Then you are back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves to the animals and steps through the ranch gate, dissolving into the morning light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
