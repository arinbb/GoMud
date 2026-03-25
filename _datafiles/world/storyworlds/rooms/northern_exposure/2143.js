// Northern Exposure - Ruths General Store
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bell above the store door rings once as you go. Ruth-Anne looks up from her book and nods -- she knew you were leaving before you did. The store fades, shelves and stove and all, back into the warm dark of the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of the store. The bell rings. Ruth-Anne nods.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "browse" || cmd == "read") {
        var booksRest = rest ? rest.toLowerCase() : "";
        if (booksRest.indexOf("book") >= 0 || booksRest.indexOf("shelf") >= 0 || booksRest.indexOf("shelves") >= 0 || rest === "" || cmd === "browse") {
            if (user.GetMiscCharacterData("easter_ne_browse") != "found") {
                user.SetMiscCharacterData("easter_ne_browse", "found");
                user.GrantXP(100, "browsed the shelves of Ruths General Store");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You drift along the shelves of Ruths General Store, pulling out spines at random: Chekhov next to a box of drill bits. Sartre between two cans of beans. A paperback of 'The Snow Leopard' with a Cicely library card still tucked inside. The books Ruth-Anne stocks are the books the town needs, and somehow the town always knows which ones those are. You feel something settle in you -- the specific peace of being among shelves of good books in a warm room when it is cold outside.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- browsed the shelves of Ruths General Store)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You browse the shelves again, comfortable in the warm store. The books are still here, exactly where Ruth-Anne put them, exactly where someone needs them.</ansi>");
            }
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    return true;
}
