
// The Andy Griffith Show - The Fishing Hole (Myers Lake)
// The most peaceful room in the entire MUD.
var LIBRARY_ROOM = 1;
var QUEST_ID = 310;

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You come around the last bend in the pine road and the lake opens up before you -- dark green water, willow trees trailing their fingers in the surface, the sky doubled in the still water below. The bobbers float on their lines. The lunch pail sits in the shade. The afternoon has been going on for a long time and does not plan to stop. You have arrived at the most peaceful place in the world.</ansi>");
    SendUserMessage(user.UserId(), "");
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fishing hole -- the dark water, the willows, the golden afternoon light -- fades into the warm quiet of the Grand Library. You carry it with you. Everybody who has ever been to Myers Lake carries it with them.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reels in slowly, props the cane pole, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fish" || cmd == "cast" || (cmd == "use" && rest.indexOf("pole") >= 0) || (cmd == "throw" && rest.indexOf("line") >= 0)) {
        var easterKey = "easter_mayberry_fishing";
        var questKey = "andy_quest_fishing";

        if (user.GetMiscCharacterData(easterKey) != "done") {
            user.SetMiscCharacterData(easterKey, "done");
            user.GrantXP(250, "fished at Myers Lake");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up the cane pole, check the hook, swing it back once, and let the line arc out over the dark water. The bobber lands with a soft plop and the rings spread outward and fade and the bobber sits motionless on the still surface. You sit down on the bank. The afternoon holds still around you. You are not thinking about anything. For a moment you are just the fishing pole and the dark water and the long golden light, and that is everything, and that is enough.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " swings a cane pole back and casts their line into the dark water of Myers Lake. The bobber settles on the still surface. They sit down on the bank. Everything stops for a moment in the best possible way.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You cast your line out again. The bobber lands. The rings spread. You sit on the bank and wait. This is the thing about fishing at Myers Lake -- once is never quite enough, and you never run out of the kind of patience this place requires.</ansi>");
        }

        if (user.GetMiscCharacterData(questKey) != "done") {
            user.SetMiscCharacterData(questKey, "done");
            user.Command("quest advance 310", 0);
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(Quest advanced: A Day in Mayberry -- went fishing at Myers Lake)</ansi>");
        }

        return true;
    }

    if (cmd == "sit" || cmd == "rest" || cmd == "wait") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit down on the bank by the water. The grass is soft and the mud is cool. The willow branches trail in the water just to your right. The bobber floats. The heron stands at the far bank doing its work. Everything here is patient and nothing is wrong.</ansi>");
        return true;
    }

    if (cmd == "eat" || (cmd == "open" && rest.indexOf("pail") >= 0) || (cmd == "look" && rest.indexOf("lunch") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the lunch pail. Inside: two sandwiches wrapped in wax paper (chicken salad on white), two oatmeal cookies, and sweet tea. Aunt Bee packed this. You eat one of the sandwiches sitting on the bank. It is, like everything Aunt Bee makes, exactly right.</ansi>");
        return true;
    }

    if (cmd == "whistle") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You whistle the theme, slowly, the way Andy would whistle it on the way to the lake -- not in a hurry, the notes floating out over the water. The heron at the far bank tilts its head. The bobber floats. The afternoon accepts the tune and holds it for a moment before letting it go.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 6);

    if (roll == 1) {
        room.SendText("<ansi fg=\"cyan\">The bobber dips. Just a fraction. You lean forward. Then it steadies. The fish considered it and moved on. That is fine. You have time.</ansi>");
        return true;
    }

    if (roll == 2) {
        room.SendText("<ansi fg=\"10\">A kingfisher dives from the willow branch into the water and comes up with something small and silver and is gone before you fully registered the motion. The lake is back to still. The heron did not even look up.</ansi>");
        return true;
    }

    return false;
}
