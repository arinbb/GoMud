
// Billy Madison - Academic Decathlon Stage
// Easter egg: "answer" or "industrial revolution" -- 250 XP
// Quest completion room
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(410) && !user.GetMiscCharacterData("billy_madison_quest_complete")) {
        user.SetMiscCharacterData("billy_madison_quest_complete", "done");
        user.SetMiscCharacterData("souvenir_billy_madison", "collected");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have reached the stage. The whole journey has led here -- the mansion, elementary school, the playground, middle school, high school, and now the Academic Decathlon. The bleachers are full. Frank Madison is watching from the front row. Veronica is watching. Carl is watching.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest complete: Billy Madison.</ansi>");
        user.GrantXP(4500, "Billy Madison quest complete");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+4500 XP)</ansi>");
        var souvenir = CreateItem(325);
        if (souvenir) {
            user.GiveItem(souvenir);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Carl pushes through the crowd and presses a brown paper lunch bag into your hands. Your name is written on it in crayon. There is a star near the top. You can feel the sandwich inside. And the note.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(You receive: a lunch bag with a note from Carl)</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The decathlon stage dissolves -- the lights, the bleachers, the banner. Billy stands at his podium for a moment, looking directly at you, and gives you a thumbs up with total sincerity. Then the whole scene collapses into warm film grain and the Grand Library returns.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the decathlon stage. Billy gives them a thumbs up.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "answer" || cmd == "industrial" || (rest.toLowerCase().indexOf("industrial") >= 0) || (cmd == "say" && rest.toLowerCase().indexOf("industrial") >= 0)) {
        var key = "billy_madison_decathlon_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step to the podium. The moderator reads the question. The entire gymnasium is silent.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"The Industrial Revolution. Beginning in Great Britain in the late eighteenth century, the shift from agrarian, handicraft economies to manufacturing and machine production. Driven by coal, steam, and the cotton gin. The displacement of labor, the rise of the factory, the birth of the modern city. Child labor. Engels. The seeds of Marxism right there in the textile mills. It changed everything. EVERYTHING.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The gymnasium explodes. The bleachers shake. Frank Madison's entire board of directors is on its feet. Veronica is standing. Carl has his arms in the air. The banner sways. The scoreboards flip. MADISON.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " answers the decathlon question about the Industrial Revolution. The gymnasium erupts.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(250, "decathlon answer easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP -- Knowledge is power.)</ansi>");
        }
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("shampoo") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Shampoo is better. I go on first and clean the hair. Conditioner is better. I leave the hair silky and smooth. Oh, really, fool? Really?\" You have recited the shampoo bottle argument from memory. The moderator waits patiently. Eric Gordon stares. This is not a question on the test. But it's true.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " recites the shampoo bottle argument at the academic decathlon podium.", user.UserId());
        return true;
    }

    return false;
}
