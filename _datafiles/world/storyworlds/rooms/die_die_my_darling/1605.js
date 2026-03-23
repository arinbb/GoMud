
// Die! Die! My Darling! - The Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "talk" || cmd == "ask") {
        var target = rest.toLowerCase();
        if (target.indexOf("anna") >= 0 || target.indexOf("help") >= 0 || target.indexOf("mirrors") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Anna scrubs the table harder. 'I don't know anything about any mirrors,' she says, to the table, not to you. 'All the mirrors went downstairs. That's all I know. I don't know why. I don't ask why.' She pauses. 'Don't go downstairs.'</ansi>");
            return true;
        }
    }

    return false;
}
