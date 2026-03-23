// The Alcove - diary easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You close the diary and the alcove dissolves. The Grand Library returns around you. The page you wrote on is gone. It was always going to be gone. But you wrote it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the alcove like a thought that was never recorded.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "write" || (cmd == "write" && rest.indexOf("diary") >= 0)) {
        var key = "1984_diary_easter";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "diary entry");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the pen. The nib is sharp against the paper. You write: April 4th, 1984. You pause. What do you write next? It does not matter. The act itself is the thing. The act of writing, here, in this alcove, in the only unwatched corner of a watched world. Your hand moves. The purple ink dries on the cream page. Whatever you have written, you have written it. That cannot be undone.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">(+200 XP: First entry)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You add another entry to the diary. The pen scratches quietly on the cream paper. You keep your face blank.</ansi>");
        }
        return true;
    }

    return false;
}
