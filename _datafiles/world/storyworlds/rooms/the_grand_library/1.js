// The Grand Atrium — Library hub room script
// Handles guestbook signing and reading

function onCommand(cmd, rest, user, room) {

    if (cmd == "sign") {
        var signKey = "library_guestbook_signed";
        var playerName = user.GetCharacterName(false);

        if (rest == "" || rest == "guestbook") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">What would you like to write? Type: sign <your message></ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Example: sign I was here and the Library remembers</ansi>");
            return true;
        }

        // Strip "guestbook " prefix if present
        var message = rest;
        if (message.indexOf("guestbook ") == 0) {
            message = message.substring(10);
        }

        // Truncate long messages
        if (message.length > 80) {
            message = message.substring(0, 80);
        }

        // Store the entry using room permanent data (persists across restarts)
        var entryKey = "guestbook_" + playerName;
        room.SetPermData(entryKey, message);

        // Track that this player has signed (for XP)
        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up the brass pen and write in the guestbook. The ink shimmers briefly, then settles into the page.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + message + "\" -- " + playerName + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something in the guestbook.", user.UserId());
        return true;
    }

    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You flip through the pages of the guestbook. Names and notes fill the pages in every color of ink:</ansi>");
        SendUserMessage(user.UserId(), "");

        // Show fixed NPC entries
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" -- N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" -- J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Ignatius was right about everything.\" -- I.J.R.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" -- O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" -- W. & G.</ansi>");

        // Show this player's entry
        var playerName = user.GetCharacterName(false);
        var myEntry = room.GetPermData("guestbook_" + playerName);
        if (myEntry != null && myEntry != "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + myEntry + "\" -- " + playerName + "</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        var signKey = "library_guestbook_signed";
        if (user.GetMiscCharacterData(signKey) != "signed") {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'sign <your message>' to add your entry.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'sign <new message>' to update your entry.</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
