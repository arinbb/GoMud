
// The Shining - The Lobby
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lobby stretches and warps around you, the columns bending like taffy. The trophy heads turn to watch as reality peels away frame by frame, flickering like a projector running backward. The Grand Library assembles itself around you from the static.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a faulty film projection and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ring" && rest.indexOf("bell") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You tap the brass bell on the front desk. Its chime rings out, pure and clear, and echoes far too long through the empty lobby. For a moment, you hear footsteps approaching — brisk, professional — but no one appears. The echoes fade. The lobby is still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " rings the bell at the front desk. The chime echoes through the empty lobby.", user.UserId());
        return true;
    }

    return false;
}
