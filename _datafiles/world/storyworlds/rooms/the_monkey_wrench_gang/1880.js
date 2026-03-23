
// The Lonely Dell - Entry room for The Monkey Wrench Gang zone
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
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">The smell of desert sage hits you first, then dry heat and cold river water together, the paradox of the canyon country. Red rock walls rise around you into an impossibly blue sky, so vertical and so massive that they make you feel the right size for the first time. You are standing at Lees Ferry, at the edge of the Colorado, at the beginning of something that cannot be undone. The year is somewhere in the early 1970s. The dam has already been built. The gang has already been formed. The wrenches are already in hand.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    if (!user.HasQuest(220)) {
        user.GiveQuest(220);
        user.SetMiscCharacterData("quest_220_step", "1");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest started: The Monkey Wrench Gang. Follow the canyon country.)</ansi>");
    }
    return false;
}
