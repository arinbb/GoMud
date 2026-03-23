// Souvenir: Flux Capacitor Keychain
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold up the keychain. The three tubes pulse in sequence: one, two, three. One, two, three. The hub glows warm in your hand.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious shit.\"</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a small Y-shaped keychain that pulses with a faint white glow.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    return onCommand_use(user, item, room);
}
