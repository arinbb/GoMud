// The Prole Quarter - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The prole woman's song fades last of all, lingering in the air a moment after everything else has dissolved. Then it too is gone. You are back in the Grand Library. You can still almost hear it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the street noise and is gone, like a Party member who wandered too far.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
