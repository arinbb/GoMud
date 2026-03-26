
// The Live Room - In Utero zone
// ZONE COMMANDS: return (go back to Library), listen (cycle through takes), search (find isolation booth)
var LIBRARY_ROOM = 1;
var QUEST_ID = 70;

var TAKES = [
    {
        song: "heart_shaped_box",
        label: "Heart-Shaped Box",
        text: "<ansi fg=\"red\">The band locks into the opening riff of Heart-Shaped Box. Kurt's voice drops low and wounded over the verse -- something about meat-eating orchids and broken hymens, the words tumbling out half-swallowed. Then the chorus detonates. Dave hits the drums like he is trying to punch through the floor. Krist's bass becomes a physical weight pressing down on your chest. The room shakes. The take is raw and enormous and hurting.</ansi>"
    },
    {
        song: "rape_me",
        label: "Rape Me",
        text: "<ansi fg=\"red\">Kurt strums the opening chords of Rape Me -- four notes, simple, almost gentle, a deliberate echo of Smells Like Teen Spirit inverted and made furious. His voice is clear and defiant on the verse, daring the listener to flinch. When the chorus hits, all three of them crash into it together, the room filling with a noise that is equal parts rage and reclamation. Albini captures every frequency. The tape does not blink.</ansi>"
    },
    {
        song: "all_apologies",
        label: "All Apologies",
        text: "<ansi fg=\"red\">All Apologies begins quietly -- just Kurt and the guitar, a simple descending line, his voice almost conversational. What else should I be? All apologies. The words are plain and devastating. Krist and Dave join softly, building underneath, and the song swells into something that feels less like a recording and more like a confession. The room goes still around it. Even the amplifier hum seems to pause.</ansi>"
    },
    {
        song: "pennyroyal_tea",
        label: "Pennyroyal Tea",
        text: "<ansi fg=\"red\">Pennyroyal Tea. The most stripped-down thing they have recorded in these two weeks. Kurt alone with the guitar at first, the melody haunted and simple, singing about anemia and Leonard Cohen and the things people swallow to feel different. When the band comes in, it is restrained -- Dave barely touching the cymbals, Krist holding a single low note. The song aches. It does not want to be louder. It wants to be heard.</ansi>"
    },
    {
        song: "scentless_apprentice",
        label: "Scentless Apprentice",
        text: "<ansi fg=\"red\">Scentless Apprentice erupts from silence like a detonation. Dave's drum pattern is savage and relentless, a tribal pounding that shakes the mic stands. Kurt screams -- not sings, screams -- into the microphone, the guitar a wall of feedback and distortion. Krist drives the bass line like a battering ram. This is the heaviest thing on the album. The take lasts three minutes and leaves the room ringing.</ansi>"
    },
    {
        song: "serve_the_servants",
        label: "Serve the Servants",
        text: "<ansi fg=\"red\">Serve the Servants opens with a grinding guitar riff and Kurt's voice, weary and sardonic. Teenage angst has paid off well, now I am bored and old. The self-awareness is surgical. The band plays tight and controlled, the song a statement of exhaustion with fame delivered through the very medium that created the fame. Albini lets the room sound breathe around it -- you can hear the space between the instruments.</ansi>"
    }
];

function onCommand(cmd, rest, user, room) {

    if (cmd === "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tape slows, the reels grind to a halt, and the red recording light finally goes dark. The studio dissolves into static -- white noise that thins and fades until you are standing in silence, back in the Grand Library, your ears still ringing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and white noise, dissolving back to the Library.", user.UserId());
        user.SetTempData("visited_in_utero", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd === "listen") {
        var heardStr = user.GetTempData("in_utero_heard_takes");
        var heard = [];
        if (heardStr && heardStr !== "") {
            heard = heardStr.split(",");
        }

        // Find a take the player has not heard yet
        var unheard = [];
        var i;
        for (i = 0; i < TAKES.length; i++) {
            var found = false;
            var j;
            for (j = 0; j < heard.length; j++) {
                if (heard[j] === TAKES[i].song) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                unheard.push(i);
            }
        }

        var takeIndex;
        if (unheard.length > 0) {
            // Pick a random unheard take
            takeIndex = unheard[Math.floor(Math.random() * unheard.length)];
        } else {
            // All heard -- pick random
            takeIndex = Math.floor(Math.random() * TAKES.length);
        }

        var take = TAKES[takeIndex];
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You close your eyes and listen. The band begins a take of " + take.label + "...</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), take.text);

        // Track this take as heard
        var alreadyHeard = false;
        for (i = 0; i < heard.length; i++) {
            if (heard[i] === take.song) {
                alreadyHeard = true;
                break;
            }
        }
        if (!alreadyHeard) {
            heard.push(take.song);
            user.SetTempData("in_utero_heard_takes", heard.join(","));
        }

        // Check if player has heard 3+ different takes
        if (heard.length >= 3) {
            var understandKey = "in_utero_understood";
            if (user.GetTempData(understandKey) !== "yes") {
                user.SetTempData(understandKey, "yes");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Something clicks. After hearing multiple takes, you begin to understand what is being made here -- not just an album, but a document. Every song is a room inside the same building. Raw walls. No paint. The structure itself is the art.</ansi>");
                // Advance quest step 2: Listen to recording takes
                if (user.HasQuest(QUEST_ID)) {
                    user.Command("quest advance " + QUEST_ID);
                }
            }
        }

        return true;
    }

    return false;
}

function onEnter(user, room) {
    var enteredKey = "in_utero_entered_live_room";
    if (user.GetTempData(enteredKey) !== "yes") {
        user.SetTempData(enteredKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The door opens and the sound hits you like a physical force. The muffled roar from the control room becomes a full-spectrum assault -- guitars, bass, drums, all of it live and loud and unprocessed. Three people making more noise than seems possible. The air vibrates. Your clothes vibrate. Your bones vibrate.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'listen' to hear the band play a take. Type 'search' to look around carefully.)</ansi>");
    }
    return true;
}

function onIdle(room) {
    var messages = [
        "<ansi fg=\"8\">The band tears through another take -- a blur of distortion and percussion that lasts ninety seconds and leaves silence ringing in its wake.</ansi>",
        "<ansi fg=\"8\">Kurt adjusts a tuning peg, plays a chord, grimaces, adjusts again. The Mustang is never quite in tune. That might be the point.</ansi>",
        "<ansi fg=\"8\">Dave counts in -- one, two, three, four -- and the room detonates into the opening of another song.</ansi>",
        "<ansi fg=\"8\">Krist plays a bass line by himself in the corner, something slow and melodic that does not sound like anything on the album. He stops when he notices you listening.</ansi>",
        "<ansi fg=\"8\">Through the glass, Albini holds up a hand. The band stops. Silence floods in like water. Then he gives a thumbs up and they start again from the top.</ansi>"
    ];
    var pick = Math.floor(Math.random() * messages.length);
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        SendUserMessage(players[i].UserId(), messages[pick]);
    }
    return false;
}
