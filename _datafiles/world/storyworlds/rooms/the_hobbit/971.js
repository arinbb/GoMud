
// The Shire Road - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Shire road fades beneath your feet. The green hills dissolve into swirling text, and the smell of grass gives way to the smell of old books. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like a mirage on the road and vanishes into a swirl of turning pages.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
