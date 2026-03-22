
// The Shining - Twins Corridor
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The twins watch as the corridor folds in on itself like a closing book. The strobing lights become the flicker of a film projector running in reverse, and the Grand Library assembles itself around you from the dissolving frames.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is folded into the strobing light and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || (cmd == "say" && rest.indexOf("play") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You hear yourself say the word. The twins smile in perfect unison. It is the most terrible smile you have ever seen. They release each other's hands and reach toward you. The lights strobe. When they steady, the twins are standing where they were, holding hands, smiling, as if nothing happened. But they are closer now.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " speaks to the twins. They smile.", user.UserId());
        return true;
    }

    return false;
}
