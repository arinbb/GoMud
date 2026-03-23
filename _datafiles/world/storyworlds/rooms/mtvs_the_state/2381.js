// MTVs The State - The Pudding Room (2381)
// Quest step 2: find the pudding
// Easter egg: 'dip' or 'dip balls' => 200 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(420) && user.GetMiscCharacterData("the_state_quest_pudding") != "done") {
        user.SetMiscCharacterData("the_state_quest_pudding", "done");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have found the pudding. Two hundred and forty dollars worth of pudding. You see it now. You understand.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Find the pudding.)</ansi>");
        user.Command("quest", 0);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The pudding does not release you so much as the rest of the world reasserts itself. You are back in the Grand Library. You still smell chocolate.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the pudding and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dip") {
        var key = "the_state_dip_egg";
        var target = rest.toLowerCase();
        SendUserMessage(user.UserId(), "");
        if (target.indexOf("ball") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You dip your balls in it.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dips their balls in the pudding. Louie nods with the solemn recognition of a master acknowledging a student.", user.UserId());
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Louie says: \"Yes. THAT is what I have been trying to explain to everyone.\"</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You dip something in the pudding. It is immediately better for having been dipped.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dips something in the pudding with complete commitment.", user.UserId());
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Louie watches with the satisfaction of a visionary whose vision is being validated.</ansi>");
        }
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "pudding dip easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — You understand now.)</ansi>");
        }
        return true;
    }

    if (cmd == "eat" || cmd == "taste") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You eat some pudding. It is good pudding. It is always good pudding. That is the whole point.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats some pudding. Louie watches approvingly.", user.UserId());
        return true;
    }

    return false;
}
