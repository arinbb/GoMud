
// ZONE COMMANDS: eat mushroom (101), smoke/breathe (101), grow/shrink (101), sit acorn (101), ask caterpillar (101)
// Mushroom Forest - return handler + atmospheric interactions
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The mushroom spores swirl around you, each one carrying a letter. The letters form words, the words form pages, and the pages fold themselves into a book that closes with a gentle snap. You are back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed by swirling spores and vanishes in a cloud of glittering letters.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && rest.indexOf("mushroom") >= 0) {
        var easterKey = "wonderland_mushroom";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "eating a Wonderland mushroom");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You nibble a piece of mushroom. For a dizzying moment, the world rushes away from you as you grow three feet taller. Then it settles. The effect fades. The Caterpillar watches with mild interest.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — Eat me.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You nibble another piece. The growing and shrinking is less surprising this time. The Caterpillar yawns.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nibbles a piece of mushroom and suddenly shoots upward before shrinking back to normal.", user.UserId());
        return true;
    }

    if (cmd == "grow" || (cmd == "eat" && rest.indexOf("grow") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You eat from the top side of the mushroom. The world drops away below you as you grow -- the spores are now at knee height, the hookah smoke at eye level. The Caterpillar is suddenly eye-to-eye with you and does not look pleased about the change in perspective. Then the effect fades. You resume your usual dimensions. The Caterpillar resumes being above you. Order is restored.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats from the top of the mushroom and briefly towers over the forest.", user.UserId());
        return true;
    }

    if (cmd == "shrink" || (cmd == "eat" && rest.indexOf("shrink") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You eat from the underside of the mushroom. The world towers above you -- the moss is now a forest, the acorns are boulders, and an ant pauses to regard you with something very close to pity. The Caterpillar's hookah smoke passes overhead like low clouds. Then you grow back. The ant does not wait around to see you return. It has places to be.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats from the underside of the mushroom and shrinks to the size of a thimble before growing back.", user.UserId());
        return true;
    }

    if (cmd == "sit" && rest.indexOf("acorn") >= 0) {
        var easterKey3 = "wonderland_acorn";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(100, "sitting on the acorn throne");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit on the great acorn in the moss. It fits perfectly. You look up at the Caterpillar on its mushroom. It looks down at you on your acorn. For a long moment, you regard each other as equals -- two creatures on their respective perches, surrounded by spores, neither entirely sure who they are. The Caterpillar says nothing. That might be the highest compliment available here.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- A moment of genuine mutual incomprehension.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit on the acorn again. The Caterpillar looks at you. You look at the Caterpillar. The question WHO ARE YOU circles the acorn's surface endlessly. Neither of you answers.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the large acorn and gazes up at the Caterpillar thoughtfully.", user.UserId());
        return true;
    }

    if (cmd == "smoke" || cmd == "breathe" || (cmd == "inhale")) {
        var easterKey2 = "wonderland_smoke";
        if (user.GetMiscCharacterData(easterKey2) != "found") {
            user.SetMiscCharacterData(easterKey2, "found");
            user.GrantXP(100, "breathing the Caterpillar's smoke");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You breathe in the hookah smoke drifting down from the mushroom. It forms letters as it enters your lungs -- vowels, mostly. For a moment the world rearranges itself into a question you almost understand. Then it disperses. The Caterpillar does not look up.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- The smoke of a philosophical hookah.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The hookah smoke curls around you again. This time it forms a question mark, then a period. The Caterpillar exhales slowly and looks mildly interested in nothing at all.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " breathes in the hookah smoke and stares into the middle distance thoughtfully.", user.UserId());
        return true;
    }

    return false;
}
