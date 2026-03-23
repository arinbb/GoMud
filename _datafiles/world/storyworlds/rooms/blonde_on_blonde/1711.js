
// Absolutely Sweet Marie - Track 11
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The six white horses remain in their field as you dissolve. The cell door keeps swinging. The key stays on the bunk. You are back in the Grand Library. The promise is still unresolved, which is exactly how it was when you left it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the open cell and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "get") {
        if (rest.indexOf("key") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the gate key. It is heavy, iron, made for a specific lock somewhere between here and those horses. To live outside the law, you must be honest. You hold the key and consider what it would mean to use it. The six white horses wait. You hold the key a moment longer and then place it back on the bunk. Some promises need to be kept by the right person. This key is not for you.</ansi>");
            return true;
        }
    }

    if (cmd == "look") {
        if (rest.indexOf("horse") >= 0 || rest.indexOf("window") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Through the high window, the six white horses stand in their field. They do not pace or graze. They stand with the absolute patience of things that have been promised. One of them turns its head slightly toward the jail window. It has been waiting long enough to know which window to watch. You are not the one they are waiting for. But you witness the waiting, which is something.</ansi>");
            return true;
        }
    }

    return false;
}
