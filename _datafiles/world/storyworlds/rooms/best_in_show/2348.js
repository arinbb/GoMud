// Best in Show -- The Press Box (2348)
// COMMANDS: announce, comment, commentate (easter egg 200 XP)
var LIBRARY_ROOM = 3;

var BUCK_LINES = [
    "You lean into the microphone. 'And the Bloodhound enters the ring, and -- you know what, my uncle had a dog like that. Big dog. Ate a whole ham once. Just the whole ham. Nobody knew he'd done it until it became clear eventually.'",
    "You describe the Weimaraner's movement with full enthusiasm. Several things you say turn out to be things you should not say about a dog on television. Trevor says 'And she does look magnificent.' This ends the segment.",
    "You make an observation about the poodle's haircut. The observation goes somewhere unexpected. Buck, somewhere offscreen, is nodding. Trevor is studying his notes with tremendous intensity.",
    "You tell a story about a dog show you went to once. The story has no clear resolution. It ends because you ran out of things you remember. Trevor says 'Back to the ring.'",
    "You ask a question about whether the dog knows it won. You ask it live, on air, into the microphone. Trevor says 'A great question, and I think we can all see from Rhapsody's bearing that she knows.' You meant it differently. The broadcast moves on."
];

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The press box dissolves. Buck's voice fades mid-sentence about something. Trevor's face -- patient, professional, experienced -- is the last thing to go. The Grand Library returns, blessedly silent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " removes the headset, sets it on the desk, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "announce" || cmd == "comment" || cmd == "commentate" || cmd == "broadcast" || cmd == "mic") {
        var key = "easter_bis_announce";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Buck Laughlin commentary");
            var idx = Math.floor(Math.random() * BUCK_LINES.length);
            var line = BUCK_LINES[idx];
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in Buck Laughlin's chair. You pull the microphone toward you. You look at the ring below. You begin.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + line + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Trevor says 'Thank you, Buck.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Color Commentary)</ansi>");
        } else {
            var idx = Math.floor(Math.random() * BUCK_LINES.length);
            var line = BUCK_LINES[idx];
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lean into the microphone again.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + line + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Trevor says 'Thank you, Buck.'</ansi>");
        }
        return true;
    }

    if (cmd == "watch" || (cmd == "look" && rest.indexOf("ring") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Through the booth window, the show ring spreads below: the green carpet, the bleachers, the lights. A handler and dog are moving through their pattern right now. From up here you can see the whole geometry of it -- how the handler positions relative to the judge, how the dog's head carriage changes with each stride. Buck is quiet for once. He is watching too. There are moments, between the things he says, when he sees what everyone else sees.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("card") >= 0 || cmd == "look" && rest.indexOf("card") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at Buck's index cards. They are comprehensive and well-researched. Breed standards, judging history, notable champions, fascinating context. None of this has been used. The producer's post-it notes are both still attached. You flip to the card about Norwich Terriers. It is accurate and interesting. Buck will not read it. This is a specific kind of tragedy.</ansi>");
        return true;
    }

    return false;
}
