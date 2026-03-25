// Six Feet Under - The Open Road (secret)
// Room 2233
var LIBRARY_ROOM = 3;

function onEnter(user, room) {
    if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_road")) {
        user.SetMiscCharacterData("sfu_quest_road", "done");

        var allDone = user.GetMiscCharacterData("sfu_quest_arrangement") &&
                      user.GetMiscCharacterData("sfu_quest_prep") &&
                      user.GetMiscCharacterData("sfu_quest_kitchen") &&
                      user.GetMiscCharacterData("sfu_quest_cemetery");

        if (allDone) {
            user.GrantXP(5000, "Six Feet Under complete");
            var souvenir = CreateItem(300);
            user.GiveItem(souvenir);
            user.SetMiscCharacterData("souvenir_six_feet_under", "collected");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The quest is complete. You have walked through the Fisher house. You have sat at the kitchen table. You have stood at the grave. You have seen the prep room and the slumber room and the arrangement room where families make impossible choices. You have found the road. The road is here. It is real. As a keepsake of your time with the Fishers, a funeral program has appeared in your inventory.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest Complete: Six Feet Under. +5000 XP. Received: a Fisher and Sons funeral program.)
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have found the open road. The quest advances -- but there are still places in the Fisher house you have not been.</ansi>");
        }
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">The road is forward. The morning sky is pink and then blue. The music is playing. You know what happens next -- you have seen the flash-forwards, the quick cuts that show everyone's last moment, the whole family, all of them, going the way everything goes. You know this. And right now the road is empty and the music is playing and the sky is turning and you are in the car and you are alive. Right now. Right now. You are alive.</ansi>");
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The open road recedes. The morning sky fades. The music stops. The Grand Library comes back to you, warm and quiet and full of stories that have not ended yet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " turns around on the open road and fades back.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drive" || cmd == "forward" || cmd == "go") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You drive. The road goes forward. The mountains are there. The sky is blue now, fully, the morning pink burned off. You drive and the road goes and you do not stop. This is what it is to be alive and moving: you are here, and then you are here, and then you are here, and the road keeps going. You keep going. Right now. Right now.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("mirror") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The rearview mirror: LA receding. The Fisher house somewhere in it, getting smaller. Nate, David, Ruth -- all of them somewhere back there, alive right now, in their versions of right now. You know what happens to all of them. You have seen it. The flash-forwards come in quick cuts and you know. But right now the mirror shows them living. You look away from the mirror. The road is forward.</ansi>");
        return true;
    }

    if (cmd == "listen" || (cmd == "look" && rest.indexOf("music") >= 0) || cmd == "sing") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The music is barely there -- something by Sia, a voice in the space between speech and singing, just this side of breaking. You cannot quite hear the words. It does not matter. The music is the feeling of the drive, the feeling of moving, the feeling of being alive and in motion, which is the only feeling there is. Right now.</ansi>");
        return true;
    }

    return false;
}