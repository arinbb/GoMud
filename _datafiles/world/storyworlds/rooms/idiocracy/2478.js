// Idiocracy -- The Oval Office (2478)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("idiocracy_quest_step");
    if (step == "4" || step == "3" || step == "2" || step == "1") {
        user.SetMiscCharacterData("idiocracy_quest_step", "5");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You met President Camacho.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Oval Office fades. The chrome desk and the wrestling belt and the monster trucks on the screens dissolve into projection white and you are back in the Screening Room. You think about the Oval Office as you saw it today -- the shape the same, the flags the same, the authority of the room somehow intact despite everything done to it. There are some shapes that hold their gravity even when everything around them gives up. You are not sure if that is hopeful or worse than hopeless. Probably one of those.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the seat of executive power and returns to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fire" || cmd == "shoot" || (cmd == "use" && (rest.toLowerCase().indexOf("rifle") >= 0 || rest.toLowerCase().indexOf("gun") >= 0 || rest.toLowerCase().indexOf("weapon") >= 0))) {
        handleFireEasterEgg(user, room);
        return true;
    }

    if (cmd == "sit" && rest.toLowerCase().indexOf("desk") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit at the MAXIMUM POWER DESK. The chrome is cold. The Brawndo inlay catches the light. The folder labeled TOP SEECRET is right there. You open it. It contains a photo of a monster truck. There is a caption on the photo that reads: THE FUTURE. You close the folder. You have looked at the future. The future is a monster truck. You sit with this for a moment.</ansi>");
        return true;
    }

    return false;
}

function handleFireEasterEgg(user, room) {
    var key = "easter_idiocracy_fire";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Camacho fires again. The ceiling takes it. Order is achieved. Camacho looks satisfied. He always looks satisfied after this.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(250, "Camachos rifle moment");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say something about firing or reach for the weapon rack and President Camacho is suddenly right there, and he takes the assault rifle from the rack, and he points it at the ceiling, and he fires it into the Oval Office ceiling with the particular controlled authority of a man who has discovered that this works better than a gavel. The sound is enormous. Plaster falls. Everyone in the room goes absolutely silent. Camacho lowers the weapon. He adjusts his fur coat. He says, with complete sincerity: 'NOW. I KNOW YOU REAL FRUSTRATED RIGHT NOW. I KNOW YOU SCARED. BUT WE GOT THIS. JOE IS GONNA FIX EVERYTHING.' He believes this. He believes every word of this. That is the thing about President Camacho -- he is not cynical. He is genuinely trying. In 2505 that is enough to get elected and not quite enough to fix anything else.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP: You witnessed the rifle moment.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is present when Camacho fires a weapon into the Oval Office ceiling. Order is achieved.", user.UserId());
}
