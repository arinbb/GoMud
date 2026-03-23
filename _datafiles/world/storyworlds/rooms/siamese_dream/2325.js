var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You float backward out of the childhood bedroom, the stars receding, gravity returning incrementally, until you land gently in the Grand Library, slightly weightless still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " floats gently upward and disappears back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "jump" || cmd == "fly" || cmd == "float") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You push off the floor and go. There is no ceiling to stop you. You drift upward past the drifting models, past the window with its perfect stars, and for a moment you are exactly as free as a nine-year-old with a rocket-ship comforter and no reason not to believe in space travel. Then gravity remembers you. You come back down slowly, the way everything in this room comes back down -- with dignity, without regret.</ansi>");
        return true;
    }

    return false;
}
