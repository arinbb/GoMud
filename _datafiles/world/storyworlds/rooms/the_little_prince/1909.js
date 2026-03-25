
// The Rose Garden
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leave the garden. The scent of five thousand roses follows you for a moment, then fades. The library smells of paper and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks back through the garden and dissolves into library light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "count" && rest.indexOf("rose") >= 0) {
        if (user.GetMiscCharacterData("lp_roses_counted") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You count again. Still five thousand. Each one the same. Each one different from the one on B-612 in exactly one way: that one was tended.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("lp_roses_counted", "found");
        user.GrantXP(150, "counting five thousand roses and finding the one that matters");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You count the roses. One. Two. Ten. A hundred. You lose track. You start again. The rows go on past what you can count. Five thousand, approximately. Each one perfect. Each one red. Each one exactly like the next. You think about a rose under a glass dome on a tiny asteroid. This one is not that one. Not because it is less beautiful. Because no one has tended it.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for understanding what makes a rose unique.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " counts the roses one by one, then stops, and sits very still for a moment.", user.UserId());

        if (user.HasQuest(230)) {
            user.Command("quest advance 230");
        }
        return true;
    }

    if (cmd == "smell" || (cmd == "sniff")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The scent is overwhelming, beautiful, and somehow melancholy. Five thousand roses. The same rose, five thousand times. You understand something about why numbers can make things worse instead of better.</ansi>");
        return true;
    }

    if (cmd == "pick" || (cmd == "take" && rest.indexOf("rose") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach for a rose. The thorns prick your finger. You do not pick it. It was not yours to pick. Your rose, if you had one, would be the one you had tended. Not this one.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_roses") != "yes") {
        user.SetMiscCharacterData("lp_visited_roses", "yes");
    }
    return true;
}
