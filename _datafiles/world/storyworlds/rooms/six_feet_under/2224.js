// Six Feet Under - The Body Fridge
// Room 2224
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold recedes. The steel doors fade. The body fridge dissolves back into something warm and the Grand Library surrounds you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks quickly back out of the cold room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "open" || (cmd == "look" && (rest.indexOf("door") >= 0 || rest.indexOf("drawer") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put your hand on one of the cold steel handles and then you do not pull it. Whatever is in there -- whoever is in there -- is waiting for something else right now. They are in the care of the Fishers. That is enough. You let go of the handle and step back.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("log") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The logbook entries are careful and clinical. Name. Date. A column for notes. Most entries have no notes -- just the basic facts. A few have short observations: 'Family requests expedited service.' 'Donated to science, held pending paperwork.' 'Memorial in Seattle, transport arranged.' The facts of endings, kept in a logbook, filed away. David's handwriting does not change across the years of entries. He has always been careful with this.</ansi>");
        return true;
    }

    return false;
}