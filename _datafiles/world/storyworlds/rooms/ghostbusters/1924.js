var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("quest_240_step");
    if (step == "2") {
        user.SetMiscCharacterData("quest_240_step", "3");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You feel the story shifting around you. This is where it started -- the first ghost, the first call. The library holds its breath.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The library silence breaks like glass. Film grain fills the air and you are back in the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes without disturbing a single card catalog.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
