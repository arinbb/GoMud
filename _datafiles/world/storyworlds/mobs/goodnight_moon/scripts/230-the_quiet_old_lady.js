
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hush") >= 0 || question.indexOf("quiet") >= 0 || question.indexOf("silent") >= 0) {
        mob.Command("emote stops rocking for a moment, listening.");
        mob.Command("say hush");
        mob.Command("emote resumes her slow rocking.", 1.5);
        return true;
    }

    if (question.indexOf("moon") >= 0) {
        mob.Command("emote turns slightly toward the window, needles pausing.");
        mob.Command("say goodnight moon");
        mob.Command("emote 's needles resume their slow click, as if the moon has been properly addressed.", 2.0);
        return true;
    }

    if (question.indexOf("kitten") >= 0 || question.indexOf("cat") >= 0 || question.indexOf("mitten") >= 0) {
        mob.Command("emote 's lips curve into something that might be a smile.");
        mob.Command("say goodnight kittens. goodnight mittens.");
        mob.Command("emote continues knitting, needles clicking once, twice.", 2.0);
        return true;
    }

    if (question.indexOf("sleep") >= 0 || question.indexOf("bed") >= 0 || question.indexOf("night") >= 0) {
        mob.Command("emote rocks once, very slowly, and looks at you with an expression of great patience.");
        mob.Command("say hush");
        mob.Command("say it is nearly time.", 1.5);
        mob.Command("emote returns to her knitting without urgency.", 2.0);
        return true;
    }

    if (question.indexOf("who") >= 0 || question.indexOf("name") >= 0 || question.indexOf("you") >= 0) {
        mob.Command("emote looks up at you with mild, patient eyes.");
        mob.Command("say hush");
        mob.Command("emote does not answer further. This is an answer.", 2.0);
        return true;
    }

    if (question.indexOf("star") >= 0 || question.indexOf("sky") >= 0) {
        mob.Command("say goodnight stars.");
        mob.Command("emote glances briefly upward, as if she can see through the ceiling to where they are.", 1.5);
        mob.Command("say goodnight air.", 2.0);
        return true;
    }

    if (question.indexOf("fire") >= 0 || question.indexOf("flame") >= 0) {
        mob.Command("emote inclines her head toward the dying fire.");
        mob.Command("say goodnight fire.");
        mob.Command("emote watches the low coals for a moment with great calm.", 1.5);
        return true;
    }

    if (question.indexOf("balloon") >= 0 || question.indexOf("red") >= 0) {
        mob.Command("emote tilts her head upward toward the red balloon near the ceiling.");
        mob.Command("say goodnight red balloon.");
        mob.Command("emote lowers her eyes back to her knitting.", 1.5);
        return true;
    }

    if (question.indexOf("mouse") >= 0) {
        mob.Command("emote glances toward the baseboard, where the mouse presumably is.");
        mob.Command("say goodnight little mouse.");
        mob.Command("emote smiles, just perceptibly.", 1.5);
        return true;
    }

    if (question.indexOf("mush") >= 0 || question.indexOf("bowl") >= 0) {
        mob.Command("say goodnight mush.");
        mob.Command("emote 's needles click twice more, very quietly.", 1.5);
        return true;
    }

    // Default: she says goodnight to whatever they asked about

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

function onIdle(mob, room) {
    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = Math.floor(Math.random() * 8);
    if (roll == 0) {
        var things = ["goodnight room", "goodnight moon", "goodnight stars", "goodnight air", "goodnight noises everywhere", "hush", "hush", "hush"];
        var pick = Math.floor(Math.random() * things.length);
        mob.Command("say " + things[pick]);
        return true;
    }
    return false;
}
