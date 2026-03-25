
// Grandpas Farm - Entry room for Stardew Valley zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_stardew_valley";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You insert the disc and the screen expands outward. Pixel art dissolves into smells: fresh earth, morning dew, wood smoke from a farmhouse chimney. A letter sits on the porch railing. It is addressed to you. The valley is waiting.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        user.GiveQuest(190);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The farm fades into morning light. The smell of fresh earth gives way to the smell of old books. You find yourself back in the Grand Library, the game disc warm in your hand.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers and fades like morning dew, dissolving back through the screen.", user.UserId());
        user.SetTempData("visited_stardew_valley", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "plant" || cmd == "hoe" || (cmd == "till" && rest.indexOf("soil") >= 0)) {
        if (user.GetMiscCharacterData("stardew_farm_planted") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You work the soil again, the rhythm of it settling into something like peace. The fields are taking shape.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " works the soil with steady, practiced effort.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("stardew_farm_planted", "found");
        user.GrantXP(150, "working the farm for the first time");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You take the old hoe from the porch and begin. The first stroke is clumsy. The second is better. By the tenth you have found the rhythm -- the slight resistance of the soil, the satisfying turn when a clod breaks. Weeds come out in clumps. Stones roll aside. What was tangle becomes row. The morning passes. Your back aches. The first parsnip seeds go into the ground with a kind of reverence you didn't expect to feel. Something about this is exactly right.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for your first day of farming!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " spends the morning clearing and planting the overgrown fields, leaving neat rows of turned earth behind.", user.UserId());
        return true;
    }

    return false;
}
