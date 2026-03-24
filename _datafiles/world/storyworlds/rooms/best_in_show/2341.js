// Best in Show -- Registration Hall (2341)
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        var step = user.GetMiscCharacterData("bis_quest_step");
        if (step == "" || step == null || step == "0") {
            user.SetMiscCharacterData("bis_quest_step", "1");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: Best in Show -- You have registered at the hall. Explore the grooming area, the show ring, and meet the judge.)</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The registration hall dissolves. The bulletin boards, the corridor, the handlers moving in all directions -- all folding back into film. The Grand Library settles around you, quiet and un-fluorescent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the bulletin board and through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("board") >= 0 || cmd == "read" && rest.indexOf("board") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The live results board: Sporting Group winner -- Vizsla. Hound Group winner -- Bloodhound. Working Group winner -- Standard Schnauzer. Terrier Group -- not yet posted. The marker pen sits uncapped on the ledge, ready for the next update. The Best in Show line is blank. It will not be blank for much longer.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("lost") >= 0 || cmd == "look" && rest.indexOf("note") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The handwritten note reads: HAS ANYONE SEEN A BLACK LEATHER SHOW LEAD WITH A BRASS CLIP? INITIALS J.H. INSIDE LOOP. VERY IMPORTANT. Below it someone has helpfully added: FOUND IT -- C.W. The crisis has passed.</ansi>");
        return true;
    }

    return false;
}
