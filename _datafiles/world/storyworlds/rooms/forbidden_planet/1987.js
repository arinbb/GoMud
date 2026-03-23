
// Forbidden Planet - Robbys Workshop
// Easter egg 4: "ask robby whisky" or "order whisky" -> Robby synthesizes bourbon
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Robby's workshop dissolves component by component, each piece returning to its elemental form and then to light. The Grand Library assembles from that light, books and lamps and warmth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is disassembled and reconstituted in the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "ask" && rest.indexOf("whisk") >= 0) || (cmd == "order" && rest.indexOf("whisk") >= 0) || (cmd == "order" && rest.indexOf("bourbon") >= 0) || (cmd == "ask" && rest.indexOf("bourbon") >= 0)) {
        var easterKey = "fp_easter_whisky";
        var mobs = room.GetMobs(412);
        if (mobs.length == 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Robby is not present. You consider ordering bourbon from an empty room, then decide against it.</ansi>");
            return true;
        }
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "requesting bourbon from Robby");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Robby turns toward you, his dome rotating with a faint hydraulic hiss.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Robby says: Certainly. I have synthesized 847 batches. Current production is optimized for maximum flavor complexity. One moment.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">He moves to the still with the fluid efficiency of something that has done this thousands of times. He adjusts three valves, checks a readout, and in approximately ninety seconds presents you with a glass of bourbon. It smells extraordinary. It tastes better than anything you have had since you left Earth. It may be better than anything you have had anywhere.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Robby says: I enjoy making it. I am not certain why. I am programmed to fulfill requests. Perhaps that is sufficient reason.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Robby synthesized bourbon for you. Batch 848.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Robby has another glass ready before you finish asking. Batch 849. He has optimized for your preferences since the last time.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Robby says: I have been expecting you.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " asks Robby for bourbon. Robby is pleased to comply.", user.UserId());
        return true;
    }

    return false;
}
