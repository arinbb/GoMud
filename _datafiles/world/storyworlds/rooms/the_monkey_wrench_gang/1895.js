
// The Final Standoff - quest completion trigger
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
        return false;
    }
    var step = user.GetMiscCharacterData("quest_220_step");
    if (step == "6") {
        user.SetMiscCharacterData("quest_220_step", "done");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The canyon goes dark. Bishop Love lowers his binoculars for just a moment to radio his position, and in that moment -- as the last light drains from the canyon walls and the stars come on overhead and the desert becomes what it has always been when humans are not imposing their light on it -- you slip into the crack in the wall that only someone who has been paying attention would see. The canyon swallows you. It has been swallowing people for ten thousand years and it is very good at it. Behind you, Bishop Love's radio crackles. He will find the campfire ash. He will find the beer cans. He will find the empty space where the gang was. He will find, eventually, that the desert is bigger than his certainty. You are already gone.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Quest complete: The Monkey Wrench Gang. You have survived the desert and the standoff. You receive a monkey wrench and the understanding that some fights are worth losing slowly.</ansi>");
        user.GiveItem(CreateItem(230));
        user.GrantXP(5000, "The Monkey Wrench Gang");
    }
    return false;
}
