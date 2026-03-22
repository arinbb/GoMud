
// Cabazon Dinosaurs
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The concrete dinosaurs shrink as if you're zooming out on a postcard. The desert sun fades, and you find yourself in the cool, quiet Grand Library. A tiny souvenir dinosaur figurine might have followed you back. Maybe.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into Dinny's belly and never comes out the other side.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
