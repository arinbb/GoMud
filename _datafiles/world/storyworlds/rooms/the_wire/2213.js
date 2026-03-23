// The Wire - The Greek Diner
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The diner dissolves into static. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the diner.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "order" && rest.indexOf("coffee") >= 0) || (cmd == "get" && rest.indexOf("coffee") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The counterman pours you a coffee without you having to ask. It is hot and good. You sit with it. The man in the back booth continues his quiet conversation. You cannot hear what they are saying. That is the point.</ansi>");
        return true;
    }

    return false;
}
