
// Harold and Maude - The Open Grave
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step back from the edge. The grave blurs, the piled earth and oak tree and California sky dissolving into the warm amber light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the edge of the grave and fades into golden light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "jump" || (cmd == "look" && rest.indexOf("down") >= 0) || cmd == "descend") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look down into the open grave. The earth is cool and dark. Your shadow falls into it ahead of you. Harold, beside you, looks down with you and says nothing for a long moment. Then: 'Most people can't look at this. They look away. You looked.' He seems pleased.</ansi>");
        return true;
    }

    return false;
}
