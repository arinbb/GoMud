// The Wire - Bubbles Cart
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The sidewalk and the cart dissolve into grey. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the street.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "buy" && rest.indexOf("shirt") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You buy a white t-shirt from Bubbles for three dollars. He takes the money with the practiced speed of someone who has handled cash on the street for a long time. He gives you the shirt. It is clean. It is white. It is three dollars well spent.</ansi>");
        return true;
    }

    return false;
}
