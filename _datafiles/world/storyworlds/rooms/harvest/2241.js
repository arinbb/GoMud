
// The Barn Studio - Harvest
// ZONE COMMANDS: return (library), listen (cycles songs), ask danny (key moment)
var LIBRARY_ROOM = 1;

var SONGS = [
    "Heart of Gold. Neil sits on the stool under the spotlight, harmonica in his rack, and plays. The pedal steel comes in behind him, bending and shimmering, and the whole barn fills with that sound — warm, searching, lonesome. A miner for a heart of gold. The simplest song in the world and somehow the truest.",
    "Old Man. The acoustic guitar starts alone, fingerpicked, and then the banjo comes in like sunlight through a window. Neil sings about the old man down the road, about how twenty-four and so much more is really just the same as growing old. The Stray Gators lean into it and the song opens up like a landscape.",
    "Harvest. The title track. Slower, gentler, the pedal steel carrying most of the weight while Neil's voice floats above it. Dream up, dream up, let me fill your cup. The barn feels warmer. The lanterns sway. This is the center of the album, the still point, the gathering.",
    "The Needle and the Damage Done. Neil alone on the stool, just his voice and the guitar, no band. The barn goes quiet. Everyone stops. It is a song about watching someone you love destroy themselves and being unable to stop it. Danny Whitten does not look up from his corner. The silence after the last chord is the loudest sound you have ever heard."
];

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The music fades, the lanterns dim, and the barn dissolves around you like a song ending. The hay dust and warm light thin to nothing and you are back in the Grand Library, your ears still ringing with pedal steel.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks out of the barn and fades into the California evening, returning to the Library.", user.UserId());
        user.SetTempData("visited_harvest", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        var indexStr = user.GetTempData("harvest_song_index");
        var index = 0;
        if (indexStr != "") {
            index = parseInt(indexStr, 10);
            if (isNaN(index)) {
                index = 0;
            }
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on a hay bale and listen. The Stray Gators count off and begin to play.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + SONGS[index] + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down on a hay bale and listens to the band play.", user.UserId());

        var nextIndex = (index + 1) % SONGS.length;
        user.SetTempData("harvest_song_index", String(nextIndex));

        // Track that they listened for quest progress
        user.SetTempData("harvest_listened", "true");

        if (user.GetMiscCharacterData("easter_harvest_listen") != "found") {
            user.SetMiscCharacterData("easter_harvest_listen", "found");
            user.GrantXP(100, "listening to the Harvest sessions");
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">You earned 100 XP for listening to the sessions.</ansi>");
        }

        return true;
    }

    if (cmd == "ask") {
        var target = rest.toLowerCase();
        if (target.indexOf("danny") >= 0) {
            var dannyTalked = user.GetTempData("danny_talked");
            if (dannyTalked == "true") {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">Danny looks up at you again. His eyes are the same — present but fading, like a radio station you are slowly driving out of range of. He has already said what he is going to say. The silence in the barn says the rest.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " speaks to Danny, who looks up briefly before looking away.", user.UserId());
            } else {
                user.SetTempData("danny_talked", "true");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You approach Danny Whitten in the corner. He looks up from his guitar, and his eyes are clear for a moment — really clear, really there.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"I wrote a song once,\" he says quietly. \"Come On Baby Let's Go Downtown. That was mine. That was really mine.\"</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">He looks down at his hands on the guitar strings. \"I'm trying, man. I'm really trying.\"</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Stray Gators on stage have stopped playing. The barn is silent except for the creak of the lantern chains. Everyone knows. Nobody says it. This is the sadness underneath the album — underneath the warmth and the golden light and Heart of Gold. Danny Whitten died shortly after these sessions. He was twenty-nine years old.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " talks to Danny Whitten. The band stops playing. The barn goes quiet.", user.UserId());
            }
            return true;
        }
    }

    return false;
}
