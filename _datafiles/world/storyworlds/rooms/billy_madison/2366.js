
// Billy Madison - Carls Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The kitchen dissolves in a warm cloud of peanut butter smell and the sound of Carl saying something reassuring that you can almost make out. The Grand Library assembles itself from old paper and warmth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from Carl's kitchen in a shimmer of warm light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || (cmd == "open" && rest.toLowerCase().indexOf("bag") >= 0) || (cmd == "open" && rest.toLowerCase().indexOf("lunch") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Carl turns from the stove and slides a brown paper lunch bag across the counter toward you. Your name is written on it. It has a small star drawn near the top. Inside: a perfect peanut butter sandwich on whole wheat, a bag of chips, an apple juice box, and a folded note. The note says: \"You can do it. -- Carl.\" You eat the sandwich. It is the best sandwich you have ever had. It is the best sandwich anyone has ever had.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens a lunch bag from Carl. Carl watches with quiet approval.", user.UserId());
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("note") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The note is folded in quarters, the way you'd fold something small to fit in a lunch bag. In Carl's careful block capitals: \"YOU CAN DO IT. I KNOW YOU CAN DO IT. PEANUT BUTTER ON WHOLE WHEAT BECAUSE YOU LIKE IT BETTER THAN STRAWBERRY JAM. ALSO I PUT EXTRA CHIPS. -- CARL.\"</ansi>");
        return true;
    }

    return false;
}
