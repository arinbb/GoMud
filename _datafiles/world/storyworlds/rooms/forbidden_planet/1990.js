
// Forbidden Planet - The Deep Krell
// Easter egg 2: "use machine" or "brain boost" -> IQ boost scene, 300 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apparatus dims as you step away. The readout panels cycle through one final pattern -- complex, recursive, like a thought completing itself -- and then you are back in the amber light of the Grand Library, blinking at the shelves. Your head is very full.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disengages from the apparatus and is returned to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "use" && (rest.indexOf("machine") >= 0 || rest.indexOf("apparatus") >= 0 || rest.indexOf("headrest") >= 0)) || cmd == "boost" || (cmd == "brain" && rest.indexOf("boost") >= 0) || (cmd == "use" && rest.indexOf("boost") >= 0)) {
        var easterKey = "fp_easter_brainboost";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(300, "using the Krell brain boost apparatus");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit in the headrest of the Krell brain boost apparatus. The metal adjusts slightly to the dimensions of your skull. The panels around you bloom with sudden intense light.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Something connects. Not physically -- nothing touches you that you can feel -- but something in the machinery reaches into the space behind your eyes and begins to work.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">For thirty seconds -- perhaps thirty years -- you think at a different rate. Problems that have troubled you resolve in cascading clarity. The Krell script on the walls becomes legible: not just translatable but obvious, self-evident, silly in its simplicity. The machine's architecture makes complete sense. You understand why the Krell built it and why they died and what Morbius did and what the monster is. You understand everything.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">Then it stops. The panel dims. The knowledge doesn't leave -- it stays, like the memory of a dream -- but the clarity does. You are back to ordinary human intelligence. Which is, you now understand, a very great distance from what is necessary.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You remember, now, what Doc Ostrow said as he was dying: Morbius's mind has been enlarged. But not his... not his...</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP -- You used the Krell brain boost. The knowledge stays. The danger stays.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit in the apparatus again. The panels light up. The connection comes -- familiar now, almost comfortable. You remember what you understood the first time. It is still true. The monster is still Morbius's id. Morbius still does not fully know. You still cannot tell him in a way that matters.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " places themselves in the Krell apparatus. The room blazes with light.", user.UserId());
        return true;
    }

    return false;
}
