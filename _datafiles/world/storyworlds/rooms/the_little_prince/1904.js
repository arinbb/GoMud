
// The Vain Mans Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You applaud once, politely, and the Vain Man bows. The asteroid dissolves mid-bow.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " applauds once and disappears in a shimmer of starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "clap" || cmd == "applaud" || (cmd == "admire")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You clap. The Vain Man tips his hat with practiced grace. His face floods with relief, then immediately with the need for more. 'Again,' he suggests, not quite asking. You clap again. He tips his hat again. This could go on for some time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " applauds. The Vain Man tips his hat magnificently.", user.UserId());
        return true;
    }

    if (cmd == "ignore" || (cmd == "look" && rest != "vain man" && rest != "man")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You do not applaud. The Vain Man's hands hover, ready. He adjusts his hat. He waits. He is very good at waiting. Better than you are at ignoring.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_vain") != "yes") {
        user.SetMiscCharacterData("lp_visited_vain", "yes");
        user.Command("quest advance 230");
    }
    return true;
}
