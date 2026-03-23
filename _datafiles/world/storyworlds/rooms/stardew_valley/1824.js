
// The Stardrop Saloon - quest step 4
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_saloon")) {
        user.SetMiscCharacterData("stardew_q_saloon", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The door swings open into warmth and amber light. Gus sees you and raises a hand in greeting. Half the town is here. This is where the valley comes to rest at the end of the day -- to put things down for a while.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The jukebox fades mid-song. The warmth of the saloon gives way to the quieter warmth of the Library. Gus waves once from behind the bar before the image dissolves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finishes their drink, sets down the glass, and is quietly gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
