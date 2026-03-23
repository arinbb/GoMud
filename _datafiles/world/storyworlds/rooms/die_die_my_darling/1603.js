
// Die! Die! My Darling! - The Dining Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "eat" || cmd == "dine") {
        // Quest step 2: Endure dinner
        if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_dinner")) {
            user.SetMiscCharacterData("ddie_q_dinner", "1");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the long table. The food, when it comes, is boiled — pale and without flavour, served in plain white bowls. Mrs. Trefoile says grace for seven minutes. She does not close her eyes while she does it. She watches you. The silence afterward is the same as the silence during.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the long table in the cold dining room. There is nothing to eat. The plain china waits.</ansi>");
        }
        return true;
    }

    return false;
}
