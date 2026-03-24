// Idiocracy -- The Dust Bowl (2482)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The dead fields and the Brawndo sprinklers fade to white and you are back in the Screening Room. The projector clicks its last click. The screen goes blank. You stand in the Screening Room and you feel the specific weight of having been there -- of having seen the fields and the dead soil and the sprinklers ticking in their patient circuit and the crops that are not growing and the sky that is the color of old concrete. You think about how every step of it was someone making the reasonable choice given what they knew. You think about that for a while.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the dust bowl and returns to a building with working books.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "water" || (cmd == "pour" && rest.toLowerCase().indexOf("water") >= 0) || (cmd == "use" && rest.toLowerCase().indexOf("water") >= 0)) {
        handleWaterMoment(user, room);
        return true;
    }

    if (cmd == "dig" || cmd == "kneel" || cmd == "touch") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You crouch and touch the soil. It crumbles between your fingers. It is not simply dry. It has been saturated with electrolytes for so long that nothing can grow in it. The chemistry is wrong at a fundamental level. You close your hand around a handful of it. It sits in your palm -- inert, patient, dead. The solution to this is water. The solution to this has always been water. The solution to this will continue to be water and nobody in 2505 has access to that solution except in their toilets.</ansi>");
        return true;
    }

    return false;
}

function handleWaterMoment(user, room) {
    var key = "easter_idiocracy_water";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pour water on the soil again. The Brawndo sprinkler ticks around and sprays electrolytes on the same patch. The soil takes the water. Something is still happening in there. It is small but it is happening.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(300, "THE moment -- water on the crops");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find a water source -- a rusty standpipe near the field edge, a remnant of the original irrigation system that predates the Brawndo Agricultural Takeover of 2192. You turn the valve. The pipe groans. Old water moves through old pipes that have not carried water in a very long time. Then it comes -- actual water, brownish, then clearing, then flowing clean from the pipe to the soil. You water the crops. You pour water on dead things. The Brawndo sprinkler ticks around and mists the same patch with electrolytes. You water it again. The soil is dark where you poured. The soil takes the water. It has been waiting for water for longer than anyone alive can remember and it still knows what to do with water. That is the thing about the right thing -- it works even when it has been waiting a very long time. Eventually something will grow here. Not today. But eventually. Plants do not crave electrolytes. Plants crave water. This has always been true.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+300 XP: You watered the crops. With water. As they were meant to be watered.)</ansi>");

    var step = user.GetMiscCharacterData("idiocracy_quest_step");
    if (user.HasQuest(460) && step == "5") {
        user.SetMiscCharacterData("idiocracy_quest_step", "6");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The standpipe runs for a long time. The soil darkens and the cracks close slightly with moisture and somewhere in the dead geometry of the old furrows something ancient and patient stirs. You cannot see it yet. But the soil remembers. Joe Bauers knew it would. You leave the Dust Bowl with Brawndo on your shoes and water on your hands and the particular satisfaction of having done the right thing in a place that had forgotten what the right thing was. In your pocket, cold and dented, a can of Brawndo -- a souvenir from a future that does not have to end this way. Not anymore.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest complete: Idiocracy! +5000 XP. You received a can of Brawndo.)</ansi>");
        user.GrantXP(5000, "Completed: Idiocracy");
        user.GiveItem(CreateItem(350));
        user.SetMiscCharacterData("souvenir_idiocracy", "collected");
    }

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds a standpipe and pours actual water on the dead fields. The soil darkens. Something shifts.", user.UserId());
}
