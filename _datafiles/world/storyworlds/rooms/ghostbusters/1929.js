var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("quest_240_step");
    if (step == "4") {
        user.SetMiscCharacterData("quest_240_step", "5");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The story pulls tighter. The apartment is exactly as wrong as it should be. The refrigerator glows. Dana is home, if you can call it that anymore.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves in orange refrigerator light. The last thing you hear is Dana's voice saying something that is not Dana's voice. Film grain. The Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the apartment. The eggs keep cooking.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
