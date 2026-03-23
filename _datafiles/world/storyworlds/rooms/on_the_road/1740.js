
// On the Road - Sal's Apartment, New York (entry room)
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold-water flat dissolves into sentences — Sal's sentences, breathless and rushing, carrying you back through the pages. The typewriter fades. The letter from Dean fades. The New York cold fades. The warm smell of old paper and binding glue rises around you, and you are back in the Grand Library, the paperback closed in your hand.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the cold New York air and vanishes back into the pages of the story.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("letter") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read Dean's letter. It is six pages long and covers three subjects simultaneously. It talks about a car. It talks about Marylou. It talks about IT, the thing Dean is always trying to articulate, the thing that is happening now and now and now and if you could only get moving fast enough you could catch it and hold it. The handwriting slants forward as if the words are trying to outrun the pen.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Reading it, you feel the pull west. The whole country waiting. The road waiting. Dean waiting, probably laughing, probably already in the car, already going.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads the letter from Dean, and their expression shifts from stillness to something like motion.", user.UserId());
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {

    if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You open the book and a blast of cold New York air rushes past, carrying the sound of jazz, car horns, and Dean Moriarty laughing somewhere in the American night. The prose rises off the page in jazz-rhythm sentences — long, breathless, refusing to stop — and you are standing in a cold-water flat in Manhattan in 1947, a letter from Denver open on the kitchen table, the typewriter waiting. The road begins here. It always begins here.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}
