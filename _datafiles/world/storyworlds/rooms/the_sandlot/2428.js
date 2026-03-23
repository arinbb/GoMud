// The Sandlot -- Mr. Mertles Porch (2428)
// EASTER EGG: ask mertle about baseball -> 250 XP (the Babe Ruth reveal)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Mr. Mertle nods once in your direction, as if he can feel you leaving. The porch and the wisteria and the amber glow of the radio fade. You are back in the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says goodbye to Mr. Mertle and disappears from the porch in a shimmer of summer light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" && (rest.toLowerCase().indexOf("baseball") >= 0 || rest.toLowerCase().indexOf("babe") >= 0 || rest.toLowerCase().indexOf("ruth") >= 0 || rest.toLowerCase().indexOf("mertle") >= 0)) {
        var key = "sandlot_egg_mertle";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(250, "Mr. Mertle's Babe Ruth story");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Mr. Mertle is quiet for a long time. The radio plays. The wisteria moves in the slight breeze. Then he says: I played with Babe Ruth once. Exhibition game, 1936. He shook my hand before the game and said, Son, it don't matter where you come from or what they tell you. The game is the game. He signed a ball for me. He said, This one's yours. I still have it. He points at the house. Through the window you can see a glass case on the mantle, and inside it, a baseball with faded blue ink. One of the all-time greats, he says, and he shook my hand.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens to Mr. Mertle tell a story. The radio goes quiet for a moment, as if it is listening too.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Mr. Mertle smiles. You already know the story. He doesn't need to tell it twice. Some things you only need to hear once to carry them forever.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "4") {
                user.SetMiscCharacterData("sandlot_quest_step", "5");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You met Mr. Mertle.)</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Mr. Mertle reaches inside and brings out a baseball, scuffed and worn, the signatures long rubbed away from a thousand games. He holds it out toward you. Take it, he says. Every ball's got a story. That one's got more than most.</ansi>");
                user.GiveItem(CreateItem(340));
                user.GrantXP(5000, "Completed: The Sandlot");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest complete: The Sandlot! +5000 XP. You received a scuffed baseball.)</ansi>");
                user.SetMiscCharacterData("souvenir_the_sandlot", "collected");
            }
        }
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the porch steps. Mr. Mertle doesn't say anything. The radio plays. The Beast shifts somewhere in the yard. The wisteria smells like the end of summer. You stay for a while. It is exactly enough.</ansi>");
        return true;
    }

    return false;
}
