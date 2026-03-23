
// Pelican Town Square - quest step 2
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_townvisit")) {
        user.SetMiscCharacterData("stardew_q_townvisit", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You step into the town square and feel eyes on you -- not unfriendly, just curious. You are the newcomer. They know it. You know it. There is a particular warmth to being known in this way, if you stay long enough.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The town square blurs softly at its edges, the fountain sound fading. You return to the Grand Library, the memory of Pelican Town warm behind your eyes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the afternoon light and dissolves gently, returning to wherever they came from.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
