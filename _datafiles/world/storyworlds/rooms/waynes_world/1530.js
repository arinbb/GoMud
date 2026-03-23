
// Wayne's World - Benjamin's Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The minimalist office crumbles into film grain with quiet corporate dignity. Benjamin watches you go with professional acceptance. The library is everything this room is not.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from Benjamin's office. He makes a note of it.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("contract") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the contract. It is dense, legal, and thorough. It acquires Wayne's World and repackages it as the property of a corporation. It strips out everything that makes it excellent and replaces it with synergy. You close it.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Benjamin: \"I think you'll find everything in order.\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads Benjamin's contract and visibly loses some innocence.", user.UserId());

        // Quest step 6: Survive Benjamin's corporate takeover attempt
        if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step6")) {
            user.SetMiscCharacterData("ww_quest_step6", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Survived Benjamin's corporate takeover attempt.)</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("television") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The TV plays Wayne's World footage on loop. Wayne is laughing at something off-camera. Garth is drumming on his knees. It is a completely joyful, completely genuine thing. Benjamin watches it with the flat assessment of an appraiser.</ansi>");
        return true;
    }

    return false;
}
