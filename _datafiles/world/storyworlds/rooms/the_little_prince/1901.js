
// Asteroid B-612
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tiny planet recedes beneath you, the glass dome catching starlight one last time before the watercolours return and the library resolves around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a shimmer of starlight and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "draw" || (cmd == "draw" && rest.indexOf("sheep") >= 0)) {
        if (user.GetMiscCharacterData("lp_sheep_drawn") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You draw another sheep. It is still not quite right. Perhaps the sheep is in a box. Perhaps that is the only way.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws a sheep in the air. It does not quite work.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("lp_sheep_drawn", "found");
        user.GrantXP(200, "drawing a sheep on B-612");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You draw a sheep. It is not a very good sheep. But then you draw a small box with air holes, and inside the box there is a sheep, and somehow this is perfect. You cannot see the sheep, but you know it is there. That is the point.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for drawing a sheep that only matters because you cannot quite see it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws a small box in the air with great seriousness. Inside the box, apparently, is a sheep.", user.UserId());

        if (user.HasQuest(230)) {
            user.Command("quest advance 230");
        }
        return true;
    }

    if (cmd == "lift" && rest.indexOf("dome") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lift the glass dome carefully. The rose opens slightly, her petals shivering in the sudden exposure. She pretends not to notice. You put the dome back down. The ceremony is complete.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lifts the glass dome over the rose, then replaces it carefully.", user.UserId());
        return true;
    }

    if (cmd == "tend" || (cmd == "pull" && rest.indexOf("baobab") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pull the baobab seedlings before they can take root and split the planet apart. It is a small task but an essential one. A planet neglected even one morning can be lost forever.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tends the asteroid carefully, pulling baobab seedlings before they grow too large.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_b612") != "yes") {
        user.SetMiscCharacterData("lp_visited_b612", "yes");
        user.Command("quest advance 230");
    }
    return true;
}
