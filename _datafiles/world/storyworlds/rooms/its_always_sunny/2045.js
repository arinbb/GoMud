// The Basement - Charlie Work, rats, quest step
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("sunny_q_basement") != "done") {
        user.SetMiscCharacterData("sunny_q_basement", "done");
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest updated: You have survived the Paddys Pub basement. The rats are real. Everything is real. Charlie works here every day. Let that sink in.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The furnace gives a final groan and the basement dissolves. The rats scatter into the retreating dark. The smell of industrial cleaner fades. Charlie says something behind you as the scene closes — probably something about the Waitress. You are back in the Grand Library and grateful for dry air.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the basement dark as the scene closes, the furnace going silent behind them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
