
// On the Road - Times Square at Night
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon signs of Times Square dim one by one, their colors bleeding into the white space of the page. Carlo Marx's voice fades into a sentence, then a word, then silence. The city dissolves into chapters and you are back in the Grand Library, the book warm from your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the neon-lit crowd and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
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
