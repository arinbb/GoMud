
// Very Ape - Track 7
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cave collapses -- not violently, but like an exhale. The walls fold in, the bones crumble to dust, the drawings smear into abstract shadow. The riff plays its last bar and cuts dead. Silence hits you like a wall. Then the Grand Library, bright and civilized, and you miss the cave already.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " beats the cave wall once and vanishes in a cloud of stone dust.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "scream" || cmd == "yell" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You open your mouth and scream. In the cave's tight acoustics, the scream doubles and folds back on itself -- a feedback loop of pure human noise. The cave approves. A stick figure on the wall seems to pump its fist. The riff in the floor shifts into a higher gear. You are briefly more honest than you have been all day.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " screams in the cave. The cave screams back. Everyone is improved.", user.UserId());
        return true;
    }

    if (cmd == "headbang" || cmd == "bang" || cmd == "thrash") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You headbang in time with the subsonic riff. The cave matches your rhythm. Bones on the floor rattle. The drawings on the walls animate briefly. The figure in the corner beats its chest twice in salute. For two minutes, nothing is complicated. You are vertebrate. You are rhythm. You are joyfully, stupidly alive.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " headbangs. The cave headbangs back.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand still and listen. Below the crunch of the riff, there is something almost tender -- a second guitar, buried in the mix, playing something melodic and lost. The song is two minutes and eleven seconds of animal clarity. It does not explain itself. It does not need to.</ansi>");
        return true;
    }

    return false;
}
