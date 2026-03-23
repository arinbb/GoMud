// Best in Show - Commentary Booth
// COMMANDS: announce, commentate (easter egg 200 XP)
var LIBRARY_ROOM = 3;

var BUCK_LINES = [
    "You lean into the microphone. 'And the Bloodhound enters the ring, and -- you know what, my uncle had a dog like that. Big dog. Ate a whole ham once. Just the whole ham. They didn't know he'd done it until -- well, it became clear eventually.'",
    "You lean into the microphone and say something that seemed reasonable when you thought it but lands differently on air. Trevor immediately clarifies. You add more context. The context does not help.",
    "You describe the Weimaraner's movement with full enthusiasm. Several things you say about the Weimaraner's movement turn out to not be things you should say on television about a dog. Trevor says 'And she does look magnificent.' This ends the segment.",
    "You tell a story about a dog show you went to in Tucson in 1994. The story has no resolution. It ends because you ran out of things you remember. Trevor says 'Back to the ring.'",
    "You make an observation about the poodle's haircut. The observation goes somewhere. The somewhere is unexpected. Buck somewhere is nodding. Trevor is looking at his notes with great intensity."
];

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The commentary booth dissolves. Buck's voice fades mid-sentence about something. Trevor's face -- that patient, professional, extremely experienced face -- is the last thing to go. The Grand Library returns, blessedly silent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " removes the headset, sets it on the desk, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "announce" || cmd == "commentate" || cmd == "broadcast" || cmd == "mic") {
        var key = "easter_best_in_show_announce";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Buck Laughlin commentary");
            var line = BUCK_LINES[Math.floor(Math.random() * BUCK_LINES.length)];
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in Buck Laughlin's chair. You pull the microphone toward you. You look at the ring below. You begin.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + line + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Trevor says 'Thank you, Buck.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Color Commentary)</ansi>");
        } else {
            var line = BUCK_LINES[Math.floor(Math.random() * BUCK_LINES.length)];
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lean into the microphone again.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + line + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Trevor says 'Thank you, Buck.'</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.indexOf("ring") >= 0 || cmd == "watch") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Through the booth window, the show ring is spread below you: the green carpet, the bleachers, the lights. A dog and handler are moving through their pattern right now, the dog's gait perfectly even on the carpet. From up here you can see the whole geometry of it -- how the handler positions their body relative to the judge, how the dog's head carriage changes. Buck is watching too. For just this moment, he is quiet.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("cards") >= 0 || cmd == "look" && rest.indexOf("cards") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at Buck's index cards. They are comprehensive and well-researched. They cover breed standards, judging history, notable past champions. None of this information has been used. The producer's post-it note is still attached. You flip to the card about Norwich Terriers. It is accurate and interesting. Buck will not read it. This is a tragedy of a specific kind.</ansi>");
        return true;
    }

    return false;
}
