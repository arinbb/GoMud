
// The Bookshelf
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You climb back down from the bookshelf, back to the floor of the great green room, back to the scale of chairs and kittens and a fire that is lower than it was. The books diminish behind you to their ordinary shelf-height. The room welcomes you back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends from the bookshelf and fades back toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        var titles = [
            "<ansi fg=\"10\">You pull out the green-spined volume. Its title, when you look at it directly, reads 'A Great Long Sleep.' The text inside consists of a single sentence, repeated on every page in slightly different handwriting: the night is warm and the moon is up and everything is in its place. You close it carefully. You feel rested.</ansi>",
            "<ansi fg=\"blue\">The blue volume falls open to the dried flower's page. The text there is a list -- but the list items keep changing. First it says: moon, stars, room. Then: mittens, kittens, mush. Then: you, here, now. You close it before it finishes listing things.</ansi>",
            "<ansi fg=\"11\">The large brown book is very heavy. You manage to open it to the bookmarked page. It is the last chapter. The last sentence of the last chapter is: and the room was quiet, and it was very late, and everyone slept.</ansi>"
        ];
        var pick = Math.floor(Math.random() * titles.length);
        SendUserMessage(user.UserId(), titles[pick]);
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a book from the shelf and reads a little.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("down") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">From up here, the great green room is a contained world -- small enough to hold in one eye, warm enough to feel from a distance. The fire is a small amber square. The chair rocks. The red balloon, seen from above, is perfectly circular, a tiny drop of red against the green. The window holds its moon. You could memorize this view. You could keep it.</ansi>");
        return true;
    }

    return false;
}
