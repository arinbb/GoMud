
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
