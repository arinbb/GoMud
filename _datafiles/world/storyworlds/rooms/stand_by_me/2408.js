// Stand By Me -- The Campfire (2408)
// ZONE COMMANDS: sing / lollipop (easter egg, 200 XP)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The campfire coals dim. The stars overhead close. The clearing fades. You are back in the Grand Library, with the smell of pine smoke still on your jacket.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pulled back from the campfire like a dream ending.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing") {
        handleSinging(user, room);
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("lollipop") >= 0) {
        handleSinging(user, room);
        return true;
    }

    if (cmd == "lollipop") {
        handleSinging(user, room);
        return true;
    }

    return false;
}

function handleSinging(user, room) {
    var key = "easter_sbm_campfire";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You start singing and Vern joins in immediately, like he has been waiting all night for someone to start.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "the campfire song");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Gordie starts it. Just a few words -- lollipop, lollipop, oh lolly lolly -- and Vern picks it up instantly, and Teddy, and then Chris, and then it is all four of them singing a dumb pop song by a campfire in the Oregon woods at midnight in 1959, and it is not dumb at all.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">The woods hold the sound. The fire coals pulse. The stars are out in enormous numbers. You are twelve years old and your friends are singing and tomorrow you will find the body of a dead boy and the summer will end and everything will start to change. But right now there is just the fire and the song and the dark, and it is enough. It is more than enough.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You sang by the campfire.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " starts singing, and around the campfire, all four boys join in. The sound carries into the dark woods.", user.UserId());
}
