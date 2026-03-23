
// Harold and Maude - The Junkyard
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The junkyard dissolves in warm amber light. The rusted iron and the clay pot and the small sapling blur upward into the amber warmth of the library, and you are back among the shelves with soil on your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the junkyard into the amber afternoon light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "plant" || (cmd == "plant" && rest.indexOf("tree") >= 0) || (cmd == "dig" && rest.indexOf("hole") >= 0)) {
        if (user.GetMiscCharacterData("ham_junkyard_easter") != "found") {
            user.SetMiscCharacterData("ham_junkyard_easter", "found");
            user.GrantXP(250, "Harold and Maude: planting a tree");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You dig a hole in the cleared patch with your hands and set the small sapling into it. The roots go in. You press the dark soil around the base, tamping it firm. The little tree stands upright, its pale leaves turning in the wind. You have put a living thing in the ground to grow enormous. This is what Maude means when she talks about optimism. This is what she means when she talks about everything. (+250 XP)</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plants the small sapling in the cleared patch of earth. The tree stands upright in the afternoon sun.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The sapling is already planted. You press the soil around its base again, for good measure. The tree stands straight in the afternoon light.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 4: visit the junkyard
    if (user.HasQuest(290) && !user.GetTempData("ham_junkyard")) {
        user.SetTempData("ham_junkyard", "visited");
        user.Command("questadvance 290");
    }

    return false;
}
