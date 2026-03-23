
// World 3-1 Night Level - Standard return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The dark blue sky and square white stars dissolve. The last hammer fades in mid-arc. You are back in the Arcade, the night-level palette fading from behind your eyes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates against the night sky and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dodge" && rest.indexOf("hammer") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You dodge beneath a spinning hammer by inches. It clatters against the stone behind you. The Hammer Bro on the platform above bounces twice and throws another one immediately. There is always another one immediately.</ansi>");
        return true;
    }

    return false;
}
