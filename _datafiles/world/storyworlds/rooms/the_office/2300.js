// The Office - Dunder Mifflin Lobby (entry room)
// ZONE COMMANDS: return (any room), say that's what she said (2306), make chili (2305),
//   spill chili (2305), kiss (2311), propose (2311), look dwight (2303), put stapler in jello (2303),
//   parkour (2308)
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    var visitedKey = "visited_the_office";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        }
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the reel. The NBC chime plays -- four notes, cheerful, slightly hollow. Then: fluorescent lights, carpet that was never quite white, the smell of toner and someone's reheated lunch. The mockumentary camera finds you from the corner. You realize you are being filmed. You realize you have always been being filmed. The lobby of Dunder Mifflin Paper Company, Scranton, Pennsylvania materializes around you with all the quiet, extraordinary ordinariness of the best nine seasons of television ever made in a paper company parking lot.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look directly at the camera one last time. The fluorescent lights fade. The beige dissolves into the warm wood and leather of the Grand Library, which smells like books instead of toner, which is also good.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " glances at the camera, then steps back through the lobby doors and is gone.", user.UserId());
        user.SetTempData("visited_the_office", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
