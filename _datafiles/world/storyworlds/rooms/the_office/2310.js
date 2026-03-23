// The Office - The Stairwell
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You push back through the stairwell door into the break room and trace your way back to the lobby. The fluorescent light continues its three-second cycle behind you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pushes through the stairwell door and is gone. The light flickers on without them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("heart") >= 0 || rest.indexOf("jim") >= 0 || rest.indexOf("pam") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">JIM + PAM. In a Sharpie heart on the landing wall. You trace the letters with your finger without touching them. Whoever wrote this -- and it was not Jim, and it was not Pam -- was right. They just wrote it before the people it was about had figured that out themselves.</ansi>");
        return true;
    }

    return false;
}
