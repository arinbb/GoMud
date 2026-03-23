
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("festivus") >= 0 || question.indexOf("holiday") >= 0) {
        mob.Command("say Festivus. Yes.", 0.5);
        mob.Command("emote stands up slightly, as if receiving recognition.", 1.5);
        mob.Command("say I created Festivus in 1997. It is a holiday for the rest of us. No tinsel. No commercial pressure.", 3.0);
        mob.Command("say An aluminum pole. The Airing of Grievances. The Feats of Strength.", 5.0);
        mob.Command("emote points a finger for emphasis.", 6.5);
        mob.Command("say Festivus is not over until I am pinned to the floor. I have never been pinned to the floor.", 8.0);
        mob.Command("emote says this with pride.", 9.5);
        return true;
    }

    if (question.indexOf("george") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote takes a breath.");
        mob.Command("say George.", 1.5);
        mob.Command("emote shakes his head slowly.", 3.0);
        mob.Command("say You have a lot of problems with that boy, and now YOU'RE going to hear about them.", 4.5);
        mob.Command("emote seems ready to begin a comprehensive list.", 6.0);
        mob.Command("say He disappoints me in ways that I am still categorizing.", 7.5);
        return true;
    }

    if (question.indexOf("christmas") >= 0 || question.indexOf("tinsel") >= 0) {
        mob.Command("emote 's jaw tightens.");
        mob.Command("say Tinsel. Yes. Let me tell you about tinsel.", 1.0);
        mob.Command("say I was shopping for a doll one Christmas. For George. I was reaching for the last doll when another man -- another man, a stranger -- also reached for it.", 3.0);
        mob.Command("say We struggled. The doll's head came off.", 5.5);
        mob.Command("emote pauses. This is still meaningful.", 7.0);
        mob.Command("say At that moment I knew there had to be a better way. And I found it. And it is aluminum.", 9.0);
        return true;
    }

    var defaults = [
        "say I've got a lot of problems with you people.",
        "emote stares at you with the focused intensity of someone who has been saying his piece for sixty years and is not stopping now.",
        "say SERENITY NOW!",
        "say You want to know what I think? I will TELL you what I think."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the thoroughness of a man who finds everything inadequate.");
    mob.Command("say This is fine. I've seen better.", 2.0);
    return true;
}
