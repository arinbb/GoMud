
// Forbidden Planet - The Monster Attack Site
// Quest step 6: witness the monster attack
// Easter egg 5: "look ground" or "look tracks" -> invisible footprint scene, 150 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scorched desert peels away in burning frames. The alien sky rolls up like a window shade. The Grand Library is below you, then around you, then home.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " burns away like a footprint in the scorched earth, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("ground") >= 0 || rest.indexOf("track") >= 0 || rest.indexOf("footprint") >= 0 || rest.indexOf("print") >= 0)) {
        var easterKey = "fp_easter_tracks";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "finding the invisible monster's footprints");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You crouch over the melted depressions in the desert floor. Each one is roughly the size of a large cart wheel -- roughly, because they are not circular and not any shape you can name with confidence. The edges are fused glass, meaning they formed under enormous heat and pressure. They are spaced about fifteen feet apart.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">Something walked here. Something of enormous weight. But the footprints -- if that is what they are -- are not deep enough for the weight they imply. As if whatever made them was not entirely present in the physical world. As if it was half made of something else. Energy, perhaps. Or thought.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The track leads from the dark of the open desert directly to the force field perimeter, where it stops. The monster did not turn back. It pressed against the field. You can see where the field anchor burnt the soil black. The monster stood there -- for hours -- and waited. Then it was gone. As if whoever was dreaming it woke up.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- You read the ground. The invisible monster leaves visible traces.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The footprints are still there, glassy and inexplicable. Fifteen feet apart. Each one the size of a wagon wheel. Each one formed by something that was not entirely here. You know what made them now. The knowledge does not make them less terrible.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " crouches over the strange depressions in the desert floor, examining them carefully.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q6_attack") != "done") {
        user.SetMiscCharacterData("fp_q6_attack", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The evidence of the attack is all around you. Something came here. Something invisible and enormous. It killed two men.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have witnessed the aftermath of the monster attack.)</ansi>");
    }
    return true;
}

function onIdle(room) {
    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 8);
    if (roll == 1) {
        SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">The air pressure changes suddenly. Something enormous moves through the space above you -- you feel displaced air, you feel weight -- but you see nothing. The crystalline plants nearby shatter. The ground dents. Then it is gone.</ansi>", -1);
        return true;
    }

    return false;
}
