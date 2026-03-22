
// Deep Mirkwood - return handler + drink stream interaction
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The watchful eyes in the undergrowth blink out one by one. The enchanted forest folds itself into darkness, then into the darkness of closed pages. You wake in the Grand Library as if from a long, uneasy dream.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " falls into the enchanted shadows and vanishes, carried back to the Library by the turning of pages.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" && rest.indexOf("stream") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You lean down toward the dark water. The moment your lips touch the surface, a wave of drowsiness crashes over you. Your eyes grow impossibly heavy. You dream of a great feast in the Elvenking's halls -- roasted meats, golden wine, silver laughter. Then you jerk awake, gasping, on the bank of the stream. The dream fades but the longing remains. Do NOT drink from enchanted streams.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drinks from the enchanted stream and collapses into a deep sleep, dreaming of feasts, before jerking awake moments later.", user.UserId());
        return true;
    }

    return false;
}
