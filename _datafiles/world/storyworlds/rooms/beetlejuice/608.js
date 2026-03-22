
// Master Bedroom - mirror easter egg, face-pulling
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Your reflection in the vanity mirror waves goodbye as the bedroom dissolves around you. You're back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the vanity mirror and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // EASTER EGG: Looking in the mirror shows something wrong
    if (cmd == "look" && rest.indexOf("mirror") >= 0) {
        var looked = user.GetTempData("mirror_count");
        if (looked == "") { looked = 0; } else { looked = parseInt(looked); }
        looked = looked + 1;
        user.SetTempData("mirror_count", String(looked));

        if (looked == 1) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You gaze into the vanity mirror. Your reflection stares back. Normal enough. But... did your reflection just blink a half-second after you did?</ansi>");
        } else if (looked == 2) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look in the mirror again. This time you're sure of it -- your reflection's smile is slightly wider than yours. And its eyes are tracking something behind you. You turn around. Nothing's there. When you look back, the reflection shrugs.</ansi>");
        } else if (looked == 3) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The mirror again. Your reflection is wearing different clothes than you are -- a black-and-white striped suit. It winks. Then it's you again, wearing what you've always been wearing. Your heart is hammering.</ansi>");
            user.GrantXP(300, "mirror easter egg");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look in the mirror. Your reflection raises an eyebrow, as if to say, 'Haven't you seen enough?' Then it goes back to mimicking your movements. Mostly.</ansi>");
        }
        return true;
    }

    // EASTER EGG: Try to pull your face (like the Maitlands do in the film)
    if (cmd == "pull" && rest.indexOf("face") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You grab your own face and pull. For a terrifying moment, it STRETCHES -- your nose extends, your jaw drops impossibly low, your eyes bug out like a cartoon character. You look in the mirror and see a grotesque mask of your own features.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Then it snaps back to normal with a rubbery THWACK. That... should not have been possible. But then again, this is Beetlejuice's world.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pulls their own face into an impossible shape, then lets it snap back to normal. The mirror seems impressed.", user.UserId());
        user.GrantXP(200, "face pulling easter egg");
        return true;
    }

    // Look in closet for wedding hatbox detail
    if (cmd == "look" && rest.indexOf("closet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You rummage through the closet. Adam's flannels smell like sawdust. Barbara's cardigans smell like lavender. On the top shelf, a hatbox labeled \"WEDDING\" contains a pressed flower, a garter, and a Polaroid of Adam and Barbara on their wedding day. They look so happy. So alive.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {
    if (!UtilIsDay()) {
        var messages = [
            "The vanity mirror reflects the room, but the shadows in the reflection are deeper, darker, and there's one more shadow than there should be.",
            "Barbara's quilt pulls itself up to the pillows. Tucks itself in. The bed looks slept-in by morning.",
            "The closet door opens wider. In the darkness inside, hangers sway on their own."
        ];
        var pick = Math.floor(Math.random() * messages.length);
        // 40% chance to show a night message vs normal idle
        if (Math.random() < 0.4) {
            room.SendText(messages[pick]);
            return true;
        }
    }
    return false;
}
