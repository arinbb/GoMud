// Back to the Future -- The Lightning Strike
// Easter egg: "connect cable" or "wire" triggers the lightning scene
// Also the quest completion trigger
var LIBRARY_ROOM = 1;
var EASTER_KEY = "bttf_egg_lightning";

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lightning has already struck. The DeLorean is already gone. The storm begins to ease. From the top of the clock tower, you watch the last fire trails fade on the street below. Then the tower folds in on itself like a movie ending, and you are in the Grand Library. You are safe. It is warm. 1955 is in the past.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the fire trails fade and dissolves with the last of the storm.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    var cmdLower = cmd.toLowerCase();
    var restLower = rest.toLowerCase();

    var isConnect = (cmdLower == "connect" || cmdLower == "attach" || cmdLower == "hook" || cmdLower == "wire");
    var isCable = (restLower.indexOf("cable") >= 0 || restLower.indexOf("wire") >= 0 || restLower.indexOf("rod") >= 0 || restLower.length == 0);

    if (isConnect || (cmdLower == "use" && isCable)) {
        triggerLightningStrike(user, room);
        return true;
    }

    return false;
}

function triggerLightningStrike(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You grab the cable. The wind tears at your hands.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The hook swings wild in the storm. You catch it. You stretch out over the parapet -- ten stories of nothing beneath your feet -- and you catch the cable on the hook at the top of the tower.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">Below, the DeLorean begins to move.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">10:04 PM. The clock hands are there. The DeLorean accelerates. 30 mph. 50. 70. 88.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">LIGHTNING STRIKES THE ROD.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">1.21 gigawatts crackle down the cable to the DeLorean at the exact moment it hits 88 miles per hour. The flux capacitor activates. Two parallel lines of fire appear on the street. At the end of the fire trails: nothing. The car is gone. Marty McFly is going home.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"white\">Doc Brown climbs down from the clock tower in the rain. He is grinning.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " connects the cable to the lightning rod as the DeLorean hits 88 mph below. Lightning strikes. Two fire trails mark the street. The car is gone.", user.UserId());

    if (user.GetMiscCharacterData(EASTER_KEY) != "found") {
        user.SetMiscCharacterData(EASTER_KEY, "found");
        user.GrantXP(300, "lightning strike -- sent Marty home");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+300 XP -- you sent him home)</ansi>");
    }

    // Quest completion
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (step != "complete") {
            user.SetMiscCharacterData("bttf_quest_step", "complete");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have seen everything. George and Lorraine at the dance. Doc in his garage. The clock tower in the storm. Marty going home.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Quest complete: Back to the Future</ansi>");
            user.GrantXP(5500, "Back to the Future quest");

            var souvenir = CreateItem(245);
            if (souvenir) {
                user.GiveItem(souvenir);
                SendUserMessage(user.UserId(), "<ansi fg=\"itemname\">You find a small flux capacitor keychain in your pocket. It pulses with a faint Y-shaped glow.</ansi>");
            }
            user.SetMiscCharacterData("souvenir_back_to_the_future", "collected");
        }
    }
}
