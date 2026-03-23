
// The Crossroads - Quest step 7 + Easter egg: kneel / kiss earth
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The crossroads cobblestones dissolve into text. The noise of the Haymarket district fades to quiet. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the crossroads, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "kneel" || cmd == "kiss" || (cmd == "kiss" && rest == "earth") || (cmd == "kiss" && rest == "ground") || (cmd == "kneel" && rest == "earth") || (cmd == "bow")) {
        var xpKey = "cnp_crossroads_kiss";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(300, "the earth at the crossroads");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk to the center of the crossroads. You stop. People move around you. A cart passes. You are standing in the middle of the city, in the middle of everything the city is and does, and you feel the weight of it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You kneel.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">The cobblestones are warm under your hands, warm from the summer sun and the passing of a thousand feet. You bend down and touch your forehead to them. The city is in the stone. Everyone who has ever walked here. Everyone who has ever suffered here. You kiss the earth.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Someone laughs. Someone stops to watch. A woman makes the sign of the cross. You stand up, look around at the staring faces, and the weight is still there but it is different now — it has been acknowledged, it has been offered to the earth that holds it all.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The crossroads is just a crossroads again.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP: the confession at the crossroads)</ansi>");
            if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_crossroads")) {
                user.SetMiscCharacterData("cnp_q_crossroads", "done");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest step complete: Kiss the earth at the crossroads.)</ansi>");
                var allDone = user.GetMiscCharacterData("cnp_q_haymarket") == "done" &&
                              user.GetMiscCharacterData("cnp_q_tavern") == "done" &&
                              user.GetMiscCharacterData("cnp_q_staircase") == "done" &&
                              user.GetMiscCharacterData("cnp_q_porfiry") == "done" &&
                              user.GetMiscCharacterData("cnp_q_sonya") == "done";
                if (allDone && user.GetMiscCharacterData("cnp_quest_complete") != "done") {
                    user.SetMiscCharacterData("cnp_quest_complete", "done");
                    user.GrantXP(5500, "Crime and Punishment: the full journey");
                    var cap = CreateItem(210);
                    user.GiveItem(cap);
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"white\">A worn student cap materializes in your hands. It is tattered at the brim and stained with the particular sweat of someone who thought too much in a room too small. You have walked the whole of it: the garret, the square, the staircase, the detective's office, the room with the candle and the Bible. You have stood at the crossroads.</ansi>");
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest complete: Crime and Punishment. +5500 XP. You receive a tattered student cap.)</ansi>");
                }
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You have already kissed this earth. The cobblestones remember. The city does not require it again.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_crossroads_visit")) {
        user.SetMiscCharacterData("cnp_q_crossroads_visit", "seen");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Hint: At the crossroads, you can 'kneel' or 'kiss earth' to complete Raskolnikov's spiritual act.)</ansi>");
    }
    return false;
}
