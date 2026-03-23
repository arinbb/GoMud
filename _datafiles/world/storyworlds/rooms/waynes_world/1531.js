
// Wayne's World - The Airport Runway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The runway lights strobe and the tarmac dissolves into film frames. The jet fuel smell fades. The library arrives from the amber quiet of old books. This is the happy ending. One of them, anyway.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dematerializes from the runway. Another departure from Aurora.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "run" || cmd == "chase") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You run across the runway, arms waving, everything riding on this. A jet screams overhead. Your voice is lost in the noise. This is the happy ending. This is the ending Wayne would choose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " runs across the airport runway, arms wide, chasing something important.", user.UserId());
        return true;
    }

    if (cmd == "wave") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wave at the departing aircraft. The navigation lights blink their impartial rhythm. You wave anyway. In Wayne's World, all grand gestures are valid.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves at a departing aircraft with genuine feeling.", user.UserId());
        return true;
    }

    return false;
}
