
// The Geographers Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leave the Geographer to his records. The books dissolve. The deserts and mountains and rivers he mapped persist, indifferent to being recorded.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps away from the maps and dissolves into starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("rose") >= 0 || rest.indexOf("ephemeral") >= 0 || rest.indexOf("flower") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Geographer looks up. 'Roses? We do not record ephemeral things. Mountains. Seas. Deserts. These we record. A rose might be gone tomorrow.' He pauses. 'A rose is not permanent.' You think about that. About things that are not permanent. About whether things that are not permanent matter more or less because of it. The Geographer has already returned to his work.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("book") >= 0) || (cmd == "look" && rest.indexOf("map") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open one of the geography books. Inside: meticulous maps of asteroids and planets you have never heard of, their mountains given precise elevations, their rivers traced to their sources, their deserts measured to the square meter. All of it recorded from the reports of travelers the Geographer trusted. None of it from personal observation. The world, you think, contains more than what can be reported.</ansi>");
        return true;
    }

    if (cmd == "report") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Geographer looks up with interest. 'You are an explorer? What have you found?' You describe the Sahara desert, the well, the rose garden, the fox. He writes it down carefully. 'Remarkable. And are there any permanent geological features?' You describe the three volcanoes on B-612. He writes that down too, with satisfaction. He does not ask about the rose.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_geographer") != "yes") {
        user.SetMiscCharacterData("lp_visited_geographer", "yes");
        user.Command("quest advance 230");
    }
    return true;
}
