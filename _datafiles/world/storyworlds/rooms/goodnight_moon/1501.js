
// The Cow Jumping Over the Moon
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">The moon and the blue-black sky dissolve into green wallpaper. You step back through the picture frame and into the warm amber light of the great green room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades back through the painting and out the other side.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "touch" && rest.toLowerCase().indexOf("moon") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You reach up and press your palm against the moon's surface. It is smooth and cool as porcelain, slightly yielding, like the skin of something very large and very alive. A faint light seeps between your fingers. You hold your hand there for a long moment. Then you lower it. The moon continues rising.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches up and presses a hand against the face of the moon.", user.UserId());
        return true;
    }

    if (cmd == "jump") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You leap. Here, inside the painting, you hang in the air just as the cow does -- briefly, perfectly, suspended above everything. For one moment you are the cow, you are the leap, you are the impossible thing that pictures make possible. Then gravity reasserts itself and you land gently, as if the air caught you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaps and hangs in the air for a moment, suspended in the painting's eternal arc.", user.UserId());
        return true;
    }

    if (cmd == "quest" || (cmd == "goodnight" && rest.toLowerCase().indexOf("cow") >= 0) || (cmd == "say" && rest.toLowerCase().indexOf("goodnight") >= 0 && rest.toLowerCase().indexOf("cow") >= 0)) {
        if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_visited_cow")) {
            user.SetMiscCharacterData("gm_visited_cow", "true");
            user.Command("quest advance 110");
        }
        return false;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_visited_cow")) {
        user.SetMiscCharacterData("gm_visited_cow", "true");
        user.Command("quest advance 110");
    }
    // Quest: find the mouse
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }
    return false;
}
