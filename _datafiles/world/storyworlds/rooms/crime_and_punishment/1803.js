
// Haymarket Square - Quest step 2
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The noise of the Haymarket dims. The vendors and beggars become words on a page. The smell of fish and dust fades to old paper. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the crowd of the Haymarket, dissolving into prose, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_haymarket")) {
        user.SetMiscCharacterData("cnp_q_haymarket", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Haymarket Square visited.)</ansi>");
    }
    return true;
}
