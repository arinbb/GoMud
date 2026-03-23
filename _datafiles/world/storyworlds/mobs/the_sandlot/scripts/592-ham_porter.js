function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("catching") >= 0 || question.indexOf("catcher") >= 0) {
        mob.Command("say Oh, you want to know about catching? Pull up a chair.", 0.5);
        mob.Command("emote sits up very straight.", 1.5);
        mob.Command("say The catcher calls the game. The catcher sees everything. The pitcher gets the glory but the catcher runs the show.", 2.5);
        mob.Command("emote nods sagely.", 3.5);
        return true;
    }

    if (question.indexOf("smalls") >= 0 || question.indexOf("scotty") >= 0) {
        mob.Command("say Smalls?", 0.5);
        mob.Command("emote tilts his head.", 1.5);
        mob.Command("say He's killing me. But -- I mean. He's trying.", 2.5);
        mob.Command("say He's part of the team now. So.", 3.5);
        return true;
    }

    if (question.indexOf("benny") >= 0 || question.indexOf("rodriguez") >= 0) {
        mob.Command("say Benny is -- look. Benny is special. You don't see that kind of player every day.", 0.5);
        mob.Command("emote pauses, then lowers his voice like he's sharing something important.", 1.5);
        mob.Command("say Don't tell him I said that.", 2.5);
        return true;
    }

    if (question.indexOf("beast") >= 0 || question.indexOf("fence") >= 0) {
        mob.Command("say Oh. The Beast.", 0.5);
        mob.Command("emote is visibly sobered.", 1.5);
        mob.Command("say You don't want to mess with the Beast. Nobody who ever went over that fence -- nobody's ever come back. Well, balls. Balls don't come back.", 2.5);
        mob.Command("say The Beast is real. I don't care what anyone says.", 3.5);
        return true;
    }

    var defaults = [
        "say You're killing me. You know that? You're killing me.",
        "emote throws his hands up at some play in the field that only he can see.",
        "say I call the pitches. I'm the one who calls the pitches."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
