
// Matilda - Miss Honey's Cottage
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candle stub flickers and its light swells to fill the bare cottage. The wildflowers in their jam jar glow like tiny suns, and their light carries you gently back to the Grand Library. The poverty and dignity of the cottage stays with you like a quiet ache.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is lifted by the candlelight and carried away like a wish, leaving the cottage still and bare.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(100)) {
        user.GiveQuest(100);
    }
    return true;
}
