
// ZONE COMMANDS: swim (102), cry (102), drink (102), race/run (102), look reflection (102)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tears in the pool rise up around you like a wave of liquid words. They carry you upward and outward, and when the water drains away you find yourself dry and warm in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up by a wave from the Pool of Tears and vanishes in a splash of shimmering text.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You wade into the Pool of Tears. The water is warm and salty, reaching up to your chin. The Mouse paddles over and gives you a disapproving look. 'I wish you hadn't done that,' it says primly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades into the Pool of Tears, drawing a disapproving look from the Mouse.", user.UserId());
        return true;
    }

    if (cmd == "drink" && (rest == "" || rest.indexOf("pool") >= 0 || rest.indexOf("water") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You cup some pool water in your hands and taste it. It is warm and salty and distinctly sad -- not your sadness, but someone else's, and very large. You swallow it carefully. The Mouse watches with a complicated expression. 'I wouldn't do that,' it says, then adds, 'but I understand why you did.'</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cups pool water in their hands and tastes it. The Mouse watches with reluctant understanding.", user.UserId());
        return true;
    }

    if (cmd == "race" || cmd == "run" || (cmd == "caucus")) {
        var easterKey2 = "wonderland_caucus";
        if (user.GetMiscCharacterData(easterKey2) != "found") {
            user.SetMiscCharacterData(easterKey2, "found");
            user.GrantXP(150, "participating in the Caucus-Race");
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">The Dodo announces the Caucus-Race. Everyone starts running in a rough circle at whatever moment they feel like. After some time, the Dodo announces everyone has won. You receive a prize: a thimble, or possibly your own thimble returned. It is yours. You won it. You already had it. Everyone has won and all must have prizes. You feel, obscurely, that this is a better system than most.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- All have won, all must have prizes.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">You run in the Caucus-Race again. It ends when it ends, which is whenever the Dodo decides it has. Everyone wins again. The prize this time is exactly the same as last time, which is the point.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " joins the Caucus-Race, running in a rough circle until the Dodo declares everyone the winner.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.indexOf("reflect") >= 0) {
        var easterKey3 = "wonderland_reflection";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(100, "confronting your Wonderland reflection");
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">You look at your reflection very carefully. It looks back. Then it tilts its head. You did not tilt yours. Then it smiles -- a smile you recognize as yours but haven't made yet, as if it is smiling at something that will happen later. You stare. It stares back with perfect patience. Finally it nods, as if it has confirmed something. Then it is just a reflection again.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- Your reflection knows something you don't.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">You look at your reflection again. It nods at you -- it has already confirmed what it needed to know. You have not.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stares intently at their reflection in the pool.", user.UserId());
        return true;
    }

    if (cmd == "cry" || cmd == "weep") {
        var easterKey = "wonderland_cry";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "adding to the Pool of Tears");
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">You cry a little into the pool. It's surprisingly easy, here. The Mouse watches your contribution hit the surface with a small splash. 'Good lord,' it says. 'Now there's even more.' The pool rises, imperceptibly, by exactly the amount of your tears. You have contributed to something enormous and intimate.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Your tears are part of Wonderland now.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"6\">You cry again, just a little. The pool accepts it. The Mouse sighs. 'You again,' it says, with something that might be fondness.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sheds a few tears into the pool. The Mouse looks on without sympathy but without unkindness.", user.UserId());
        return true;
    }

    return false;
}
