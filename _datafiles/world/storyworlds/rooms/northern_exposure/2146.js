// Northern Exposure - Maggies Cabin
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cabin fades. The flight jacket by the door. The aviation charts. The north window with its view of aurora and mountains. All of it dissolves gently back into the Screening Room, where you are still in your seat and Maggie is still in Alaska, navigating.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the cabin. Maggie watches the door close and shakes her head slightly.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
