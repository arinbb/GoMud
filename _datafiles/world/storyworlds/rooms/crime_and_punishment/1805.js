
// The Pawnbrokers Staircase - Quest step 4
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The staircase narrows to a line of text. The painted door dissolves. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades on the pawnbroker's staircase and is gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_staircase")) {
        user.SetMiscCharacterData("cnp_q_staircase", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: You have ascended the pawnbroker's staircase.)</ansi>");
    }
    return false;
}
