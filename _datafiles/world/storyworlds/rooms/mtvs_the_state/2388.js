// MTVs The State - The Diner (2388)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You leave the diner through the door with the bell that rings for no one. The Grand Library. You came in for coffee. You left different. That is the diner.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves through the door. The bell rings once, for them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You slide into a booth. The vinyl is cool against the back of your legs. A waitress materializes and sets down a coffee cup and fills it without asking. This is correct. This is exactly right.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a booth. Coffee appears.", user.UserId());
        return true;
    }

    if (cmd == "eat" || cmd == "order") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("pie") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">The cherry pie is everything you were hoping for. The crust shatters perfectly. The filling is tart and sweet in exactly the right ratio. Nothing is wrong in the moment you eat this pie.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " orders the pie. It is a good pie.", user.UserId());
            return true;
        }
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You order something. It arrives. It is diner food, which means it is exactly right for what you needed without knowing you needed it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " orders food. It arrives.", user.UserId());
        return true;
    }

    if (cmd == "drink" || cmd == "coffee") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">The coffee is hot and slightly over-extracted and exactly what the diner is for.</ansi>");
        return true;
    }

    return false;
}
