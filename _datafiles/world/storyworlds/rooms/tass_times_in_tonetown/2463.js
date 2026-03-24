// Tass Times in Tonetown -- Tonetown Jail (2463)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The jail's grey walls fade. The Jailer's binder closes. You are back in the Arcade, where nobody is assessing your tass level and the lighting is not calibrated to discourage comfort.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " departs the jail, tass level unresolved in the official record.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("photo") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You turn the face-down photograph on the Jailer's desk upright for a moment before anyone notices. It shows the Jailer in a full electric blue jumpsuit, asymmetric cut, at the Jam Session maybe six years ago. Their expression is the most alive you have ever seen on their face -- eyes bright, moving in the crowd, clearly belonging. The Jailer reaches over and turns it face-down again without comment. But they saw you see it.</ansi>");
        return true;
    }

    if (cmd == "confess" || (cmd == "say" && rest.toLowerCase().indexOf("tass") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The Jailer looks up from the binder. You tell them: you went to the Jam Session. You dressed at the Tass Market. You saw the untass ray. You know what Snotty is doing to this city. The Jailer listens with the stillness of someone who has been waiting for someone to say these things out loud in their building. When you finish, they close the regulation binder. They put it in a drawer. 'The requirements in that binder,' they say, 'were not voted on by the council.' They stand up. They are slightly taller than you thought. 'The south exit is open.'</ansi>");
        return true;
    }

    return false;
}
