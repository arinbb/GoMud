
// On the Road - The Road South (Toward Mexico)
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The California highway folds back into a paragraph, the olive groves into a clause, the oil derricks into words. The hot wind through the window becomes a breeze of turning pages. You are back in the Grand Library, the book in your hands, the road south still warm in your feet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes into the heat shimmer on the highway and returns to the pages of the novel.", user.UserId());
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
