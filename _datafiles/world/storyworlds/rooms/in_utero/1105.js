
// Frances Farmer Will Have Her Revenge on Seattle - Track 5
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ward dissolves -- tile crumbling, bars bending, the wheelchair folding into itself. The rain on the windows becomes static, the static becomes silence, and the silence delivers you back to the Grand Library, fifty years and a thousand miles from Seattle.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks through the barred window and dissolves into the Seattle rain.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
