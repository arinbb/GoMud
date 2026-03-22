
// The Biker Bar - Tequila dance easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bikers, the smoke, and the menace dissolve around you. The jukebox plays one last note of 'Tequila' before fading to silence. You're back in the Grand Library, safe and un-pummeled.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " moonwalks out the door and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // EASTER EGG: Dance to Tequila
    if (cmd == "dance" || cmd == "tequila") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You walk to the jukebox with the confidence of someone who has nothing left to lose. You drop in a quarter. The opening bars of 'Tequila' by The Champs begin to play.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You start dancing. Not just any dance -- THE dance. Your feet shuffle, your hips swivel, your arms pump. The bikers stare in disbelief. One of them puts down his pool cue. Another sets down his beer.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">By the second chorus, they're tapping their boots. By the bridge, three of them are dancing too. By the time the song hits the final 'TEQUILA!' the entire bar is on its feet, dancing with reckless, joyful abandon.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">\"TEQUILA!\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drops a quarter in the jukebox and performs the legendary Tequila dance. The whole bar joins in!", user.UserId());

        if (user.GetMiscCharacterData("easter_peewee_tequila") != "found") {
            user.GrantXP(200, "Tequila dance easter egg");
            user.SetMiscCharacterData("easter_peewee_tequila", "found");
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">You earned 200 XP for performing the Tequila dance!</ansi>");
        }
        return true;
    }

    return false;
}
