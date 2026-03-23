var LIBRARY_ROOM = 1;
var QUEST_ID = 390;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("quest_siamese_today")) {
        user.SetMiscCharacterData("quest_siamese_today", "visited");
        user.GiveQuest(QUEST_ID);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The impossible sunshine fades, the ice cream colors bleeding out, and you are back in the Grand Library carrying the warmth of the greatest day you have ever known.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a column of warm gold light and returns to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing" || cmd == "greatest") {
        if (user.GetMiscCharacterData("easter_siamese_today") != "found") {
            user.SetMiscCharacterData("easter_siamese_today", "found");
            user.GrantXP(250, "singing the greatest day");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You sing it. The radio stops. The room goes perfectly silent. And then the light intensifies -- every ice cream color deepening, the gold pouring through the window until it is almost overwhelming -- and the figure by the window opens their eyes and looks at you. They nod once. The radio resumes.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sings, and the room fills with impossible sunshine.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">The day is still the greatest. The light is still there. You have already made your peace with it.</ansi>");
        }
        return true;
    }

    return false;
}
