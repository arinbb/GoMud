
// The Andy Griffith Show - The Schoolyard
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The schoolyard -- the oak tree, the swing set, the sandbox -- fades into the Grand Library around you. You feel briefly and genuinely like a child, which is the best Opie can do for you and it turns out to be quite a lot.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gives the rope swing one last pull and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "swing" || (cmd == "sit" && rest.indexOf("swing") >= 0) || (cmd == "use" && rest.indexOf("swing") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit in the swing and push off. The chains creak and the arc carries you forward and back, forward and back, the oak tree and the school building and the blue sky cycling past. You pump your legs and go higher. The wind is in your face. Opie does this every afternoon. You understand completely.</ansi>");
        return true;
    }

    if (cmd == "climb" && rest.indexOf("tree") >= 0 || cmd == "climb" && rest.indexOf("rope") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You grab the rope and pull yourself up. The oak bark is rough under your hands where you reach for the branch. You get up into the first fork and look out over the schoolyard -- the swing set, the sandbox, Main Street visible through the trees, the whole of Mayberry arranged in the afternoon light below you. This is Opies view. It is a good view.</ansi>");
        return true;
    }

    if (cmd == "play" || cmd == "sandbox" || (cmd == "dig" && rest.indexOf("sand") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit at the edge of the sandbox and start building something in the sand -- a road, a town, something with walls. The sand is good sand, worked fine by years of use. You work at it for a while and something takes shape and then you look up and the afternoon is further along than you thought. This is what sandboxes do.</ansi>");
        return true;
    }

    return false;
}
