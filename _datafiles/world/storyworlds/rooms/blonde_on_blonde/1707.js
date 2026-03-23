
// Leopard-Skin Pill-Box Hat - Track 7
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The leopard print recedes to a dot as you dissolve. The doctor does not look up. The hat remains. You are back in the Grand Library, slightly overdressed by comparison.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " retreats from the fashion spectacle, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wear" || cmd == "take" || cmd == "get") {
        if (rest.indexOf("hat") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach for the hat. The doctor looks up from his stethoscope for the first time and shakes his head once -- firmly, medically, without malice. The hat is not yours to wear. The hat is an object of contemplation and jealousy, not ownership. You withdraw your hand. The three-chord riff plays itself approvingly.</ansi>");
            return true;
        }
    }

    return false;
}
