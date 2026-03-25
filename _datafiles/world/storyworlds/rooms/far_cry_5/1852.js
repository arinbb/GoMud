// Far Cry 5 - The Veterans Center
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return true;
    }
    var data = user.GetMiscCharacterData("fc5_quest_veterans");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_veterans", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The Veterans Center. Red light everywhere. The music barely audible and already in your chest. Jacob Seed is here, cleaning a rifle with the patience of someone who understands that most problems yield to patience. You understand why soldiers follow him. That doesn't make anything about this room better.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The red light dims. 'Only You' fades on its endless loop, the Platters carrying one last note out of the Veterans Center and into nothing. Jacob Seed watches you go with no expression at all. The Grand Library is warm and yellow and has no red light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the Veterans Center in a flicker of red light, carried off on the last note of a love song.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || (cmd == "hear" && rest.indexOf("music") >= 0) || (cmd == "listen" && rest.indexOf("music") >= 0)) {
        var easterKey = "fc5_easter_onlyyou";
        var easterDone = user.GetMiscCharacterData(easterKey);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stop and listen. 'Only You' by the Platters, the original 1955 recording, playing from the speakers at a volume designed to be felt as much as heard. The harmonies are beautiful. The song is about love — real, straightforward, romantic love. Jacob has taken it and made it a trigger. He has made the most direct expression of human longing into a signal to kill. The song is not responsible for this. The song is still beautiful. That makes it worse.</ansi>");
        if (easterDone != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(300, "Heard Jacob's conditioning song");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">(+300 XP — The Conditioning)</ansi>");
        }
        return true;
    }

    if (cmd == "sit" && rest.indexOf("chair") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You sit in one of the conditioning chairs. The screen in front of you is dark. The headphones in the headrest carry only the ambient sound of the room. Nothing happens. Nothing happens to you right now. You understand, sitting here, how it would work: the repetition, the music, the images, the reward and punishment, the rebuilding. You understand how it would work because you understand how it has worked. On the people in this building. On the wolves outside. You stand up quickly.</ansi>");
        return true;
    }

    return false;
}
