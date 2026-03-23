
// Jurassic Park - The Raptor Pen
// Easter egg: "say clever girl" - Muldoon reacts, first time = 100 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The jungle closes over the pen and the fence hum becomes projector hum and Muldoon watches without turning as you fade from the viewing platform, back to the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs away from the raptor pen and dissolves in the jungle shadows.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say" && (rest.indexOf("clever") >= 0 || rest.indexOf("girl") >= 0)) {
        var easterKey = "jp_clever_girl";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(100, "saying 'clever girl' at the raptor pen");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Muldoon turns from the pen. His expression is the expression of a man who has said that phrase once, at the end of everything, with three seconds left. He looks at you for a long moment.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">\"Clever girl,\" he says. Quietly. With complete gravity. Then he turns back to the pen. He goes back to watching the part of the pen that appears to be empty.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP — Clever girl.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Muldoon turns and looks at you for a measured moment. \"Don't,\" he says. He turns back to the pen. He keeps watching.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says something to Muldoon. He pauses. He responds. He goes back to watching the pen.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("pen") >= 0 || rest.indexOf("raptor") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You study the pen. It appears empty. The trees are trimmed back. The dead tree in the center stands in open ground. No raptor visible. Muldoon, beside you, doesn't look at you. \"They're there,\" he says. \"Both of them, watching us right now. Have been since you walked up.\" He still doesn't look at you. \"The problem isn't finding them. The problem is that they already know where you are.\"</ansi>");
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("raptor") >= 0 || rest.indexOf("velocir") >= 0 || rest.indexOf("danger") >= 0 || rest.indexOf("fast") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Muldoon doesn't turn from the pen. \"They're six feet tall at the hip, weighing one hundred sixty pounds, running twelve meters per second. They can maintain a sprint for two hundred meters. They hunt in coordinated groups. They communicate. They remember.\" He pauses. \"But that's not the problem. The problem is that they're testing the fence systematically and they're getting better at it every day.\" He finally looks at you. \"Every. Day.\"</ansi>");
        return true;
    }

    return false;
}
