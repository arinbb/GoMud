// Far Cry 5 - Henbane River
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Bliss fog thickens around you until the library's light is what is visible through it, amber instead of purple, real instead of beautiful. The fog disperses. You are back among the shelves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the river fog and the purple-sweet smell of Bliss, dissolving from the Henbane bank.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wade" || (cmd == "enter" && rest.indexOf("river") >= 0) || cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">You step to the edge and put a hand in. The water is cold — genuinely cold — and carries a slight purple tint near the bank where the Bliss runoff enters. The cold is real. The purple is real. You step back. The robed figure on the far bank watches you with complete serenity. It smiles.</ansi>");
        return true;
    }

    if (cmd == "talk" || (cmd == "ask" && rest.indexOf("figure") >= 0) || (cmd == "speak" && rest.indexOf("robed") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">The robed figure on the bank turns at your approach. Its eyes are open but not quite focused. It says: 'She is everywhere here. She is the river. She is the flowers. She loves you. She always has.' Then it turns away and resumes looking at nothing with perfect contentment. The Bliss has taken it somewhere it prefers to this conversation.</ansi>");
        return true;
    }

    return false;
}
