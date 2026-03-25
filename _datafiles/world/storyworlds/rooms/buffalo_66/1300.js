
// Buffalo '66 - Prison Parking Lot (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey Buffalo sky tears like celluloid, the parking lot dissolving into frames of film — a man alone, a brown car, a frozen city. The frames stutter and melt into warm library light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into flickering grey film frames and vanishes from Buffalo.", user.UserId());
        user.SetTempData("visited_buffalo_66", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_buffalo_66";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(90)) {
        user.GiveQuest(90);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The film reel spins and the screen fills with washed-out grey. You feel cold air on your face before you see anything — then the image sharpens and you are standing in a prison parking lot in Buffalo, New York. It is winter. It is always winter here. The sky is the color of concrete and the wind comes off Lake Erie like it has a grudge. You are alone. No one is coming to pick you up.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}
