
// Souvenir: Garth's Glasses
// Reward item for completing the Wayne's World quest

function onCommand_wear(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put on Garth's glasses. The world looks the same. But also different. More excellent, somehow. You feel the specific frequency of Aurora, Illinois vibrating in your ears.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts on a pair of large round glasses. They adjust them once with one finger, exactly as Garth would.", user.UserId());
    return false;
}

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look through Garth's glasses. The world appears through perfectly scratched, perfectly smudged lenses. You see what Garth sees: drum fills in every rhythm, frequencies in every hum, the possibility of an excellent invention in every spare component.</ansi>");
    return true;
}

function onCommand_examine(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The scratch on the lower-left lens is from an oscilloscope incident. The bent earpiece is from ten thousand adjustments. These glasses have been part of a great many excellent things.</ansi>");
    return true;
}
