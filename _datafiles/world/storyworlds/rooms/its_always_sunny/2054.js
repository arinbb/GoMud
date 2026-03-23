// The Welfare Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The welfare office dissolves. The plastic chairs, the number dispenser stuck on 47, the flickering light, the documentation requirements — all of it retreats into white. The forms blow off the rack and scatter as the scene closes. You are back in the Grand Library, which does not require documentation.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is released from the welfare office as the scene dissolves, forms scattering in the exit wind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
