// Northern Exposure - Eds Video Store
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The video store fades. The cassettes, the posters, the television's continuous light -- all of it dissolves back into the warm dark of the Screening Room, where stories are kept for people who need them.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the video store. Ed makes a note in his notebook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
