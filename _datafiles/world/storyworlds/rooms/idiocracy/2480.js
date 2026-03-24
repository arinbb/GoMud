// Idiocracy -- The Stadium (2480)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The roar of a hundred thousand people fades as the projection light evens out and you step back through the screen into the Screening Room. The silence is enormous. Your ears ring with Brawndo sponsorships and Beef Supreme announcing. You are back in the Library where the most violent thing that happens is a book falling off a shelf and you find this adequate. More than adequate. You find it extremely and specifically adequate.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the stadium before rehabilitation is complete.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fight" || cmd == "rehabilitate" || (cmd == "say" && rest.toLowerCase().indexOf("rehabilitat") >= 0)) {
        handleRehabEasterEgg(user, room);
        return true;
    }

    return false;
}

function handleRehabEasterEgg(user, room) {
    var key = "easter_idiocracy_rehab";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Beef Supreme announces your return. The crowd remembers you. The crowd liked you the first time. The monster truck revs.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "Monday Night Rehabilitation");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the arena and Beef Supreme's voice detonates across the stadium: 'LADIES AND GENTLEMEN -- WELCOME TO MONDAY NIGHT REHABILITATION --' and the crowd ERUPTS and the monster truck revs and the dildo launcher tracks toward you and the mattress pit is right there and a hundred thousand people are on their feet screaming and you realize that this is the most popular form of entertainment in 2505 and the contestant before you was a man who said plants need water instead of Brawndo. Beef Supreme announces your name. He gets it wrong but confidently. The crowd does not care about the name. The crowd cares about the launcher. The launcher fires. You run for the mattress pit. You make it. A hundred thousand people cheer. Even in 2505, making it to the mattress pit feels like winning something.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You survived Monday Night Rehabilitation.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the arena. Beef Supreme announces them. The crowd approves.", user.UserId());
}
