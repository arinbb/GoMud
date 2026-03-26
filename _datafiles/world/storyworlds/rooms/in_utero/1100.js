
// Pachyderm Studios - Control Room (entry/hub for In Utero zone)
// ZONE COMMANDS: return (go back to Library)
var LIBRARY_ROOM = 1;
var QUEST_ID = 70;

function onCommand(cmd, rest, user, room) {

    if (cmd === "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tape slows, the reels grind to a halt, and the red recording light finally goes dark. The studio dissolves into static -- white noise that thins and fades until you are standing in silence, back in the Grand Library, your ears still ringing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and white noise, dissolving back to the Library.", user.UserId());
        user.SetTempData("visited_in_utero", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_in_utero";
    if (user.GetTempData(visitedKey) !== "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...static...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">A single chord -- massive, distorted, and beautiful -- tears through the air like a wound opening. The needle drops. The tape rolls. You are inside the album now.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

        if (!user.HasQuest(QUEST_ID)) {
            user.GiveQuest(QUEST_ID);
            // Step 1: Enter Pachyderm Studios
            user.Command("quest advance " + QUEST_ID);
        }
    }
    return true;
}
