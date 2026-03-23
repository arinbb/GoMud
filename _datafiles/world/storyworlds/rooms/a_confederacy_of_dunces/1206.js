
// Dorian's Party - return handler + dance easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candles gutter, the mirrors go dark, and Dorian's party fades like champagne bubbles rising and popping in the air. The guests become characters on a page, their laughter becomes punctuation, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " catches the light of a hundred candles, fragments into reflections across the mirrors, and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You attempt to dance. The guests watch with a mixture of fascination and alarm. You are reminded of the time Ignatius J. Reilly himself attempted to dance at one of Dorian's parties -- a spectacle of flailing limbs, heaving bulk, and absolute conviction that would have been tragic if it were not so magnificently, catastrophically funny. The guests applauded, though whether from appreciation or self-defense was never clear. Your own attempt is somewhat more restrained but no less entertaining to the assembled company.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dances with an enthusiasm that the assembled guests find either inspiring or terrifying.", user.UserId());

        if (user.GetMiscCharacterData("dunces_dance") != "found") {
            user.SetMiscCharacterData("dunces_dance", "found");
            user.GrantXP(150, "dancing at Dorian's party");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 150 XP for channeling the spirit of Ignatius on the dance floor. Fortune's wheel turns for those who dare to move. ]</ansi>");
        }

        return true;
    }

    return false;
}
