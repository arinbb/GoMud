// Up in Smoke - The Border Crossing
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent inspection lights blur and warm. The border agent squints, then squints at nothing. The Grand Library closes around you, smelling of paper and quiet. You have crossed the border of the story.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is waved through the border crossing and does not come back.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "act" && rest.indexOf("cool") >= 0) {
        if (user.GetMiscCharacterData("uis_actcool_easter") != "found") {
            user.SetMiscCharacterData("uis_actcool_easter", "found");
            user.GrantXP(200, "acted cool at the border");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You act incredibly cool. The Border Guard squints at you. You smile. The smile is the smile of a person with absolutely nothing to declare. The Guard writes something on his clipboard, pauses, then waves you through. That is how it is done. <ansi fg=\"10\">(+200 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " acts extremely cool. The Border Guard is briefly uncertain.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "You act cool again. The Border Guard has seen cool before. He has his eye on you.");
        }
        return true;
    }

    if (cmd == "smile") {
        if (user.GetMiscCharacterData("uis_smile_easter") != "found") {
            user.SetMiscCharacterData("uis_smile_easter", "found");
            user.GrantXP(200, "smiled at the border");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You smile at the Border Guard. It is the smile of total innocence, total relaxation, total confidence in the goodness of the world. He stares at you for a long three seconds. Then he steps back and waves the van through. Confidence is a document. <ansi fg=\"10\">(+200 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " smiles at the Border Guard with total serene confidence. He waves the van through.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "You smile again. The Border Guard has seen your smile. He is still not sure about it.");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (user.HasQuest(320) && !user.GetTempData("uis_border")) {
        user.SetTempData("uis_border", "visited");
        user.Command("questadvance 320");
    }

    return true;
}
