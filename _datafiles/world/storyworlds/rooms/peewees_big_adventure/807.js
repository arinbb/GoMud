
// The Alamo - basement easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Alamo's limestone walls dissolve like sandcastle in the rain. The Texas heat fades, replaced by the cool air of the Grand Library. You still can't find that basement.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " remembers the Alamo one last time, then vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // EASTER EGG: Search for the basement
    var target = rest.toLowerCase();
    if (cmd == "search" || cmd == "find" || cmd == "look") {
        if (target.indexOf("basement") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You search desperately for any sign of a basement -- pulling on sconces, pressing bricks, tapping the floor for hollow spots, checking behind every display case and historical plaque.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A tour guide watches you with a mixture of pity and exasperation. She walks over, places a hand on your shoulder, and says firmly:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">\"There's no basement at the Alamo.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " frantically searches the Alamo for a basement that does not exist.", user.UserId());

            if (user.GetMiscCharacterData("easter_peewee_basement") != "found") {
                user.GrantXP(200, "Alamo basement easter egg");
                user.SetMiscCharacterData("easter_peewee_basement", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">You earned 200 XP for discovering the truth about the Alamo's basement!</ansi>");
            }
            return true;
        }
    }

    return false;
}
