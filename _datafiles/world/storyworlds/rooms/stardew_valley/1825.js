
// The Beach - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The sound of waves recedes into silence, then becomes the ambient hum of the Library. The salt smell fades. You stand among the stacks again, the disc still warm from the console.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into the incoming tide and is not there when the water recedes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
