
// Seinfeld - The Festivus Room
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Festivus room dissolves. The pole, the table, the card table -- all of it fades. The Grand Library returns you to its quiet and there are no grievances to air here, or at least none that are formally scheduled.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the Festivus room, having aired their grievances or avoided them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "air" || (rest && rest.indexOf("grievance") >= 0)) {
        if (user.GetMiscCharacterData("seinfeld_festivus") != "done") {
            user.SetMiscCharacterData("seinfeld_festivus", "done");
            user.GrantXP(300, "Festivus - Airing of Grievances");

            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Frank Costanza stands and addresses the room.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"I've got a lot of problems with you people! And now you're gonna hear about it!\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stand at the card table. The pole is behind you. The grievances come.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are disappointed by the people around you. You had certain expectations. Those expectations were not met. The holiday of Festivus provides a formal structure for the acknowledgment of this disappointment, and you use that structure now, fully and without restraint.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">When you are done, Frank nods. This is Festivus. The airing is complete. Now come the Feats of Strength.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+300 XP: Festivus for the rest of us.)</ansi>");

            if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q6")) {
                user.SetMiscCharacterData("seinfeld_q6", "done");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Attended Festivus. The holiday is complete.)</ansi>");
                SendUserMessage(user.UserId(), "");

                var q2 = user.GetMiscCharacterData("seinfeld_q2");
                var q3 = user.GetMiscCharacterData("seinfeld_q3");
                var q4 = user.GetMiscCharacterData("seinfeld_q4");
                var q5 = user.GetMiscCharacterData("seinfeld_q5");

                if (q2 && q3 && q4 && q5) {
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Festivus is complete. A Festivus pole -- a small one, aluminum, unadorned -- materializes in your hands. Frank Costanza would approve.</ansi>");
                    user.GiveItem(CreateItem(260));
                    user.SetMiscCharacterData("souvenir_seinfeld", "collected");
                }
            }

            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " airs their grievances at the Festivus table. Frank Costanza nods with satisfaction.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have already aired your grievances this Festivus. Frank Costanza acknowledges this. The pole stands. The holiday continues into its next phase.</ansi>");
        }
        return true;
    }

    if (cmd == "feats" || (rest && rest.indexOf("strength") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Feats of Strength. Frank Costanza must be pinned to the floor before Festivus can end. Frank squares up. You look at Frank. Frank looks at you. The pole watches from its position at the center of the room, making no comment, being aluminum.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("pole") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Festivus pole. Aluminum, straight, unadorned. High strength-to-weight ratio. No tinsel. Frank Costanza finds tinsel distracting and he is correct. The pole is perfect. The pole is Festivus.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You are in the Festivus room. The pole stands at the center. This is a holiday for the rest of us.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">(Type 'air grievances' to participate in the Airing of Grievances. Type 'feats of strength' for the feats.)</ansi>");
    return false;
}
