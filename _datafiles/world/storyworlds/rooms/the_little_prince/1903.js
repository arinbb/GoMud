
// The Well
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You set the bucket down on the rim and the well, the rope, the desert dissolve into library light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets down the bucket and dissolves into library light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "pull" && rest.indexOf("rope") >= 0) || (cmd == "draw" && rest.indexOf("water") >= 0)) {
        if (user.GetMiscCharacterData("lp_well_water") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You draw another bucket of water. It is still good. It is always good, water drawn this way. The pulley creaks. The desert approves.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws water from the well. The pulley sings.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("lp_well_water", "found");
        user.GrantXP(150, "drawing water from the desert well");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pull the rope. The pulley sings -- a long, sustained, rusty note that carries across the empty desert like a prayer. The bucket rises slowly from the darkness, full of the coldest water you have ever seen. You lift it to your lips and drink. The effort is part of the taste. The walk across the sand is part of it. The early hour is part of it. The stars, fading now but still present, are part of it. This is the finest water you have ever drunk.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for understanding that effort is part of what makes things good.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws water from the well. The pulley sings out across the desert.", user.UserId());

        if (user.HasQuest(230)) {
            user.Command("quest advance 230");
        }
        return true;
    }

    if (cmd == "look" && (rest.indexOf("down") >= 0 || rest.indexOf("well") >= 0 || rest.indexOf("inside") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Far below the stone rim, in the darkness, you see it: a point of light, cold and steady. It is the reflection of a star in the water. The well has been catching starlight for so long that the water has learned to keep it.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_well") != "yes") {
        user.SetMiscCharacterData("lp_visited_well", "yes");
    }
    return true;
}
