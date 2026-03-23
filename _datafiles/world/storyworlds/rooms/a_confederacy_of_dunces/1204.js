
// Ignatius's House - return handler + read tablets easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of mothballs and Dr. Nut fades, the Big Chief tablets dissolve into pages of the novel itself, and the shotgun house on Constantinople Street collapses gently back into sentences and paragraphs. You are in the Grand Library again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like the memory of a Dr. Nut soda and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("tablet") >= 0 || target.indexOf("journal") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up one of the Big Chief tablets and read:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"When a true genius appears in the world, you may know him by this sign, that the dunces are all in confederacy against him.\" So wrote Jonathan Swift, and so it remains. I, Ignatius J. Reilly, am besieged on all sides by the forces of mediocrity. My pyloric valve, that most sensitive barometer of my soul, closes at the very thought of the offenses perpetrated daily against theology and geometry by the barbarians who surround me. Boethius understood. Fortune's wheel turns, and those of us who possess genuine vision are crushed beneath it while the dunces ride high.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">The handwriting is dense, passionate, and magnificent in its self-regard. You have glimpsed the mind of Ignatius J. Reilly.</ansi>");

            if (user.GetMiscCharacterData("dunces_tablets_read") != "found") {
                user.SetMiscCharacterData("dunces_tablets_read", "found");
                user.GrantXP(200, "reading Ignatius's journal");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 200 XP for reading the writings of a true genius. Or a magnificent fool. The distinction is left as an exercise for the reader. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}
