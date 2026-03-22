
// Beetlejuice's Lair - carnival chaos underground
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon signs spell out L-I-B-R-A-R-Y in buzzing green letters. The carousel spins faster, the calliope screams, and the centrifugal force flings you out of the lair and into the quiet calm of the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is flung from the spinning carousel and disappears through the ceiling in a burst of neon light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Ride the carousel
    if (cmd == "ride" && rest.indexOf("carousel") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You climb onto one of the carousel horses. It's cold and slightly sticky. The moment you mount it, the carousel LURCHES to full speed. The calliope screams. The horse's head turns to look at you with painted eyes that blink. The other horses lean toward you from their poles. The room blurs into a smear of neon and shadow. When it finally slows, you tumble off, dizzy and nauseous. The horse is grinning wider than before.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " rides the carousel and immediately regrets it, tumbling off in a dizzy heap.", user.UserId());
        return true;
    }

    // Open/look in coffin
    if (cmd == "look" && rest.indexOf("coffin") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You peer into the open coffin. The satin lining is stained in a pattern that might be a map, or might be centuries of hair grease. Among the beetle shells and playing cards, you notice a business card wedged into the satin: \"Betelgeuse - Bio-Exorcist. Say it, Don't Spray it.\" The mirror on the lid shows the room behind you -- but in the reflection, all the neon signs are off and the carousel is still. And there's a figure standing right behind you that isn't there when you turn around.</ansi>");
        return true;
    }

    // Search the junk pile
    if (cmd == "search" && rest.indexOf("junk") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You rummage through the junk pile. Your hands find: a rubber chicken that screams when squeezed, a snow globe containing a tiny model of this very room (including a tiny you searching through a tiny junk pile), three loaded dice, a voodoo doll with no pins (yet), and a faded Polaroid of a man in a striped suit arm-in-arm with a sandworm. Written on the back: \"Best friends forever. - BJ.\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " digs through the junk pile, disturbing several layers of questionable artifacts.", user.UserId());
        return true;
    }

    // Say beetlejuice here (special reaction in his lair)
    if (cmd == "say") {
        var words = rest.toLowerCase();
        if (words.indexOf("beetlejuice") >= 0 || words.indexOf("betelgeuse") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">Every neon sign in the lair blazes to maximum brightness. The flies swarm into a vortex. The carousel plays a fanfare. A voice echoes from everywhere and nowhere: \"You rang? Oh wait -- you're already IN my house. That's like calling someone who's standing right behind you.\" A pause. \"Which I am, by the way.\"</ansi>");
            SendRoomMessage(room.RoomId(), "All the neon signs in the lair flare as " + user.GetCharacterName(true) + " speaks THAT name. The flies go absolutely wild.", user.UserId());
            return false;
        }
    }

    return false;
}
