
// Juno's Office - caseworker interactions
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Juno stamps a form with the word \"DISMISSED.\" The stamp hits the paper and the impact ripples outward, dissolving the office walls into the warm familiarity of the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is stamped DISMISSED and vanishes in a puff of bureaucratic smoke.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Open the locked filing cabinet drawer marked "HIM"
    if (cmd == "open" && (rest.indexOf("him") >= 0 || rest.indexOf("locked") >= 0 || rest.indexOf("padlock") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the drawer marked \"HIM\" in red ink. The padlock rattles. The temperature drops. From the drawer, you hear a faint, manic giggle. The padlock glows hot and you jerk your hand back. Some files are locked for a reason.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches the padlocked filing cabinet and pulls their hand back sharply.", user.UserId());
        return true;
    }

    // Look out the window
    if (cmd == "look" && rest.indexOf("window") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You stare into the grey void beyond the window. It's not dark. It's not light. It's the absence of both. The longer you look, the more you feel something looking back -- something vast and patient and thoroughly unimpressed by your existence. You look away. The void doesn't.</ansi>");
        return true;
    }

    // Read the forms on the desk
    if (cmd == "read" && (rest.indexOf("form") >= 0 || rest.indexOf("paper") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You glance at the top form on the stack. It's a \"Deceased Person Intake Form (Revised Edition, 1643).\" The questions include: \"Cause of Death (check all that apply),\" \"Preferred Haunting Method,\" \"Do you have any pre-existing supernatural conditions?\" and \"On a scale of 1-10, how dead are you?\" The bureaucracy of death is, apparently, thorough.</ansi>");
        return true;
    }

    // Answer the phone
    if (cmd == "answer" && rest.indexOf("phone") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the ringing phone. There's a long pause. Then a voice says: \"Is this the afterlife? I'd like to file a complaint.\" Before you can respond, the line goes dead. Appropriately.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " answers the phone on Juno's desk. It does not go well.", user.UserId());
        return true;
    }

    return false;
}
