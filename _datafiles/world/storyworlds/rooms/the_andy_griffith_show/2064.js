
// The Andy Griffith Show - The Courthouse
var LIBRARY_ROOM = 1;
var QUEST_ID = 310;

function onEnter(user, room) {
    var key = "andy_quest_courthouse";
    if (user.GetMiscCharacterData(key) != "done") {
        user.SetMiscCharacterData(key, "done");
        user.Command("quest advance 310", 0);
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">(Quest advanced: A Day in Mayberry -- visited the courthouse)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The courthouse dissolves -- Barneys posture, the silent telephone, the contingency notebook -- and the Grand Library settles around you. You feel, inexplicably, safer than you did before. Mayberry has that effect.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nods to Barney, who straightens up importantly, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" && rest.indexOf("bullet") >= 0) || (cmd == "ask" && rest.indexOf("bullet") >= 0) || (cmd == "ask" && rest.indexOf("barney") >= 0)) {
        var easterKey = "easter_mayberry_bullet";
        var questKey3 = "andy_quest_barney";
        if (user.GetMiscCharacterData(easterKey) != "done") {
            user.SetMiscCharacterData(easterKey, "done");
            user.GrantXP(150, "examined Barneys bullet");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You ask about the bullet. Barney reaches into his shirt pocket and produces it with great solemnity -- a single gleaming cartridge, his one authorized round, held between thumb and forefinger like a jewel.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Barney says: 'This bullet is not just a bullet. This bullet is a responsibility. A man with one bullet has to THINK before he acts. A man with a full cylinder just SHOOTS and figures it out later. That is the difference between law enforcement and just a man with a gun, and do NOT let anyone tell you different.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " asks about the bullet. Barney produces it from his shirt pocket and delivers what appears to be a very important speech about it.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Barney pats his shirt pocket. 'Still here. Still the one. Always the one.' He nods with great gravity.</ansi>");
        }
        if (user.GetMiscCharacterData(questKey3) != "done") {
            user.SetMiscCharacterData(questKey3, "done");
            user.Command("quest advance 310", 0);
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(Quest advanced: A Day in Mayberry -- met Barney and learned about the bullet)</ansi>");
        }
        return true;
    }

    if (cmd == "sit" || (cmd == "sit" && rest.indexOf("desk") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit down at Andys desk for a moment. The chair is comfortable and unhurried. The view of Main Street through the window is exactly right. You understand why Andy is good at this job.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 8);

    if (roll == 1) {
        room.SendText("<ansi fg=\"yellow\">Barney checks his holster, unscrews the strap, checks again, re-fastens it, and straightens his posture with an air of renewed readiness.</ansi>");
        return true;
    }

    return false;
}
