
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The painted roses begin to peel from their bushes, each petal becoming a page that swirls around you. 'Off with -- oh, where did they go?' you hear the Queen shout as the garden fades and the Library materializes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed by a whirlwind of rose petals and pages, vanishing from Wonderland.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "paint" && rest.indexOf("ros") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You grab a brush and help paint the roses red. The Five of Spades gives you a grateful look. 'Quickly now,' he whispers, 'before the Queen sees the white ones!' Red paint splatters your hands and clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " joins the card gardeners in frantically painting the roses red.", user.UserId());
        return true;
    }

    if (cmd == "play" && rest.indexOf("croquet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You attempt to play croquet. Your flamingo twists its neck to look at you reproachfully. The hedgehog uncurls and wanders away. The Queen somehow hits the ball through three hoops at once, though you suspect the hoops moved to accommodate her.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " attempts a game of Wonderland croquet with predictably chaotic results.", user.UserId());
        return true;
    }

    return false;
}
