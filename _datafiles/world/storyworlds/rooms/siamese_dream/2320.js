// ZONE COMMANDS:
//   play guitar (2320), layer (2320) - easter egg
//   sing (2323), greatest (2323) - easter egg
//   listen (2326), cry (2326) - easter egg
//   float (2329), fly (2329) - easter egg
//   rest (2332), sleep (2332) - easter egg
//   return - goes back to Grand Library from any room

var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_siamese_dream";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...tape hiss...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">A wall of distorted guitar detonates against you -- layered and massive and beautiful -- and the Listening Room dissolves into static and heat. You are standing in a recording studio in Atlanta. The summer of 1993. The air conditioning is broken and the tape is rolling and something extraordinary is happening, despite everything.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(390)) {
        user.GiveQuest(390);
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar layers peel away one by one until there is nothing left but tape hiss, and the hiss fades to silence, and you are back in the Grand Library with the smell of warm electronics still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of purple guitar distortion, fading back to the Library.", user.UserId());
        user.SetTempData("visited_siamese_dream", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "layer") {
        if (rest.indexOf("guitar") >= 0 || cmd == "layer") {
            if (user.GetMiscCharacterData("easter_siamese_studio") != "found") {
                user.SetMiscCharacterData("easter_siamese_studio", "found");
                user.GrantXP(200, "adding a layer to Siamese Dream");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">You reach for one of the guitars leaning against the amp. The moment you touch the strings a new layer of sound rises from the studio, weaving into what was already there. Butch Vig looks up from the board. He does not say anything. He reaches over and turns up the fader.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches a guitar string, and a new layer of sound rises in the studio.", user.UserId());
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have already added your layer. It is in there somewhere, threaded between the others, indistinguishable from the whole.</ansi>");
            }
            return true;
        }
    }

    return false;
}
