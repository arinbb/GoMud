
// On the Road - The Road West (Nevada Desert)
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The desert dissolves at high speed, red and sage blurring into white. The Hudson's engine fades to silence. Dean's voice cuts off in the middle of a sentence about time, and the sentence becomes a line of text on a page, and the page becomes the book in your hands, and you are back in the Grand Library, the desert still in your eyes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs at speed and vanishes into the desert horizon, returning to the pages of the novel.", user.UserId());
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
