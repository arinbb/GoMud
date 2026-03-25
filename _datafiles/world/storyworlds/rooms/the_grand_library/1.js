// The Grand Library — home room
// Handles: guestbook, browse hint

function onCommand(cmd, rest, user, room) {

    // Guestbook signing
    if (cmd == "sign") {
        var signKey = "library_guestbook_signed";
        var playerName = user.GetCharacterName(false);

        if (rest == "" || rest == "guestbook") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">What would you like to write? Type: sign <your message></ansi>");
            return true;
        }

        var message = rest;
        if (message.indexOf("guestbook ") == 0) {
            message = message.substring(10);
        }
        if (message.length > 80) {
            message = message.substring(0, 80);
        }

        var entryKey = "guestbook_" + playerName;
        room.SetPermData(entryKey, message);

        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You write in the guestbook. The ink shimmers, then settles.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + message + "\" -- " + playerName + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something in the guestbook.", user.UserId());
        return true;
    }

    // Guestbook reading
    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Names and notes fill the pages:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" -- N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" -- J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" -- O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" -- W. & G.</ansi>");

        var playerName = user.GetCharacterName(false);
        var myEntry = room.GetPermData("guestbook_" + playerName);
        if (myEntry != null && myEntry != "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + myEntry + "\" -- " + playerName + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // Browse hint
    if (cmd == "browse") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'look shelves' to see all available titles.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Then 'get <title> shelves' to take one.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Once you have a title, 'use' or 'read' it to enter that world.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'return' inside any world to come back here.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
