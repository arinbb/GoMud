// Ministry of Truth - rewrite easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The speakwrites fall silent. The memory holes go dark. The Ministry of Truth dissolves into printed pages that dissolve into air. You are back in the Grand Library. The truth here is stable. You are grateful for that.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " feeds a document into the memory hole and vanishes with it, back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "rewrite" || cmd == "memory" || (cmd == "use" && rest.indexOf("hole") >= 0) || (cmd == "drop" && rest.indexOf("hole") >= 0)) {
        var key = "1984_minitrue_easter";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "corrected the record");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You feed a document into the memory hole. It is a newspaper from four years ago that mentioned a person who no longer exists and a battle that was never won. Your corrected version will replace it. The original falls into the furnace. That person never existed. That battle was always won. You have made it so. The speakwrite accepts your correction without pause. This is the work. This is always the work.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">(+200 XP: Corrected the record)</ansi>");
            user.GiveQuest(260);
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You feed another correction into the memory hole. The original falls into the furnaces. It never happened. It was always this way.</ansi>");
        }
        return true;
    }

    return false;
}
