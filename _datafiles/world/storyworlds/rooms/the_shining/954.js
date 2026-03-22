
// The Shining - The Red Bathroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The red walls pulse once, twice, and then the color bleeds away like watercolor in rain, leaving only the flickering frames of film. The mirrors shatter silently into the warm light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the crimson light and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
