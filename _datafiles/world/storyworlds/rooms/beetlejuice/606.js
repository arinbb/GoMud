
// Dining Room - Day-O dinner scene
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dinner table blurs and fades. The calypso music fades to silence. You're back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the dinner table mid-course.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "eat" || (cmd == "eat" && rest.indexOf("banana") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a seat at the table. The moment you sit, the chandelier dims and a rhythmic calypso beat begins to pulse through the room. Your hands move on their own -- grabbing the napkin, snapping it open, conducting an invisible orchestra.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The shrimp on the serving platter leap from their dish and dance across the table in formation. The fruit bowl erupts -- bananas peel themselves mid-air. Your body rises from the chair against your will, swaying to the irresistible rhythm of an invisible calypso band.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The possession lasts only a minute, but it feels like a lifetime. When it ends, you collapse back into the chair, breathless. The dining room is pristine again. The shrimp are back in their dish. The bananas are whole. But your foot is still tapping.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits at the table and is immediately seized by an invisible force -- swaying, dancing, and conducting a phantom calypso band!", user.UserId());
        return true;
    }

    return false;
}
