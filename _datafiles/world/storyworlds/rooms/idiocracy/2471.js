// Idiocracy -- The Trash Avalanche (2471)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The garbage smell fades as the projection light flattens. The Screening Room reasserts itself. You are back in the Library, and the first thing you do is take a deep breath of air that does not smell like five hundred years of human waste. The second thing you do is feel grateful for that, which is not something you expected to feel today.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the trash avalanche, stepping sideways out of 2505.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("idiocracy_quest_step");
    if (step == "1") {
        user.SetMiscCharacterData("idiocracy_quest_step", "2");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You survived the trash avalanche.)</ansi>");
    }
    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 12);
    if (roll == 1) {
        room.SendText("<ansi fg=\"8\">A section of the trash wall shifts, leans, holds. For a moment you thought you were going to be buried in 2505 garbage. That would have been the way to go.</ansi>");
        return true;
    }

    return false;
}
