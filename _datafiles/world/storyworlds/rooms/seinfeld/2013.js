
// Seinfeld - The Chinese Restaurant
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The restaurant dissolves. The waiting area, the list, the host -- all of it fades. The Grand Library receives you, and there is no wait.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the Chinese restaurant, still without a table.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "sit" || cmd == "order") {
        var waitCount = user.GetTempData("seinfeld_wait_count");
        if (!waitCount) {
            waitCount = 0;
        }
        waitCount = waitCount + 1;
        user.SetTempData("seinfeld_wait_count", waitCount);

        var msgs = [
            "The host assures you it will be five to ten minutes. You accept this. It is a reasonable wait.",
            "Five minutes have passed. Or maybe fifteen. The host says: just a few more minutes.",
            "The host calls a name. It is Cartwright. Nobody responds. He calls it again. Nobody responds. You think: who is Cartwright. He never comes.",
            "A table opens up. You watch it happen. Someone else is seated at it. It was not your turn. The logic is unclear.",
            "You have been here long enough that the fish in the tank have looked at you multiple times. The fish have opinions about you now.",
            "The host looks at the list. He looks at you. He writes something down. You are still standing here.",
            "A party of two is seated immediately. They arrived after you. This is simply how this restaurant works and there is no recourse."
        ];
        var msgIdx = Math.min(waitCount - 1, msgs.length - 1);
        var baseMsg = msgs[msgIdx];

        if (user.GetMiscCharacterData("seinfeld_chinese") != "done") {
            user.SetMiscCharacterData("seinfeld_chinese", "done");
            user.GrantXP(150, "Waiting at the Chinese restaurant");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + baseMsg + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: The wait continues.)</ansi>");
            if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q5")) {
                user.SetMiscCharacterData("seinfeld_q5", "done");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Waited at the Chinese restaurant.)</ansi>");
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + baseMsg + "</ansi>");
        }
        return true;
    }

    if (cmd == "ask" || (cmd == "say" && rest.indexOf("name") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You approach the host. He holds up a hand without looking at you. He is on the phone. He will be on the phone for another several minutes. You return to your position in the waiting area. Your position has been taken. There is nowhere to stand that is not slightly wrong.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    user.SetTempData("seinfeld_wait_count", 0);
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You enter the Chinese restaurant and give your name to the host. He writes it down. He says: five to ten minutes. You wait near the bench. The bench is full. You stand.</ansi>");
    return false;
}
