
// Seinfeld - Yankee Stadium
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Yankee offices dissolve. The desk, the nameplate, the view of the field -- all of it fades into celluloid. The Grand Library waits.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the Yankee offices, their work here unclear and probably incomplete.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" && (rest.indexOf("desk") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit at Georges desk. The nameplate says G. Costanza. The drawer has a bag of chips. The papers on the desk require attention. You eat the chips and look at the field through the window and think: this is actually a pretty good job. George has ruined this for himself three times already.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("field") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The field through the window is extraordinary. Diamond cut grass, white lines, the geometry of a game that has been played for over a hundred years. George Costanza looks at this every day. It has not made him a better person. It has made him a luckier one, temporarily.</ansi>");
        return true;
    }

    return false;
}
