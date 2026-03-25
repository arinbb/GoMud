// The Office - Schrute Farms
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("office_visited_farm")) {
        user.SetMiscCharacterData("office_visited_farm", "yes");

        // Check if all steps done and give final quest completion
        var michael = user.GetMiscCharacterData("office_visited_michael");
        var conference = user.GetMiscCharacterData("office_visited_conference");
        var roof = user.GetMiscCharacterData("office_visited_roof");
        if (michael && conference && roof) {
            user.Command("quest 380 complete", 1.0);
            user.SetMiscCharacterData("souvenir_the_office", "collected");
        } else {
            user.Command("quest 380 5", 0.5);
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You leave Schrute Farms the way you came, north through the warehouse bay. The beet fields watch you go, patient and productive.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks north off the Schrute Farms property toward the warehouse loading bay.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && rest.indexOf("beet") >= 0 || cmd == "pick" && rest.indexOf("beet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pull a beet from the ground. It is heavy and dark and earthy and smells like a farm that has been here for generations. You eat it. It tastes like something honest. Dwight watches from three rows over, says nothing, and counts it against your visit total.</ansi>");
        return true;
    }

    return false;
}
