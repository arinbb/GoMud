// Tass Times in Tonetown -- The Dungeon (2462)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dungeon fades. The grey walls go white go nothing. You are back in the Arcade, carrying the memory of Gramps looking up from his papers with the expression of a man who believed rescue would come and was right.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the dungeon, the sound of Gramps' quiet thanks fading with them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "free" || cmd == "rescue" || (cmd == "open" && rest.toLowerCase().indexOf("cell") >= 0) || (cmd == "unlock" && rest.toLowerCase().indexOf("bar") >= 0)) {
        if (user.GetMiscCharacterData("easter_tass_rescue") != "found") {
            user.SetMiscCharacterData("easter_tass_rescue", "found");
            user.GrantXP(250, "freed Gramps from the dungeon");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The cell lock is simple. Too simple, almost -- Snotty did not expect anyone to make it this far, so he did not invest in the door. You work the mechanism and the bars swing open. Gramps steps out into the dungeon with the bearing of a man who has been waiting for this moment and has used the waiting well. He shakes your hand. He looks at the papers on the floor, decides they are no longer necessary, and turns toward the laboratory door. 'I need to see what he did to my hoop specs,' he says. 'And possibly break his ray.' He pauses. 'Did you already break his ray?' He smiles when you tell him. 'Good. I heard that. Come on.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP -- freed Gramps from the dungeon)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens the cell bars and Gramps steps out into the dungeon with the dignity of a man who spent his captivity productively.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">Gramps is already free. He nods at you warmly. His papers are spread in a pile on the floor -- he has transcended the need for them.</ansi>");
        }
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("paper") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The dungeon papers are Gramps' work-product from captivity. Pages of dimensional theory, notes on improving the hoop, a detailed diagram of the untass ray based on what he could hear of its sound from down here, and extensive notes titled: WHAT FRANKLIN SNARL GOT WRONG AND WHY. The last notes are personal: 'I am not angry. I am disappointed. The whole point of Tonetown was that it was wonderful. He cannot see that anymore. I would feel sorry for him if he weren't holding me prisoner and destroying a city.' Below that: 'Also the food here is terrible. Grey. Obviously.'</ansi>");
        return true;
    }

    return false;
}
