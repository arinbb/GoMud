
// The Shining - Boiler Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The boiler screams as reality ruptures. Steam and darkness swirl together, condensing into frames of film that unspool backward through the Overlook's history until they reach the quiet, steady light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed in a blast of steam and vanishes from the basement of the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.indexOf("scrapbook") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You turn the pages of the scrapbook. Each clipping tells a darker story than the last. The hotel has been collecting tragedies for decades — murders, disappearances, a caretaker who went mad and killed his family. The Overlook is not haunted. The Overlook is hungry.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads the scrapbook, their face growing pale.", user.UserId());
        return true;
    }

    return false;
}
