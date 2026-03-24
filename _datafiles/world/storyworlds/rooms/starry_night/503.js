
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The church bell tolls once more, and its vibration carries you away — the square dissolves into painted light, and you find yourself back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the starlight like a brushstroke being lifted from canvas.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press your palm against the church wall. Cool stone, or the paint of cool stone -- indistinguishable from inside the painting. The brushstrokes here are shorter, more controlled -- Vincent painting rigidity, geometry, the one structure in the composition that does not move. The church resists the swirling sky above it. It is painted to resist.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " presses a hand against the church wall, feeling the painted stone.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">From the church square, the spire frames the sky above -- a dark vertical line against the great turbulence of stars. The juxtaposition is the painting's central argument: faith and cosmos, the human need for structure and the universe's indifference to it. The spire reaches up. The stars spiral on.</ansi>");
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The square smells of cool stone, old wood, and something sweet -- the pipe left on the bench. Cheap tobacco, the particular brand of a French working man in 1889. And underneath everything, the oil paint smell: linseed and turpentine, the breath of a painting that never entirely dries.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a few strokes to the church shadow -- deepening the dark blue where the moonlight does not reach. The church grows slightly more solid, slightly more grounded. Your contribution makes the contrast between the fixed structure and the swirling sky above it just a little sharper. Vincent would understand the instinct to deepen the dark.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " adds shadow to the church wall, deepening the blue beneath the eaves.", user.UserId());
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the painted bench. The wood gives just slightly under you -- or seems to. The pipe beside you is still faintly warm. Whoever left it here is somewhere in the village, sleeping or not sleeping. From this bench, the church square looks exactly as it was observed: small, human, dignified in its smallness.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the bench beside the old pipe and looks around the square.", user.UserId());
        return true;
    }

    return false;
}
