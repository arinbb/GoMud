
// Spider's Glade - return handler + cut webs easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The webs dissolve into threads of silver text. The spiders shrink into punctuation marks. The glade folds itself into a page and the page into a book, and you are back in the Grand Library, brushing phantom cobwebs from your shoulders.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cuts through the webs with a flash of light and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "cut" && rest.indexOf("web") >= 0) || (cmd == "free" && rest.indexOf("dwarf") >= 0) || (cmd == "free" && rest.indexOf("dwarves") >= 0)) {
        if (user.GetMiscCharacterData("hobbit_freed_dwarves") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You slash at the webs again, but the dwarves have already been freed. The spiders hiss with frustration from the canopy. You have already proven your courage here.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("hobbit_freed_dwarves", "true");
        user.GrantXP(200, "freeing the dwarves from spider webs");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You draw your blade and slash at the nearest bundle of silk. The webs part like butter. A dwarf tumbles out, sputtering and furious, covered in sticky silk. You cut another, and another. The spiders shriek and charge, but you stand your ground, blade flashing, and they fall back, hissing. This is the moment. This is where Bilbo Baggins stopped being a grocer and became a burglar, a barrel-rider, and a hero.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You name your blade. You call it Sting.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for finding your courage in the spider's glade!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slashes through the spider webs with heroic determination, freeing the trapped dwarves one by one!", user.UserId());
        return true;
    }

    return false;
}
