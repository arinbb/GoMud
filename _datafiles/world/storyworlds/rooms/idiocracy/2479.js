// Idiocracy -- Congress (2479)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The chamber fades. The painted ceiling allegories are the last thing to go -- Justice and Liberty and Knowledge looking down -- and then it is all projection white and you are back in the Screening Room. You think about the ceiling paintings and the faces on them and whether the painters knew they were creating the faces of things that would someday watch what they watched. Probably not. Probably they just painted what they were told to paint. That is most of history, actually.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the chamber and returns to a building that also has some books about governance.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "speak" || (cmd == "say" && rest.toLowerCase().indexOf("electrolyte") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say something at the podium. The word electrolytes comes out at some point -- either you say it on purpose or you say it by accident because it is in everything -- and the chamber responds. Someone starts applauding. Then more people. Then the whole chamber is applauding and a few people are on their feet and one representative is crying. You have said the word and the word is enough. This is how policy gets made now. You find you cannot be entirely dismissive of it because the applause is real and the people feeling it feel it genuinely and feeling things genuinely is not nothing even when the thing is electrolytes.</ansi>");
        return true;
    }

    if (cmd == "vote") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A vote is called. Everyone raises their hand. You raise your hand. The vote is unanimous. Someone asks what you voted on. Nobody knows for certain but the consensus is it was something about Brawndo, or possibly Joe, or possibly both. It passed. Something always passes. Whether the thing that passes does what the people who voted for it think it does is, in 2505, a separate question that nobody is asking.</ansi>");
        return true;
    }

    return false;
}
