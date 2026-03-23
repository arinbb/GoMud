// Up in Smoke - The Van
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The warm organic haze of the van rises and sweetens and then resolves into the dusty amber air of the Grand Library. The engine note fades. The body panels dissolve. You are back, and the air outside seems thin by comparison.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens the van door and steps into air that is less interesting and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        if (user.GetMiscCharacterData("uis_van_smell_easter") != "found") {
            user.SetMiscCharacterData("uis_van_smell_easter", "found");
            user.GrantXP(200, "appreciated the van");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You breathe in deeply. The van smells like cedar, like soil after rain, like something green and resinous and ancient. Your thoughts soften pleasantly. The body panels seem to breathe in time with you. You feel, genuinely and profoundly, that everything is going to be fine. <ansi fg=\"10\">(+200 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " breathes in the van deeply and smiles with the slow certainty of someone who has just understood everything.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "You breathe in again. The van is still doing its thing. Everything is still fine.");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return false;
}
