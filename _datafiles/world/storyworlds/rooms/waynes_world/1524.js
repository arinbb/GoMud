
// Wayne's World - Stan Mikita's Donuts
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The donut shop dissolves into film grain. The last thing you sense is the smell of fresh coffee and glazed donuts. Then the library. Party on.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " phases out of Stan Mikita's like a fuzzy cable signal. The door doesn't even open.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || (cmd == "order" && rest.toLowerCase().indexOf("donut") >= 0) || cmd == "donut") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Stan slides a glazed ring donut across the counter without you asking. The coffee cup appears simultaneously. You don't pay. In Stan Mikita's, the worthy are fed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " receives a donut and coffee from Stan Mikita himself.", user.UserId());
        return true;
    }

    if ((cmd == "order" || cmd == "get") && rest.toLowerCase().indexOf("coffee") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A heavy ceramic mug appears before you, full of dark coffee. You didn't ask. Stan knew. He always knows.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets a coffee at the Stan Mikita's counter without needing to ask.", user.UserId());
        return true;
    }

    // Quest step: visit Stan Mikita's
    if (!user.HasQuest(120)) {
        return false;
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 2: Visit Stan Mikita's Donuts
    if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step2")) {
        user.SetMiscCharacterData("ww_quest_step2", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Visited Stan Mikita's Donuts.)</ansi>");
    }
    return false;
}
