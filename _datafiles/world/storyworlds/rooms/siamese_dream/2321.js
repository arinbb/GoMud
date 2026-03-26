// ZONE COMMANDS:
//   listen (2321) - progressive layering mechanic, 4 listens to complete
//   say today (2321) - triggers Billy's vulnerable moment if note was read
//   return - goes back to Grand Library

var LIBRARY_ROOM = 1;
var LAYERS_KEY = "siamese_layers_heard";

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar layers peel away one by one until there is nothing left but tape hiss, and the hiss fades to silence, and you are back in the Grand Library with the smell of warm electronics still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of purple guitar distortion, fading back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        var layers = parseInt(user.GetTempData(LAYERS_KEY)) || 0;
        layers = layers + 1;
        user.SetTempData(LAYERS_KEY, String(layers));

        if (layers == 1) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You close your eyes and listen. A single clean guitar note rings out from the center of the amp circle -- pure, unadorned, almost fragile. Billy plays it once and lets it sustain.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " closes their eyes, listening.", user.UserId());
        } else if (layers == 2) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">A second guitar enters, harmonizing with the first. The two notes weave together, finding each other, creating a third frequency that exists only in the space between them. Billy nods, barely perceptible.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens as another layer enters the sound.", user.UserId());
        } else if (layers == 3) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">Distortion swells beneath the harmonics -- the Big Muff engaging, the signal clipping into something beautiful and wrong. The Marshalls push the sound outward until it fills the room like weather. You can feel it in your chest now.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens as the distortion builds.", user.UserId());
        } else if (layers == 4) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">The wall of sound builds until the room vibrates. Every Marshall feeding back into every other Marshall, dozens of guitar layers stacked so densely they become a single enormous instrument -- not guitars anymore but a weather system, a geological event, a sound so layered and massive it stops being music and becomes a place you can stand inside.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">This is how Siamese Dream was made. Not one guitar but hundreds, each one slightly different, layered by hand onto two-inch tape until the sound became something no single instrument could produce. Billy Corgan alone in this room for weeks, playing every part himself, building the cathedral one track at a time while the band fell apart around him.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens their eyes slowly, having heard the full wall of sound build from nothing.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">The layers are all there now -- you can hear the whole architecture, the way each guitar track supports the others, the way the distortion is not noise but structure. It does not diminish with repetition. It deepens.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens again, hearing deeper into the layers.", user.UserId());
        }
        return true;
    }

    if (cmd == "say") {
        var said = rest.toLowerCase();
        if (said.indexOf("today") >= 0) {
            if (user.GetTempData("read_today_note") == "true") {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">Billy stops playing. The Marshalls hum in the sudden absence. He does not look at you, but something in the way he holds the guitar changes -- the tension leaves his shoulders for just a moment.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"white\">Billy says quietly, \"I wrote that when I was not sure I wanted to be alive anymore. The greatest day. I needed it to be true so badly that I made it into a song. And then the song made it true. That is the only magic I have ever believed in.\"</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">He picks up the Stratocaster and begins playing again, but something is different now -- the notes are gentler, the distortion pulled back just slightly, and for a few bars you can hear the clean guitar underneath everything, fragile and real.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says something about Today. Billy stops playing for a moment, then resumes, more gently.", user.UserId());
                user.SetTempData("billy_today_moment", "true");
                return true;
            }
        }
    }

    return false;
}
