// The Water Park - AIDS float, closed slides
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The water park dissolves — the empty wave pool, the ham in sunglasses, the closed slides pointing at an empty sky. Frank's AIDS raft retreats into white. The seagull's investigation continues off-camera, into the space where the parking lot was. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the water park, leaving the ham in sunglasses to continue its vigil alone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
