// Back to the Future -- Hill Valley High School
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The school bell rings one long continuous note that shifts in pitch and becomes the projector's reel-end clicking. The mustard lockers blur and fade. You are in the Grand Library, standing in warm amber light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears in a shimmer between one moment and the next, like a name erasing itself from a photograph.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
