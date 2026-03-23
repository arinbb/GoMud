// Northern Exposure - Joels Cabin
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cabin fades. The New York posters. The Alaska books. The unfinished letter. The parka on the hook. All of it goes gently, with the particular poignancy of someone's private life returning to privacy. The Screening Room closes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the cabin. Joel turns from the window and finds the room empty.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
