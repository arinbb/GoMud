
// The Model Town - close-up of Adam's miniature Winter River
// Easter egg: "nice model" is the famous line from the film
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The model town rushes toward you -- buildings growing, streets widening -- until you realize it's you who is shrinking. Then a blink, and you're back in the Library, full-sized and slightly dizzy.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " seems to shrink into the model town and vanishes from sight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // EASTER EGG: "nice model" - the famous line from the film
    if (cmd == "say" && rest.toLowerCase().indexOf("nice model") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">The moment the words leave your mouth, the model town REACTS. Every tiny light in every tiny window flares to life. The miniature covered bridge creaks. The little weather vane on the church spins. A sound rises from the model -- is that... applause? Tiny, distant applause?</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">From somewhere deep in the model, a tinny voice echoes back: \"Thanks.\"</ansi>");
        SendUserMessage(user.UserId(), "");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says 'nice model' and the entire miniature town lights up, as if it heard the compliment.", user.UserId());

        // Reward with XP for finding the easter egg
        user.GrantXP(500, "nice model easter egg");
        return false; // let the say still process
    }

    // Looking closely at specific parts of the model
    if (cmd == "look" && rest.indexOf("figure") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lean in close to study the tiny figures. As you watch, the woman hanging laundry slowly turns her painted head to face you. Her mouth opens -- impossibly -- and you hear a whisper no louder than a pin dropping: \"Help us.\" Then she's frozen again, a painted figure on a painted street. Your hands are shaking.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leans very close to the model and goes pale.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.indexOf("bridge") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You peer at the tiny covered bridge. A model car the size of your thumbnail sits on the bridge. As you watch, it inches forward, swerves, and plunges off the side into the tiny river below. A moment later it's back on the bridge, ready to crash again. Over and over. An eternal loop.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("cemeter") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The model cemetery has headstones the size of rice grains, each one legible under a magnifying glass. Most are ordinary names and dates. But one, larger than the rest, reads: BETELGEUSE. The ground around it is disturbed, as if something clawed its way out.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("house") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The miniature Maitland house sits on its tiny hill, every detail perfect. Through the windows -- are those figures moving inside? You squint. A tiny woman in a cardigan adjusts tiny curtains. A tiny man in flannel bends over an even tinier model of the model town. Models within models. How deep does it go?</ansi>");
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
