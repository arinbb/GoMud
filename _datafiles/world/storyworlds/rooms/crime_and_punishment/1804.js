
// The Tavern - Quest step 3 (hear Marmeladovs confession)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sawdust and vodka smell recedes. The tavern dissolves into sentences and paragraphs. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the dim tavern light, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_tavern")) {
        user.SetMiscCharacterData("cnp_q_tavern", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: You have heard Marmeladov's confession in the tavern.)</ansi>");
    }
    return true;
}
