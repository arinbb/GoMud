
// The Hidden Camp - quest step trigger room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (!user.HasQuest(220)) {
        return true;
    }
    var step = user.GetMiscCharacterData("quest_220_step");
    if (!step) {
        step = "0";
    }
    if (step == "5") {
        user.SetMiscCharacterData("quest_220_step", "6");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You settle into the camp. Hayduke hands you a beer without ceremony. Bonnie looks up from her journal and gives you the look she gives everyone who has earned their place here. The fire is low, the stars are out, the maps are spread on the flat rock. For a moment, in the smoke and the starlight and the smell of sage and campfire, the gang is complete. The dam is still standing. The work is not finished. But tonight, in this hidden place in the canyon, it feels possible.</ansi>");
    }
    return true;
}
