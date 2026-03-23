// MTVs The State - Dougs Apartment (2385)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You leave Doug's apartment. Doug waves goodbye. His wave is perfectly normal. Everything was fine in there. Completely fine. The Grand Library settles around you and you do not think about Doug's apartment for a while, and then you do.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves. Doug waves from the door. Normally.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "search") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You search the apartment for something wrong. Everything is exactly as it appears to be. This does not help.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " searches the apartment carefully. Doug watches with patient interest.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Doug says: \"Can I help you find something? I can probably help you find it.\"</ansi>");
        return true;
    }

    if (cmd == "eat" || cmd == "take") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("snack") >= 0 || restLower.indexOf("pretzel") >= 0 || restLower.indexOf("cracker") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take a snack from the bowl. It tastes like a snack. Doug watches you eat it with a smile that is warm and long and patient.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Doug says: \"Good, right? I got the good kind.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats one of Doug's snacks. Doug is pleased.", user.UserId());
            return true;
        }
    }

    return false;
}
