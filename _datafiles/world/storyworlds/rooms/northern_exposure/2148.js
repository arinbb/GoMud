// Northern Exposure - The Wilderness
var LIBRARY_ROOM = 3;

function onEnter(user, room) {

    // Quest step 4: explore the wilderness
    if (user.HasQuest(340) && !user.GetTempData("ne_wilderness")) {
        user.SetTempData("ne_wilderness", "visited");
        user.Command("questadvance 340");
    }

    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wilderness fades. The spruce trees, the river-sound, the impossible sky -- all of it dissolves like the edge of a dream you had somewhere very far north. The Screening Room closes around you, warm and still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the forest trail, there and then not there, the trees indifferent.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var lookRest = rest ? rest.toLowerCase() : "";
        if (lookRest.indexOf("sky") >= 0 || lookRest.indexOf("aurora") >= 0 || lookRest.indexOf("lights") >= 0 || lookRest.indexOf("northern") >= 0) {
            if (!UtilIsDay()) {
                if (user.GetMiscCharacterData("easter_ne_aurora") != "found") {
                    user.SetMiscCharacterData("easter_ne_aurora", "found");
                    user.GrantXP(250, "witnessed the northern lights over Alaska");
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look up at the Alaskan sky and the northern lights are there -- really there, not a photograph or a description but the actual event. Green ribbons fold and brighten over the mountain peaks. A cyan band pulses slowly east to west. The mathematics of charged particles and magnetic fields producing this, which does not make it less than what it is: the most beautiful thing in the visible world right now, happening above you, for no reason at all except physics and the particular angle of this planet toward the sun. You stand very still. The cold does not matter. The mountains watch. The lights continue.</ansi>");
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP -- witnessed the northern lights)</ansi>");
                } else {
                    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The northern lights fold and shift over the mountains -- green and cyan, slow and vast. You have seen them before. They are no less extraordinary for that.</ansi>");
                }
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The daytime sky over Cicely is vast and blue, streaked with high cloud. Beautiful in its way, but the aurora needs the dark. Come back at night.</ansi>");
            }
            return true;
        }
    }

    return false;
}
