// Victory Mansions - Entry room for Nineteen Eighty Four zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_nineteen_eighty_four";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The pages of the book feel thin as onionskin beneath your fingers. Then the flat materializes around you: grey walls, grey light through grey windows, the smell of gin and boiled cabbage and something else, something that has no name but means surveillance. The telescreen on the wall is already watching. It has been watching since before you arrived. A man at the table looks up with carefully blank eyes. You are in Airstrip One, London, Oceania. The year is 1984. It is always 1984 here.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">(Type 'return' at any time to go back to the Grand Library. Speak carefully.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The grey walls of Victory Mansions shimmer and thin. The telescreen's voice fades to a hum, then to nothing. The smell of gin dissipates into the smell of old paper and binding glue. You are back in the Grand Library, the book closed in your hands. Your face is carefully neutral. You have learned that much, at least.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grows pale as dishwater, dissolves into grey static, and vanishes back to the Library.", user.UserId());
        user.SetTempData("visited_nineteen_eighty_four", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
