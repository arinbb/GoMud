
// The Mines Entrance - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The mine entrance shrinks and the mountain air thins. The torchlight becomes the warm steady light of the Library. You return carrying the smell of stone and copper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs away from the mine entrance and dissolves into the hillside like a memory.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
