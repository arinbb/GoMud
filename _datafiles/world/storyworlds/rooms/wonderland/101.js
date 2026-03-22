
// Mushroom Forest - return handler + atmospheric interactions
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The mushroom spores swirl around you, each one carrying a letter. The letters form words, the words form pages, and the pages fold themselves into a book that closes with a gentle snap. You are back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed by swirling spores and vanishes in a cloud of glittering letters.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && rest.indexOf("mushroom") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You nibble a piece of mushroom. For a dizzying moment, the world rushes away from you as you grow three feet taller. Then it settles. The effect fades. The Caterpillar watches with mild interest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nibbles a piece of mushroom and suddenly shoots upward, growing impossibly tall for a moment before shrinking back to normal.", user.UserId());
        return true;
    }

    return false;
}
