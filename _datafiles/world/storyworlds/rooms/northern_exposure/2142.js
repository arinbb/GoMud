// Northern Exposure - The Brick Back Room
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The back room fades. The orange plaid couch, the photographs, the cedar and beer smell -- all of it dissolves gently into the warm dark of the Screening Room, the film returning you to the library with the quiet efficiency of a good story ending.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the back room like a familiar face you can almost place.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
