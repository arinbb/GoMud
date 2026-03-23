// The Canteen - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The canteen smell fades. The telescreen voice fades. The grey trays and grey faces dissolve into the pages of the novel and the novel into the shelves of the Grand Library. You are back. You breathe air that smells of old books instead of saccharin and stew. It is an improvement.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the canteen background noise and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
