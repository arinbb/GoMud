// Back to the Future -- Hill Valley Town Square
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The clock tower chimes once, low and resonant. The town square shimmers -- the neon signs stutter, the parked cars lose definition, and the entire wholesome postwar tableau dissolves into the warm golden light of the Grand Library Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a film frame and vanishes from the town square.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (!step || step == "0") {
            user.SetMiscCharacterData("bttf_quest_step", "1");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have arrived in 1955. Hill Valley spreads out around you, scrubbed clean and full of postwar optimism. The courthouse clock tower looms ahead. This is where it all has to happen.</ansi>");
        }
    }
    return false;
}
