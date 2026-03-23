
// Jurassic Park - The Brachiosaurus Meadow
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_brachio")) {
        user.SetMiscCharacterData("jp_quest_brachio", "true");
        // Quest step 2: Witness the Brachiosaurus
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: You have witnessed the Brachiosaurus.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A Brachiosaurus neck swings between you and the sun, casting a total eclipse, and in the shadow the meadow dissolves into film grain. When the light returns it is the warm amber of the Grand Library reading lamps. The Brachiosauruses are gone. The wonder isn't.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is eclipsed by a Brachiosaurus shadow and vanishes from the meadow.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "touch" || (cmd == "pet" && (rest.indexOf("brachiosaurus") >= 0 || rest.indexOf("dinosaur") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You reach out as the Brachiosaurus swings its head low. Your hand makes contact with the jaw — warm, rough-textured, dry despite the tropical air, the skin pulled tight over bone and muscle. The animal does not react to you at all. You are too small to notice. The jaw moves as it chews, a massive lateral grind, and you feel the vibration in your palm. You pull your hand back. You are shaking a little.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches out and touches the jaw of the Brachiosaurus as it passes.", user.UserId());
        return true;
    }

    if (cmd == "feed" && (rest.indexOf("brachiosaurus") >= 0 || rest.indexOf("dinosaur") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You hold out whatever you have to offer. The Brachiosaurus's neck swings down, and its head — the size of a refrigerator — descends toward your hand. It sniffs. It is not interested. It is eating trees. Your offering is not in the same category as a tree. The head swings away. You are not offended. You are too busy being alive in this moment to feel anything as small as offense.</ansi>");
        return true;
    }

    return false;
}
