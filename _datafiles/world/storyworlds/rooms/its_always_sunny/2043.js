// The Back Office - scheme central, easter egg room
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("sunny_q_scheme") != "done") {
        user.SetMiscCharacterData("sunny_q_scheme", "done");
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest updated: You have found the scheme whiteboard. The DENNIS System is more elaborate than you expected and somehow worse.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scheme whiteboard blurs as the room dissolves. The arrows and boxes fade to white. The mini-fridge gives a final hum and goes silent. You are back in the Grand Library, and the DENNIS System has followed you home in your memory, which is unfortunate.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears in a shimmer, the whiteboard diagrams fading around them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "scheme" || cmd == "plan") {
        var key = "easter_sunny_scheme";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a marker and add something to the whiteboard. It does not matter what. In this office, everything goes on the whiteboard. The arrows multiply. The boxes proliferate. You have contributed to the ecosystem of delusion. You feel it, somewhere deep — the itch of a scheme forming, the terrible clarity of a bad idea taking shape. The Gang would be proud.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Added to the scheme whiteboard");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+200 XP: Always Sunny in a Scheme</ansi>");
        }
        return true;
    }

    return false;
}
