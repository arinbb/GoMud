// Far Cry 5 - Holland Valley
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return false;
    }
    var data = user.GetMiscCharacterData("fc5_quest_holland");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_holland", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Holland Valley. The golden wheat. The silos. John Seed's YES written on everything in sight. The valley is beautiful and occupied and you are here now, which changes the balance of the equation slightly.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The golden wheat dissolves in a shimmer of warm light. The YES on the silos fades last. The Grand Library settles around you, its shelves replacing the valley walls.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the wheat shimmer of a late summer valley, gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("silo") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The YES on the silo face, ten feet high in black paint. John Seed's signature. His demand. His theology in three letters that he has distributed across Holland Valley until the valley itself seems to be saying it. You look at the mountains beyond the silo. The mountains are not saying YES. The mountains are not saying anything.</ansi>");
        return true;
    }

    return false;
}
