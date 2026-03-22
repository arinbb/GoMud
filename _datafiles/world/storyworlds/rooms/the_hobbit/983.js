
// Lake-town - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wooden platforms of Lake-town fade beneath your feet. The sound of the market dies away. The Lonely Mountain shrinks to a drawing on a page, and you find yourself standing in the Grand Library, the smell of fish and lake water already fading.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps off the edge of the platform and vanishes into the mist, carried back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
