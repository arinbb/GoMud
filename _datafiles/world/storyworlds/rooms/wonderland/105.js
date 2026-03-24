
// ZONE COMMANDS: smile/grin (105), disappear/vanish (105), climb tree (105), touch pawprint (105), look tree/branch/leaves/stripes/grin/signpost/clearing/sky/pawprint (105)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Cheshire Cat grins wider than ever. 'Leaving so soon? Well, if you must...' Its grin expands until it fills your entire vision, then folds inward like a closing book. You find yourself in the Library, smiling for no reason you can explain.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the Cheshire Cat's enormous grin and fades away, leaving only a faint smile in the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "disappear" || cmd == "vanish" || cmd == "fade") {
        var easterKey2 = "wonderland_vanish";
        if (user.GetMiscCharacterData(easterKey2) != "found") {
            user.SetMiscCharacterData(easterKey2, "found");
            user.GrantXP(200, "attempting to vanish like the Cheshire Cat");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You concentrate very hard on vanishing. First you try to make your tail disappear -- you don't have a tail, which is already an obstacle. Then you try your stripes -- also absent. You attempt to fade starting from your extremities inward. Nothing happens. The Cheshire Cat watches this with enormous interest. 'The grin,' it says finally, 'is always the last to go. You might try starting there.' You try to make just your smile disappear. For a brief, unsettling moment, you are not sure whether you succeeded.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- A partial vanishing is still an achievement.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You try to vanish again. The Cat watches with patient amusement. 'Better,' it says. 'The left side disappeared for almost a second.' You are not sure which left side it means.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " attempts to vanish. The Cheshire Cat observes with academic interest.", user.UserId());
        return true;
    }

    if (cmd == "climb" && rest.indexOf("tree") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You begin to climb the oak tree. The branches curve away from you just slightly -- not enough to be impossible, enough to be discouraging. You reach a branch that should support your weight and find the Cat already there, looking at you from the same branch, from the wrong direction. 'You climb interestingly,' it says. You descend. The Cat is now at the base of the tree. You are not sure when it moved.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs the Cheshire Cat's tree and finds the Cat already wherever they happen to arrive.", user.UserId());
        return true;
    }

    if (cmd == "touch" && rest.indexOf("paw") >= 0) {
        var easterKey3 = "wonderland_pawprint";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(100, "touching the Cheshire Cat's pawprint");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You kneel and touch the single pawprint at the base of the tree. The soil is warm -- warmer than it should be, warmer than sunlight would explain. The print is sharp and clear and impossibly present. You look up. The Cat is fully visible for one moment, watching you with an expression of what might be recognition. Then it fades. The pawprint remains warm for a long time.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- Some things persist even when the Cat does not.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You touch the pawprint again. It is still warm. It will probably always be warm. The Cat, wherever it currently is, knows you touched it.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels and touches the Cheshire Cat's pawprint at the base of the tree.", user.UserId());
        return true;
    }

    if (cmd == "smile" || cmd == "grin") {
        var easterKey = "wonderland_grin";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "out-grinning the Cheshire Cat");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You grin as wide as you can. The Cheshire Cat watches with interest. Its own grin, impossibly, gets wider. You grin wider. It grins wider. This continues until your face aches and the Cat's grin has stretched to fill most of the clearing. Then the Cat nods, once, in something like respect. 'Not bad,' says the grin. 'For someone who exists continuously.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- You almost out-grinned the Cat. Almost.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You grin at the Cat again. It grins back. The competition is brief and the Cat wins without effort. But you both enjoyed it, which may be the whole point.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grins as wide as possible. The Cheshire Cat appears to appreciate the effort.", user.UserId());
        return true;
    }

    return false;
}
