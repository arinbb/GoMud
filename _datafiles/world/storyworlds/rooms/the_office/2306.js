// The Office - The Conference Room
// EASTER EGG: say "that's what she said" -- 200 XP
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("office_visited_conference")) {
        user.SetMiscCharacterData("office_visited_conference", "yes");
        user.Command("quest 380 3", 0.5);
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You step out of the conference room into the bullpen and from there back through reception to the lobby, back through the screen, back to the Grand Library. The TEAMWORK poster watches you go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " excuses themselves from the meeting and slips out the conference room door.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Easter egg: that's what she said
    if (cmd == "say" && (rest.toLowerCase().indexOf("that's what she said") >= 0 || rest.toLowerCase().indexOf("thats what she said") >= 0)) {
        if (user.GetMiscCharacterData("office_easter_twss") != "found") {
            user.SetMiscCharacterData("office_easter_twss", "found");
            user.GrantXP(200, "That's what she said");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say it. Perfectly. At exactly the right moment -- or possibly no moment in particular, which is also Michael's preferred technique. For one suspended second the conference room is quiet, and then a ripple of recognition moves through the imaginary meeting around you. Somewhere, Michael Scott feels a tremor of pride he cannot explain.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">That's what she said. Michael would be so proud. (+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " delivers the joke at the exact right moment. Or the exact wrong moment. It is the same moment.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You say it again. The conference room absorbs it. Michael's spirit is satisfied but not surprised -- once you know the joke, you will always know the joke.</ansi>");
        }
        return true;
    }

    return false;
}
