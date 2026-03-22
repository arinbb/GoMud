
// Very Ape - Track 7
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cave collapses -- not violently, but like an exhale. The walls fold in, the bones crumble to dust, the drawings smear into abstract shadow. The riff plays its last bar and cuts dead. Silence hits you like a wall. Then the Grand Library, bright and civilized, and you miss the cave already.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " beats the cave wall once and vanishes in a cloud of stone dust.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
