// Far Cry 5 - John's Gate
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The YES arch blurs overhead. John Seed's voice on the recording dissolves mid-sentence. The chalkboard confessions scatter like chalk dust. The Grand Library resolves around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves beneath the YES arch, carried off on a loop of John Seed's recorded voice.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "confess" || (cmd == "use" && rest.indexOf("booth") >= 0) || cmd == "kneel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You step into the confession booth. The kneeling pad is worn. The chalkboard waits. The camera in the upper corner blinks red. John Seed's voice from the recording: 'What is your sin? Speak it. Name it. Give it to me and it cannot own you anymore.' The logic is airtight and wrong. You step back out. You leave the chalk where it is.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("chalkboard") >= 0 || rest.indexOf("chalk") >= 0 || rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The chalkboards are palimpsests — confessions written over confessions, the oldest ones pressed into the wood by the weight of the newer ones. You can make out fragments. 'I was angry.' 'I stole from my neighbor.' 'I hit my—' The rest is covered. 'I was afraid.' 'I doubted.' You step back. The aggregate weight of what these boards hold is not nothing.</ansi>");
        return true;
    }

    return false;
}
