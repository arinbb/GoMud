
// On the Road - The Open Highway (Iowa)
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The highway stretches one last time into the dark, and then folds back like a sentence finding its period. The cornfields dissolve into margins. The truck stop light fades. The enormous Iowa sky collapses into the white page and you are back in the Grand Library, the book still open in your hands, the road still humming in your blood.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up in a passing truck's draft and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "hitchhike" || cmd == "thumb") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step to the shoulder of the road and stick out your thumb, the old American gesture of faith — faith that someone is going your way, faith that the country will carry you. A truck slows. The driver leans across and pushes the door open. He smells of coffee and diesel and two thousand miles of road. He says he is going to Denver. He says nothing further, which is perfect. You climb in.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sticks out their thumb at the roadside. A truck slows, the door swings open, and they climb in and are gone.", user.UserId());

        if (user.GetMiscCharacterData("road_hitchhike") != "found") {
            user.SetMiscCharacterData("road_hitchhike", "found");
            user.GrantXP(150, "hitchhiking across Iowa");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 150 XP for the first hitchhike — the act of faith that starts every journey. ]</ansi>");
        }

        user.MoveRoom(1744);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return false;
}
