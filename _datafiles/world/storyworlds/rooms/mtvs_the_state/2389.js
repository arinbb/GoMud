// MTVs The State - The Awards Show (2389)
// Quest step 5 (final): witness the awards show — grants souvenir
// Easter egg: 'accept' or 'speech' => 200 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(420) && user.GetMiscCharacterData("the_state_quest_awards") != "done") {
        user.SetMiscCharacterData("the_state_quest_awards", "done");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">An envelope is opened at the podium. A name is read. The audience applauds. Something is given to someone for having done it. This is the awards show. You have witnessed it.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Witness the awards show.)</ansi>");
        user.Command("quest", 0);

        if (user.GetMiscCharacterData("the_state_quest_pudding") == "done" &&
            user.GetMiscCharacterData("the_state_quest_barrel") == "done" &&
            user.GetMiscCharacterData("the_state_quest_race") == "done") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have done it. You stood in the MTV studio and felt the voltage of eleven people making exactly the thing they wanted to make. You visited the pudding. You understood the barrel. You watched porcupines race with the focus of a true believer. And now you have witnessed the awards show.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">A single pudding cup materializes in your hands, chocolate flavor, with $240 written on the lid in Sharpie. It is one of many. There are always more. That is the whole point.</ansi>");
            user.GrantXP(4000, "completing MTVs The State");
            var pudding = CreateItem(330);
            user.GiveItem(pudding);
            user.SetMiscCharacterData("souvenir_mtvs_the_state", "collected");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The stage lights dim as you exit. The Grand Library. You were in the audience and then you were in the library. Something was given and received while you were there.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the awards show. The audience applauds briefly in their direction.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "accept") {
        var key = "the_state_awards_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You walk to the podium. The audience watches. The microphone is live.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You say: \"I want to thank everyone who believed in me. Also everyone who didn't — you know who you are, and so do I, and the difference is that I'm up here now and you are out there.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The audience applauds. You take your award. It is heavier than you expected. All the good ones are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes the podium and accepts the award with a speech of genuine feeling.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "awards show easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">(+200 XP — Well deserved.)</ansi>");
        }
        return true;
    }

    if (cmd == "speech") {
        var key2 = "the_state_awards_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You step forward and give a speech. It is not prepared. It is the best speech you have ever given. The words come from somewhere you did not know you had access to. The audience listens with the full attention of an audience that knows it is hearing something real.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gives an impromptu speech. The audience gives it the silence it deserves.", user.UserId());
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(200, "awards show easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">(+200 XP — The speech was everything.)</ansi>");
        }
        return true;
    }

    return false;
}
