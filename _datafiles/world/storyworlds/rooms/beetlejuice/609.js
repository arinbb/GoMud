
// The Model Town - close-up of Adam's miniature Winter River
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The model town rushes toward you -- buildings growing, streets widening -- until you realize it's you who is shrinking. Then a blink, and you're back in the Library, full-sized and slightly dizzy.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " seems to shrink into the model town and vanishes from sight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Looking closely at figures reveals their movement
    if (cmd == "look" && rest.indexOf("figure") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lean in close to study the tiny figures. As you watch, the woman hanging laundry slowly turns her painted head to face you. Her mouth opens -- impossibly -- and you hear a whisper no louder than a pin dropping: \"Help us.\" Then she's frozen again, a painted figure on a painted street. Your hands are shaking.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leans very close to the model and goes pale.", user.UserId());
        return true;
    }

    // Touching the model
    if (cmd == "touch" && (rest.indexOf("model") >= 0 || rest.indexOf("town") >= 0 || rest.indexOf("building") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Your finger brushes one of the tiny buildings. The moment you make contact, you feel a jolt -- like static electricity but warmer. For a split second, you see the town from the inside, standing on its main street as a giant finger descends from the sky. Then you're back, your finger still hovering over the roof of the hardware store. Your fingertip is dusted with model paint.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches the model town and jerks their hand back with a gasp.", user.UserId());
        return true;
    }

    return false;
}
