// The Street - hub connecting apartments etc
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The South Philly street shimmers in the heat and dissolves. The row houses become outlines, then memories, then nothing. The Paddys Pub sign gives one final, partial reading before winking out. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers on the sidewalk and dissolves like heat haze, gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "go") {
        var restLow = rest.toLowerCase();
        if (restLow.indexOf("courthouse") >= 0 || restLow.indexOf("court") >= 0) {
            user.MoveRoom(2051);
            return true;
        }
        if (restLow.indexOf("water park") >= 0 || restLow.indexOf("waterpark") >= 0) {
            user.MoveRoom(2053);
            return true;
        }
        if (restLow.indexOf("welfare") >= 0 || restLow.indexOf("office") >= 0) {
            user.MoveRoom(2054);
            return true;
        }
    }

    return false;
}
