
// Seinfeld - Jerrys Bedroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bedroom folds neatly into itself. The legal pad, the made bed, the careful order -- all of it returns to celluloid. The Grand Library settles around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the bedroom like an observation that didn't quite work.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("notes") >= 0) || (cmd == "look" && rest.indexOf("pad") >= 0)) {
        var bits = [
            "What is the deal with the word 'moist'? Nobody likes to say it. Nobody likes to hear it. The word itself is already apologizing.",
            "Why do we say we 'slept like a baby'? Babies wake up every two hours screaming. That's not a good night.",
            "The pre-emptive apology. Someone says 'I'm sorry, but --' and now you're braced for something that the apology was supposed to soften and it does not soften it.",
            "Nobody knows what 'the poncho' means as a fashion decision. The poncho says: I have given up on the concept of sleeves but not on warmth.",
            "At what point in human history did we decide that a small umbrella was a hat? And why was that okay?"
        ];
        var pick = Math.floor(Math.random() * bits.length);
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You read a note from the legal pad: '</ansi><ansi fg=\"yellow\">" + bits[pick] + "</ansi><ansi fg=\"cyan\">'</ansi>");
        return true;
    }

    return false;
}
