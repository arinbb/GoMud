var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The walls release their accumulated sound all at once -- a final massive chord -- and then the room is white and empty again, and you are in the Grand Library, your ears ringing with the residue of something enormous.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pushed out by the accumulated sound, returning to the Library on a wave of distortion.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "listen" || cmd == "stand") {
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You stand still and let the room fill around you. Layer by layer. The bass from below, the guitar from the walls, the harmonics from above. The room has been filling since before you arrived and will continue filling after you leave. You are a resonant body in a room that keeps getting louder. This is fine. This is the point.</ansi>");
        return true;
    }

    return false;
}
