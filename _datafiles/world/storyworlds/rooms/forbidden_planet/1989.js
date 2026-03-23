
// Forbidden Planet - The Krell Power Shaft
// Quest step 5: descend the power shaft
// Easter egg 1: "look down" -> vertigo scene, 200 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The shaft's blue-white glow pulses once, twice, three times in rapid succession -- as if the machine is acknowledging your departure. Then the light bends. The Library forms from it, warm and finite and blessedly human in scale.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is released upward by the machine's light, vanishing back toward the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("down") >= 0) {
        var easterKey = "fp_easter_vertigo";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "confronting the depth of the Krell shaft");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look down into the shaft.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Level one. Level two. Levels blurring into one another as the shaft descends. Level fifty. Level two hundred. The blue-white glow intensifies with depth, as if the source is not below you but everywhere, the light itself a product of the structure. Level five hundred. Level one thousand.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scale is wrong. Nothing should be this deep. No mine, no bore, no human structure has ever approached this. The Krell dug through a planet's crust because the planet's crust was in the way. Level three thousand. Level five thousand. The light down there is almost white. Level seven thousand.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Seven thousand eight hundred levels. The heart of the machine is visible as a point of incandescent white, smaller than a star but brighter than the sun of Altair. Morbius told you the output exceeds planetary defense systems. Looking at it, you believe him. Looking at it, you understand why the Krell are gone.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step back from the edge. Your heart is pounding. You are very small. You have always been very small. You just did not know the exact dimensions until now.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- The vertigo of the abyss. Seven thousand eight hundred levels.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look down again. Seven thousand eight hundred levels. The white point at the bottom. You already know the numbers. The numbers do not help.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks down into the shaft and goes very still.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q5_shaft") != "done") {
        user.SetMiscCharacterData("fp_q5_shaft", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have descended into the Krell power shaft.)</ansi>");
    }
    return false;
}
