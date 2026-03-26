// ZONE COMMANDS:
//   read note (2320) - reveals the story behind "Today", tracks for Billy interaction
//   play (2320) - easter egg, 200 XP
//   return - goes back to Grand Library (all rooms)

var LIBRARY_ROOM = 1;
var QUEST_ID = 390;

function onEnter(user, room) {
    var visitedKey = "visited_siamese_dream";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...tape hiss...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">A wall of distorted guitar detonates against you -- layered and massive and beautiful -- and the Listening Room dissolves into static and heat. You are standing in a recording studio in Atlanta. The summer of 1993. The air conditioning is broken and the tape is rolling and something extraordinary is happening, despite everything.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

        if (!user.HasQuest(QUEST_ID)) {
            user.GiveQuest(QUEST_ID);
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar layers peel away one by one until there is nothing left but tape hiss, and the hiss fades to silence, and you are back in the Grand Library with the smell of warm electronics still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of purple guitar distortion, fading back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        if (rest.indexOf("note") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You lean close to the note taped to the wall. The handwriting is Billy's -- careful, deliberate, pressed hard into the paper.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Today is the greatest day I have ever known.\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">He wrote it during the worst of the sessions. The band was barely speaking. The budget was hemorrhaging. He was sleeping on the studio floor, not eating, spiraling into depression so deep he later described it as suicidal. And from that darkness he wrote the most hopeful lyric on the record -- not because he believed it, but because he needed it to be true. The greatest day. The greatest. Written by a man who was not sure he wanted to see the next one.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads the note taped to the wall, standing very still.", user.UserId());
            user.SetTempData("read_today_note", "true");
            return true;
        }
    }

    if (cmd == "play") {
        if (user.GetMiscCharacterData("easter_siamese_studio") != "found") {
            user.SetMiscCharacterData("easter_siamese_studio", "found");
            user.GrantXP(200, "touching a fader on the Neve");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You reach for the Neve board and touch one of the faders. The moment your finger makes contact, a new layer of sound rises from the monitors -- something warm, something that was always there but hidden in the mix. Butch Vig looks up. He does not say anything. He reaches over and pushes the fader a millimeter higher.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches a fader on the Neve, and a new layer of sound rises in the monitors.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have already found your frequency in the mix. It is in there somewhere, a single fader among hundreds, indistinguishable from the whole.</ansi>");
        }
        return true;
    }

    return false;
}
