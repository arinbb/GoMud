
// Buffalo '66 - Buffalo Streets
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The street cracks and peels away like old wallpaper, revealing frames of flickering film beneath. The grey dissolves into library warmth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a damaged film frame and vanishes from the street.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "call" || (cmd == "use" && rest.indexOf("phone") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the receiver. No dial tone. You hold it to your ear anyway, listening to nothing. After a while, you hang it up. Who would you have called?</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the phone booth receiver, listens to nothing, and hangs up.", user.UserId());
        return true;
    }

    return false;
}
