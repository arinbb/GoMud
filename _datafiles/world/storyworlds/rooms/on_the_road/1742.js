
// On the Road - The George Washington Bridge
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bridge cables sing one last chord in the river wind and then fall silent as the sentences dissolve around you. The Hudson fades. The city fades. The enormous dark continent on the other side of the bridge folds itself back into the pages where it waits for the next reader. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the bridge lights and vanishes back into the pages of the story.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}
