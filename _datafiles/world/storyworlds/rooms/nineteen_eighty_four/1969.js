// The Room Above the Shop - paperweight easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The warm room dissolves. Julia's voice goes first, then the chocolate smell, then the window light, then the print on the wall. The telescreen that was not there was not there right up until the end. You are back in the Grand Library. You know what comes next in the novel, for this room. You are glad you do not have to be here for it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the room above the shop. The brass bed is empty. The room is quiet.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("paperweight") >= 0) {
        var key = "1984_paperweight_easter";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "the coral inside the glass");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The paperweight sits on the shelf, a dome of clear glass with the piece of pink coral at its center. You look into it. The coral is soft and rose-pink, fixed in its glass world, perfectly preserved. Winston thought: the paperweight is the room, and the room is the world, and he and Julia are the coral, fixed at its center, safe inside the glass. He knew even as he thought it that it was not true. The coral will not protect the room. The room will not protect them. But the paperweight is beautiful, and beauty is not nothing, even at the end of everything.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">(+150 XP: The coral meditation)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The pink coral sits at the center of the glass dome, luminous and still. You look into it for a while. It is still beautiful.</ansi>");
        }
        return true;
    }

    return false;
}
