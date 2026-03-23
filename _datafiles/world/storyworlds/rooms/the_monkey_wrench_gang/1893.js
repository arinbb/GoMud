
// The Train Bridge
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
