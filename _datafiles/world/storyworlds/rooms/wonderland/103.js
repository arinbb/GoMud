
// ZONE COMMANDS: drink tea (103), sit (103), riddle/ask riddle (103), move (103), sleep (103), pour (103)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Hatter raises his teacup in a toast: 'Goodbye! Or is it hello? Time is funny here.' The tea party dissolves into swirling text and you tumble back through the pages to the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is toasted by the Hatter and dissolves into a swirl of tea-colored words, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink") {
        var easterKey = "wonderland_tea";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "attending the Mad Tea Party");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You take a sip of tea. It tastes of everything and nothing at the same time. The Hatter asks eagerly how you like it. Before you can answer, the March Hare shouts MOVE DOWN and everyone shuffles one seat to the left.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- A very merry unbirthday to you.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You sip more tea. The Hatter has moved on to asking the Dormouse about treacle wells.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sips some tea and is swept into the chaos of musical chairs.", user.UserId());
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">'No room! No room!' cry the Hare and the Hatter in unison. There is, in fact, plenty of room. You sit down anyway. The Dormouse opens one eye, says 'Once upon a time there were three little sisters,' and falls back asleep.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down at the tea party despite protests of 'No room!'", user.UserId());
        return true;
    }

    if (cmd == "move" || (cmd == "move" && rest == "down")) {
        var easterKey4 = "wonderland_movedown";
        if (user.GetMiscCharacterData(easterKey4) != "found") {
            user.SetMiscCharacterData(easterKey4, "found");
            user.GrantXP(100, "joining the move down");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You shout 'MOVE DOWN!' and everyone at the table -- including yourself -- shifts one seat to the left. You are now sitting in front of a fresh dirty cup. The Hatter applauds. 'You've got the spirit!' he cries. 'Now: MORE TEA?' There is no more tea. There is always more tea. Both things are true. You pour some.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- Clean cups! ...they are not clean.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You shout MOVE DOWN again. Everyone shifts one more seat to the left. You are in a different dirty cup's territory. The Hatter moves the teapot three inches to the right in celebration.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shouts MOVE DOWN and the whole tea party shuffles one seat to the left.", user.UserId());
        return true;
    }

    if (cmd == "sleep" || (cmd == "sleep" && rest.indexOf("dormouse") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You close your eyes at the tea table. Immediately the March Hare pours tea on your head. 'We don't sleep at the table,' he says, though the Dormouse is clearly asleep at the table. The Dormouse murmurs something about treacle. You open your eyes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " attempts to sleep at the tea table. The March Hare objects immediately.", user.UserId());
        return true;
    }

    if (cmd == "pour") {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You pick up the teapot and pour. Tea goes everywhere except into a cup -- on the table, on the bread, on the March Hare's left elbow. The Hatter watches approvingly. 'Excellent form,' he says. 'You've been practicing.'</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pours tea enthusiastically, achieving very little accuracy but considerable drama.", user.UserId());
        return true;
    }

    if (cmd == "riddle" || (cmd == "ask" && rest.indexOf("riddle") >= 0) || (cmd == "say" && rest.indexOf("raven") >= 0 && rest.indexOf("writing") >= 0)) {
        var easterKey3 = "wonderland_riddle";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(200, "asking the unanswerable riddle");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You ask: 'Why is a raven like a writing-desk?' The Hatter beams with delight. 'Have you guessed the riddle yet?' he demands. You admit you have not. 'Nor have I!' says the Hatter. 'I haven't the slightest idea.' The March Hare nods in enthusiastic agreement. The answer, it seems, was never the point. The question was the point. You feel, obscurely, that this is important.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- The riddle has no answer, and that is the answer.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You ask the raven riddle again. The Hatter raises his teacup. 'Still don't know!' he says happily. The March Hare says 'Nor I!' They seem very pleased about this. The Dormouse says nothing, being asleep.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " poses the famous riddle. The Hatter and March Hare celebrate their ignorance of its answer.", user.UserId());
        return true;
    }

    return false;
}
