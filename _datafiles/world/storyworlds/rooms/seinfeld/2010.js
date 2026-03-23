
// Seinfeld - The Costanza House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Costanza house fades. The television, the wallpaper, the pole -- all of it dissolves. The Grand Library steadies around you. It is very quiet here.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " retreats from the Costanza house, grateful for the silence.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("pole") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Festivus pole. Aluminum. Unadorned. Frank Costanza finds tinsel distracting and chose aluminum because of its high strength-to-weight ratio. The pole has stood in this corner, year-round, as a monument to the holiday that Frank invented and that has outlasted every expectation, including Franks own.</ansi>");
        return true;
    }

    if (cmd == "yell" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You yell something in the Costanza house. This is correct behavior in this house. Everyone yells. You fit right in. Frank yells something back. It is unclear who has won this exchange. Nobody wins exchanges in the Costanza house. You simply survive them.</ansi>");
        return true;
    }

    return false;
}
