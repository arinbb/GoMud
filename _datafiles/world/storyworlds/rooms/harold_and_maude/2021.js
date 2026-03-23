
// Harold and Maude - The Cemetery
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The oak trees sway once in a warm gust. The headstones blur and soften. The green grass and golden light dissolve upward like smoke, and the warm shelves of the Grand Library close around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades between the headstones like morning mist and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 1: visit the cemetery
    if (user.HasQuest(290) && !user.GetTempData("ham_cemetery")) {
        user.SetTempData("ham_cemetery", "visited");
        user.Command("questadvance 290");
    }

    return false;
}
