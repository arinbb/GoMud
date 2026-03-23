// Northern Exposure - The Radio Station KBHR
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ON AIR light dims. The microphone goes quiet. The vinyl slows on its spindle. The KBHR booth dissolves back into the warm dark of the Screening Room, Chris Stevens still talking somewhere in the signal you are leaving behind.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out like the end of a broadcast -- signal gone, but something left behind in the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || cmd == "broadcast") {
        if (user.GetMiscCharacterData("easter_ne_radio") != "found") {
            user.SetMiscCharacterData("easter_ne_radio", "found");
            user.GrantXP(200, "tuned in to KBHR");

            // Quest step 2: tune in to KBHR
            if (user.HasQuest(340) && !user.GetTempData("ne_radio")) {
                user.SetTempData("ne_radio", "listened");
                user.Command("questadvance 340");
            }

            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ON AIR light comes on. Chris leans into the microphone, and his voice goes out across Cicely and the mountains and the forty miles of spruce forest in every direction:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">\"Good morning, Cicely. This is Chris Stevens, and you are listening to K-Bear. I have been thinking this morning about Thoreau -- who went to the woods to live deliberately, to confront the essential facts of life. And I want to ask you something. Not Thoreau, but you. You who are driving to the post office or warming your hands at the stove or sitting in the practice of a doctor who came here thinking it was a detour and is beginning to suspect it might be the road. Are you living deliberately? Are you here on purpose? Because Alaska has a way of stripping the accidental out of a person. The cold is not interested in your hesitations. The dark is not waiting for you to decide. You are here. You showed up. That is, my friends, the whole move.\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- tuned in to KBHR)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The signal goes out across Cicely. Chris's voice fills the small station with something about Whitman and the wilderness and the particular loneliness that is also a kind of company. You listen for a while.</ansi>");
        }
        return true;
    }

    return false;
}
