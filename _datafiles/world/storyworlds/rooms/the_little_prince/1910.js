
// The Foxs Den - Where taming happens
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leave the wheat field. The fox watches you go. The wheat waves behind you. You will remember this field. That is part of what the fox was saying.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps away from the wheat field and dissolves into library light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        if (user.GetMiscCharacterData("lp_taming_sat") != "yes") {
            user.SetMiscCharacterData("lp_taming_sat", "yes");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit down in the wheat. The fox watches you from his distance. He does not come closer. But he does not retreat. You have done the first thing right. Now you must wait.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fox says: 'Good. Say nothing. Come back tomorrow at the same hour.'</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down quietly in the wheat field. The fox watches, ears forward.", user.UserId());
            return true;
        }

        if (user.GetMiscCharacterData("lp_taming_waited") != "yes") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit again. You remember the fox's instructions. You wait. Now: wait longer.</ansi>");
            return true;
        }

        // Full taming sequence
        if (user.GetMiscCharacterData("lp_tamed") != "found") {
            user.SetMiscCharacterData("lp_tamed", "found");
            user.GrantXP(300, "being tamed by the fox");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit. You wait. You say nothing. The fox watches. He moves one step closer. Then another. Then he is sitting beside you in the wheat, his shoulder warm against your knee, the whole field moving around you. Neither of you speaks. There is nothing to say. You are responsible for each other now. That is what taming means.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+300 XP for being patient enough to be tamed.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in the wheat and waits. Slowly, carefully, the fox approaches and sits beside them. Something permanent has happened.", user.UserId());

            if (user.HasQuest(230)) {
                user.Command("quest advance 230");
            }
            return true;
        }

        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in the wheat. The fox comes and sits beside you. This happens every time now. You are, each of you, the other's in the way that matters.</ansi>");
        return true;
    }

    if (cmd == "wait") {
        if (user.GetMiscCharacterData("lp_taming_sat") == "yes" && user.GetMiscCharacterData("lp_taming_waited") != "yes") {
            user.SetMiscCharacterData("lp_taming_waited", "yes");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wait. The fox moves slightly closer. He sits at a new distance -- still far, but less far. The wheat moves between you. 'Sit again,' he says. 'Same time. Come back.'</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waits patiently. The fox steps a little closer.", user.UserId());
            return true;
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wait. The fox watches. This is how it works: patience is the method.</ansi>");
        return true;
    }

    if (cmd == "ask" && rest.indexOf("secret") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fox looks at you from the wheat. 'Here is my secret,' he says. 'It is very simple: it is only with the heart that one can see rightly; what is essential is invisible to the eye.' He pauses. 'People have forgotten this truth,' he adds. 'But you must not forget it.'</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_fox") != "yes") {
        user.SetMiscCharacterData("lp_visited_fox", "yes");
    }
    return true;
}
