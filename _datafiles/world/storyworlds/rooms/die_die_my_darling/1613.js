
// Die! Die! My Darling! - The Cellar Stairs
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Quest step 6: Reach the cellar
    if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_cellarstairs")) {
        user.SetMiscCharacterData("ddie_q_cellarstairs", "1");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The smell from below is entirely wrong for a cellar. Not damp or rot. Something theatrical.</ansi>");
    }

    return false;
}
