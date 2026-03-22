
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("adventure") >= 0 || question.indexOf("journey") >= 0 || question.indexOf("quest") >= 0) {
        mob.Command("emote wrings his hands anxiously.");
        mob.Command("say I didn't ASK for any of this! Gandalf came knocking and next thing I knew there were thirteen dwarves eating everything in my pantry!");
        mob.Command("say Adventures! Nasty, disturbing, uncomfortable things. Make you late for dinner.", 2.0);
        return true;
    }

    if (question.indexOf("ring") >= 0 || question.indexOf("precious") >= 0) {
        mob.Command("emote 's hand darts to his pocket and he goes very still.");
        mob.Command("say Ring? What ring? I don't know what you're talking about.");
        mob.Command("emote pats his pocket protectively, eyes darting.", 1.5);
        return true;
    }

    if (question.indexOf("home") >= 0 || question.indexOf("bag end") >= 0 || question.indexOf("shire") >= 0) {
        mob.Command("emote gets a faraway look in his eyes.");
        mob.Command("say Oh, my lovely hobbit-hole! My armchair by the fire, my pantry full of seed-cakes and good cheese...");
        mob.Command("say I keep thinking about my garden. I do hope the Sackville-Bagginses haven't gotten in.", 2.0);
        return true;
    }

    if (question.indexOf("gandalf") >= 0 || question.indexOf("wizard") >= 0) {
        mob.Command("say Gandalf! He's the one who brought all this trouble to my door.");
        mob.Command("emote sighs deeply.");
        mob.Command("say Though I suppose... he does seem to know what he's about. Most of the time.", 2.0);
        return true;
    }

    if (question.indexOf("dwarves") >= 0 || question.indexOf("thorin") >= 0 || question.indexOf("dwarf") >= 0) {
        mob.Command("say Thirteen dwarves! Tracking mud on my carpet, eating all my food, throwing my dishes about!");
        mob.Command("emote huffs indignantly.");
        mob.Command("say Though Thorin... he has a certain dignity about him. Even if he did call me a grocer.", 2.0);
        return true;
    }

    if (question.indexOf("riddle") >= 0) {
        mob.Command("emote perks up slightly.");
        mob.Command("say Riddles! Now THAT is something I'm rather good at, if I do say so myself.");
        mob.Command("say What has roots as nobody sees, is taller than trees, up, up, up it goes, and yet never grows?", 2.0);
        return true;
    }

    if (question.indexOf("dragon") >= 0 || question.indexOf("smaug") >= 0) {
        mob.Command("emote goes pale and swallows hard.");
        mob.Command("say A d-dragon. Yes. They want me to burgle a DRAGON.");
        mob.Command("say I must be out of my mind. Completely, utterly out of my mind.", 2.0);
        return true;
    }

    var defaults = [
        "say I really ought to be getting home. This adventure business is terribly exhausting.",
        "say Would you like a seed-cake? Oh wait, I haven't got any. I miss my pantry.",
        "say I do beg your pardon, but could we talk about something more... comfortable?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("ring") >= 0 || showText.indexOf("precious") >= 0) {
        mob.Command("emote 's eyes go wide with alarm.");
        mob.Command("say Where did you — how did — PUT THAT AWAY! Please!", 1.5);
        return true;
    }

    if (showText.indexOf("arkenstone") >= 0) {
        mob.Command("emote stares at the gem, transfixed.");
        mob.Command("say The Arkenstone... the Heart of the Mountain. It's beautiful.", 1.5);
        mob.Command("say Thorin would do anything to have it back.", 3.0);
        return true;
    }

    mob.Command("emote examines it curiously.");
    mob.Command("say How interesting. We don't see many of those in the Shire.");
    return true;
}
