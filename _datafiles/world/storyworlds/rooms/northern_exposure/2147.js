// Northern Exposure - The Raven Totem
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The raven at the top of the totem seems to watch as you fade. The spruce trees press close and still. The carved faces look in their four directions. The totem remains as the world dissolves around it, and then the Screening Room has you again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out near the totem. The raven in the spruce tree watches them go.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
