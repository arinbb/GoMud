
// Outside D.H. Holmes - Entry room for A Confederacy of Dunces zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The humid air shimmers and the words of the novel swirl around you like a hot breeze off the Mississippi. Canal Street dissolves into sentences, the neon signs become punctuation marks, and the smell of Lucky Dogs fades into the smell of old paper and binding glue. You are back in the Grand Library, the book closed in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the heat haze, dissolves into a swirl of words and sentences, and vanishes back to the Library.", user.UserId());
        user.SetTempData("visited_a_confederacy_of_dunces", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_a_confederacy_of_dunces";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The pages of the book flutter open and the words rise off the paper like steam from a New Orleans sidewalk after rain. The humid air hits you first -- thick, warm, carrying the smell of chicory coffee and Lucky Dogs and the faint sweetness of Dr. Nut soda. Then the sounds: streetcar bells, jazz from somewhere nearby, the murmur of a city that has been talking to itself for three hundred years. You are standing on Canal Street in the early 1960s. A large man in a green hunting cap glares at you with magnificent disdain.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}
