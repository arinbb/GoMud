
// Die! Die! My Darling! - The Attic Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target == "scratches" || target == "plaster" || target == "wall" || target == "marks") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You crouch and look closely at the scratches in the plaster near the cot. They are not random — they are in groups of five, the fifth always cutting diagonally through the others. Counting. Days, most likely. You count the groups. There are many. Whoever was kept in this room was kept here for weeks, not days. The scratches end abruptly, mid-count.</ansi>");
            return true;
        }
    }

    if (cmd == "shout" || cmd == "yell" || cmd == "scream" || cmd == "call") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You shout. Your voice fills the small room completely and hits the bare plaster walls and comes back at you. The house absorbs it. Outside, the garden is silent. No one is close enough. No one is listening.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shouts. The sound is swallowed by the thick walls.", user.UserId());
        return true;
    }

    return false;
}
