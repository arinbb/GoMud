// The Hallway - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The poster's eyes follow you as the hallway thins and fades. The smell of cabbage dissolves into old paper. You are back in the Grand Library. You find yourself keeping your face blank anyway, just in case.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers under Big Brother's gaze and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
