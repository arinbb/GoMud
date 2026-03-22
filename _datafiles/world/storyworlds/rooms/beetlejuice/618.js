
// The Graveyard - Betelgeuse's headstone and summoning hints
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fog thickens around you until the headstones, the trees, the gate -- all of it disappears into white mist. When it clears, you're standing in the Library, the smell of moss and old stone still clinging to your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by cemetery fog and vanishes among the headstones.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Looking at / reading Betelgeuse's headstone
    if (cmd == "look" && (rest.indexOf("betelgeuse") >= 0 || rest.indexOf("beetlejuice") >= 0 || rest.indexOf("stone") >= 0 || rest.indexOf("headstone") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You kneel before the dark granite headstone. The name BETELGEUSE is carved deep -- too deep, as if the letters go all the way through the stone and into whatever lies beneath. As you trace the letters with your finger, the stone is warm. Not sun-warm. Fever-warm.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">The flies around the stone buzz louder. The dead grass crackles. And from somewhere -- below the stone, below the ground, below everything -- you hear a voice like gravel in a garbage disposal:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"You know my name. Say it. I DARE you. Say it three times.\"</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">The voice fades. The flies settle. The stone is cold again. But you noticed something: the name on the stone. If you said it three times in the right place... what would happen?</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels before the Betelgeuse headstone and goes very quiet, listening to something only they can hear.", user.UserId());
        return true;
    }

    // Saying his name here (not the summoning room, but a tease)
    if (cmd == "say") {
        var words = rest.toLowerCase();
        if (words.indexOf("beetlejuice") >= 0 || words.indexOf("betelgeuse") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">The headstone vibrates. The flies swarm. The fog glows green. From beneath the earth, that gravelly voice rises: \"Yeah yeah, I hear ya! But this ain't the right room, genius. Go inside the house. Living room. Say it three times. THEN we'll talk business.\" The stone goes silent. A single fly lands on your nose, buzzes once, and flies away.</ansi>");
            SendRoomMessage(room.RoomId(), "The Betelgeuse headstone vibrates as " + user.GetCharacterName(true) + " speaks THAT name. The cemetery fog turns green.", user.UserId());
            return false;
        }
    }

    // Dig at the grave
    if (cmd == "dig" && (rest.indexOf("grave") >= 0 || rest.indexOf("betelgeuse") >= 0 || rest.indexOf("ground") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You start to dig at the base of the Betelgeuse headstone. Your fingers barely break the soil before the ground pushes back. Literally. Your hands are shoved out of the dirt by an invisible force, and the hole fills itself in. A muffled voice from below says: \"Hey! HEY! I got a system here! Three times, living room, whole nine yards. We don't do walk-ins. This ain't a CEMETERY. Well, it IS a cemetery, but -- look, just go to the living room.\"</ansi>");
        return true;
    }

    return false;
}
