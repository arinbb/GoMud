
// ZONE COMMANDS: paint roses (104), play croquet (104), run (104), bow/kneel (104), argue (104)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The painted roses begin to peel from their bushes, each petal becoming a page that swirls around you. 'Off with -- oh, where did they go?' you hear the Queen shout as the garden fades and the Library materializes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed by a whirlwind of rose petals and pages, vanishing from Wonderland.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "paint" && rest.indexOf("ros") >= 0) {
        var easterKey = "wonderland_roses";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "painting the roses red");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You grab a brush and help paint the roses red. The Five of Spades gives you a grateful look. Quickly now, he whispers, before the Queen sees the white ones! Red paint splatters your hands.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — Painting the roses red.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You paint more roses. The cards nod gratefully. The Queen is none the wiser.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " joins the card gardeners in frantically painting the roses red.", user.UserId());
        return true;
    }

    if (cmd == "run") {
        var easterKey3 = "wonderland_run";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(150, "running from the Queen");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You run. The Queen shouts something behind you. The card soldiers give chase with the focused intensity of people who have been given very clear instructions about what happens if they don't catch you. You make it to the hedges, duck through a gap, and emerge exactly where you started. Wonderland does not reward running. It rewards navigating. These are not the same thing.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Escape is relative here.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You run again. You end up in the same place. The Queen watches you arrive, having already been here. 'That was very energetic,' she says. 'Off with your --' She pauses. 'Actually, try running that way next time.'</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bolts through the garden, loops through the hedges, and arrives back exactly where they started.", user.UserId());
        return true;
    }

    if (cmd == "bow" || cmd == "kneel" || cmd == "curtsy") {
        var easterKey4 = "wonderland_bow";
        if (user.GetMiscCharacterData(easterKey4) != "found") {
            user.SetMiscCharacterData(easterKey4, "found");
            user.GrantXP(100, "bowing to the Queen");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You bow deeply to the Queen. She examines you with the expression of someone who expected a worse bow and is mildly disappointed to be denied. 'Satisfactory,' she says finally. 'You may keep your head today. I have re-evaluated the situation and your head is more interesting where it currently is.' She sounds vaguely annoyed by this conclusion.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- Your head remains attached. For now.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You bow again. The Queen nods once. 'Better,' she says. This is the greatest compliment you will ever receive from this particular monarch.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bows to the Queen of Hearts.", user.UserId());
        return true;
    }

    if (cmd == "argue") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You begin to argue with the Queen. She listens for exactly two seconds with an expression of growing amazement. Then: 'OFF WITH --' then a pause, as if consulting an internal list. 'No. I shall let you finish. This is worse.' You finish. She considers. 'WRONG,' she announces. 'OFF WITH --' She is distracted by a hedgehog. You take the opportunity to stop arguing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " argues with the Queen. It goes about as well as expected.", user.UserId());
        return true;
    }

    if (cmd == "play" && rest.indexOf("croquet") >= 0) {
        var easterKey2 = "wonderland_croquet";
        if (user.GetMiscCharacterData(easterKey2) != "found") {
            user.SetMiscCharacterData(easterKey2, "found");
            user.GrantXP(150, "playing croquet with the Queen");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You attempt to play croquet. Your flamingo twists its neck to look at you reproachfully. The hedgehog uncurls and wanders away. The Queen somehow hits the ball through three hoops at once.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP — Off with their heads!)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You play another round. The flamingo is no more cooperative than before.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " attempts a game of Wonderland croquet with predictably chaotic results.", user.UserId());
        return true;
    }

    return false;
}
