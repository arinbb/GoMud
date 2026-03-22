
// Rape Me - Track 4
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The spotlight cuts out. The graffiti fades. The mirror cracks completely and falls in silence, each shard reflecting a different version of the room that no longer exists. Darkness. Then the Grand Library, quiet and orderly and nothing like what you just left.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the spotlight and dissolves into white glare, gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
