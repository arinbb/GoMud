// The Office - The Church
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk back out through the church doors and east toward the farm road, back through the warehouse, back through the lobby, back to the Grand Library. The stained glass light follows you to the door.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks quietly back down the aisle and out through the church doors, letting them close softly behind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "kneel" || cmd == "pray") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit in the pew. The stained glass light is on the floor, moving in the pattern that sunlight makes through colored glass, which is one of the few patterns that has not changed since glass was invented. You are quiet. The church is quiet. It has hosted weddings and grief and the ordinary passages, and it is quiet about all of them equally. You stay for a while.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("program") >= 0 || rest.indexOf("wedding") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You read the wedding program. Phyllis Lapin and Bob Vance. The note from Phyllis is warm and genuine and specifically mentions the seating chart. At the bottom of the program, in very small print: 'Photography by Michael Scott.' You look at this for a moment. Nobody asked him to do photography. He did it anyway. The photos were apparently very good.</ansi>");
        return true;
    }

    return false;
}
