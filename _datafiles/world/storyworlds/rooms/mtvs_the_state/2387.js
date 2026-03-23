// MTVs The State - Taco Stand (2387)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You leave the taco stand. The smell of the griddle follows you a little way. The Grand Library. The taco was good. You are thinking about whether the taco was good or whether goodness is a category that applies to tacos.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the taco stand. Taco Man watches them go, as he watches everyone go.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || cmd == "buy" || cmd == "order") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("philosophical") >= 0 || restLower.indexOf("philosophy") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">Taco Man assembles the philosophical taco with no change in expression. He wraps it carefully. He hands it to you.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">\"It is the same as the other tacos,\" he says. \"That is not the point of it.\"</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">You eat the philosophical taco. It tastes like a good taco. You are changed.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " orders the philosophical. Taco Man prepares it without comment.", user.UserId());
            return true;
        }
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">Taco Man assembles your taco with the movements of someone for whom taco assembly is a practice, not just a task. He wraps it. He hands it over. \"Good,\" he says, though you haven't eaten it yet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets a taco. It is a good taco.", user.UserId());
        return true;
    }

    if (cmd == "ask" || cmd == "say") {
        var restLower2 = rest.toLowerCase();
        if (restLower2.indexOf("taco") >= 0 || restLower2.indexOf("mean") >= 0 || restLower2.indexOf("why") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">Taco Man sets down his spatula. He looks at you for a long moment.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">\"The taco is what it is,\" he says. \"You make it and someone takes it and you make another one. Every day. That is it. That is everything.\"</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"14\">He picks up the spatula. He returns to work.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " asks Taco Man a question. He answers it with weight.", user.UserId());
            return true;
        }
    }

    return false;
}
