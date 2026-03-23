
// Wayne's World - Wayne's Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The kitchen linoleum pattern swirls and shifts, becomes film grain, becomes library floor. The smell of coffee fades into old books. Party on.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " phases out of the kitchen like a scrambled cable signal.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || (cmd == "take" && rest.toLowerCase().indexOf("snack") >= 0) || (cmd == "take" && rest.toLowerCase().indexOf("debbie") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a Little Debbie Swiss Roll from the counter. It is perfect. It has always been perfect. It will always be perfect.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a Little Debbie from the counter with the quiet confidence of a person who knows what they want.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("magnet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The refrigerator magnets spell \"WANYE IS GRATE\" — someone who loves Wayne very much and cannot spell. You feel a pang of pure suburban tenderness.</ansi>");
        return true;
    }

    return false;
}
