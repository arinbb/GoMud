// Tass Times in Tonetown -- The Tonetown Times (2453)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The printing press clatters its last edition. The newsroom blurs and fades and you are back in the Arcade with the smell of ink still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the newsroom between one edition and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest.toLowerCase().indexOf("paper") >= 0 || rest.toLowerCase().indexOf("copy") >= 0 || rest.toLowerCase().indexOf("times") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The current edition's front page: SNOTTY EXPANDS UNTASS ZONE SOUTH OF AVENUE. The copy reads: 'Citizens report loss of tass in the southern residential district as Snotty's chemical operation reaches new range. The Editor of this paper calls for immediate resistance. Wearing grey is not neutrality. Wearing grey is choosing a side.' The byline is the Editor's. They are also apparently the writer, the photographer, and the copy editor. Deadlines wait for no one.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("pinboard") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The pinboard's central connection is clearer up close: photographs, maps, witness statements, all tied to DONN SNOTTY at the center. The original name FRANKLIN SNARL is written in smaller letters below it, circled. Connecting lines go to the untass ray, the swamp, the mansion, and -- circled in red -- to GRAMPS. The connection reads: PARTNERS UNTIL 1982. SNARL WANTED CONTROL. GRAMPS REFUSED.</ansi>");
        return true;
    }

    return false;
}
