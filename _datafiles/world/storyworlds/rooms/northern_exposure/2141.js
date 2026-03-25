// Northern Exposure - The Brick
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The warmth of The Brick fades. The moose head watches you go with its eternal glass dignity. The smell of coffee and woodsmoke dissolves into the dry scent of the Screening Room, and you are back among the film reels.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the barstool like a memory of someone who was definitely here once.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 1: visit The Brick
    if (user.HasQuest(340) && !user.GetTempData("ne_brick")) {
        user.SetTempData("ne_brick", "visited");
        user.Command("questadvance 340");
    }

    return true;
}
