// Six Feet Under - Nates Room
// Room 2228
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The old room fades. The posters and the trophies and the quilt dissolve into the Grand Library around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of Nates room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("bed") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the edge of the bed with its old quilt. The room holds its version of Nate very still -- the trophies, the posters, the map with the pins. He came back to this room at thirty-four and found himself at seventeen waiting for him, slightly accusatory. He and David have to work out how to run this business. He has to figure out who he is when he is back in the house he grew up in. He is not doing this quickly. The quilt is very soft.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("map") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The world map with its red pins. Barcelona, Auckland, Marrakech, Reykjavik, Buenos Aires. Nate put these pins in when he was seventeen. Some of them he actually went to, eventually, in his years of not being here. Some are still waiting. The map does not know the difference between a destination you reached and one you are still meaning to get to.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("book") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Letters to a Young Poet, Rilke. It was not in the room before -- Nate brought it back. There is a bus ticket used as a bookmark, and several passages underlined. 'Live the questions now. Perhaps then, someday far in the future, you will gradually, without even noticing it, live your way into the answer.' He has been underlining this since Seattle. He is still living the question.</ansi>");
        return true;
    }

    return false;
}