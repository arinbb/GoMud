var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The drone carries you back -- not the act of leaving but the natural conclusion of a seven-minute breath finally exhaled -- and you are in the Grand Library, the resonance still in your chest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is carried out on the wave of the drone, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "listen" || cmd == "stand") {
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You stand still and let the drone build around you. Layer by layer it accumulates until the room is a different place than it was when you entered. Seven minutes passes. The drone does not resolve. It simply becomes everything, and then it is just the beginning of the next thing.</ansi>");
        return true;
    }

    return false;
}
