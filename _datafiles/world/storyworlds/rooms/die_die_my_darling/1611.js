
// Die! Die! My Darling! - The Sewing Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" || cmd == "examine") {
        var target = rest.toLowerCase();
        if (target == "red" || target == "scraps" || target == "wool" || target == "sweater") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the red strips of wool. They are the remains of a sweater — you can still see the shape of a seam, the edge of a neckline, cut apart with large scissors. Red. It was red. Someone arrived here wearing a red sweater and the sweater was taken and cut to pieces and the pieces discarded on the floor of the sewing room. As though the colour itself were the offence. As though red could not be permitted to exist in this house.</ansi>");
            return true;
        }
        if (target == "dummy" || target == "garment" || target == "dress" || target == "gown") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The garment on the dressmaker's dummy is nearly finished — a long dress in plain grey, high-necked, long-sleeved, precise in its plainness. The waist is pinned to a measurement. It is about your size.</ansi>");
            return true;
        }
    }

    return false;
}
