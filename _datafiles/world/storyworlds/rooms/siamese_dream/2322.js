var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The quiet room exhales, and in the exhale you are gone, back to the Grand Library, the candle's ghost-light fading from your vision.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " crosses the threshold and vanishes silently back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || cmd == "wait") {
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You hold very still in the quiet half. The silence is complete. And then -- from the far side of the threshold -- a roar begins, building from nothing, a wave of distorted guitar rising and rising and rising until the threshold blazes white and you can feel the concussion of it in your chest. Then: silence again. The candle is out. It relit itself.</ansi>");
        return true;
    }

    return false;
}
