
// World 1-1 Start - Entry room for Super Mario Bros zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_super_mario_bros";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You insert the cartridge. The screen fills with blue sky and green ground. A small man in a red hat appears, and the most famous four notes in gaming history play: dun dun dun DUN. The pixels expand. The pixels are everywhere. You are standing on brown brick in the most famous place in gaming history. World 1-1. Start.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.HasQuest(210) == false) {
        user.GiveQuest(210);
        user.Command("queststart 210");
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The blue sky and green ground pixelate and dissolve. The music descends one last note. The cartridge slot opens. You are back in the Arcade, the game disc warm in your hand, the cheerful primary colors fading from your vision.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates briefly, a shimmer of primary colors, then is gone -- back to the Library.", user.UserId());
        user.SetTempData("visited_super_mario_bros", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "jump" || cmd == "hit" || cmd == "punch") && (rest.indexOf("block") >= 0 || rest == "")) {
        if (user.GetMiscCharacterData("mario_block_hit") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hit a question mark block from below. A coin pops out with a bright ding! It spins in the air and vanishes. Satisfying every time.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " punches a question mark block. A coin pops out with a bright ding!", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("mario_block_hit", "true");
        user.GrantXP(100, "hitting your first question mark block");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You punch upward at a floating question mark block. It vibrates with a satisfying thunk and a gold coin pops out, spinning in the air -- ding! -- before vanishing. You feel the 100-coin count somewhere in your bones. You feel it updating. This is the best feeling in the world.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+100 XP for hitting your first block in the Mushroom Kingdom!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " punches a question mark block from below. A coin pops out with a bright ding!", user.UserId());
        return true;
    }

    return false;
}
