
// Paris, Texas - The Gas Station
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The gas station bleaches out in the noon sun, all contrast gone, until the white light becomes the white ceiling of the Screening Room and the smell of motor oil gives way to old books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the glare of the highway sun and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
