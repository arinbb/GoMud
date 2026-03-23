// The Office - The Kitchen
// EASTER EGG: 'make chili' or 'spill chili' -- 200 XP (Kevin's Famous Chili)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take a last cup of coffee and head east back into the bullpen. The fluorescent lights welcome you back with their endless hum.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a cup of coffee from the pot and heads east into the bullpen.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Easter egg: make chili
    if (cmd == "make" && rest.indexOf("chili") >= 0) {
        if (user.GetMiscCharacterData("office_easter_chili") != "found") {
            user.SetMiscCharacterData("office_easter_chili", "found");
            user.GrantXP(200, "Kevin's Famous Chili");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find Kevin's recipe pinned inside the cabinet -- a card written in Kevin's careful, large handwriting. You follow every step. You reduce the garlic. You add the celery salt at exactly the right moment. The kitchen fills with the smell of Kevin's Famous Chili, and it is extraordinary, and then -- you are carrying it to the conference room -- and -- you are not sure exactly how -- the pot tips. The chili goes everywhere. The carpet. The hallway. Your shoes. Kevin appears in the doorway and his face does something very complicated.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You have made, and immediately spilled, Kevin's Famous Chili. He is never going to forgive you, but he understands. He really does. (+200 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You have already made Kevin's Famous Chili once. You have already spilled it once. The carpet remembers. Kevin has forgiven you, but the carpet has not.</ansi>");
        }
        return true;
    }

    // Easter egg: spill chili
    if ((cmd == "spill" && rest.indexOf("chili") >= 0) || cmd == "chili") {
        if (user.GetMiscCharacterData("office_easter_chili") != "found") {
            user.SetMiscCharacterData("office_easter_chili", "found");
            user.GrantXP(200, "Kevin's Famous Chili");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Kevin's Famous Chili is right there on the counter, a full pot he brought in this morning. He spent all night on it. The secret is he undercooks the onions, adds a little soy sauce, and you will never fully understand what he does to the chili but it is perfect. You reach for it. You are not sure what happens next. The pot goes. The chili goes everywhere. Kevin is in the doorway holding his car keys and his expression is a whole season of television.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You have spilled Kevin's Famous Chili. This is one of the great tragedies of the Dunder Mifflin Scranton office. Kevin accepts this. He has accepted many things. (+200 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You've already spilled the chili. The damage is done. Kevin is at peace with it. Or he says he is.</ansi>");
        }
        return true;
    }

    return false;
}
