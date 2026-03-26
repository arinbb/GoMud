
// Miss Trixie - the eternal employee

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ham") >= 0 || question.indexOf("easter") >= 0) {
        mob.Command("emote perks up with sudden, fragile hope.");
        mob.Command("say HAM? You have a ham? I was PROMISED a ham! An Easter ham!");
        mob.Command("say They said I would get a ham when I retired. But they won't LET me retire!", 2.0);
        mob.Command("say I just want my ham. Is that so much to ask?", 4.0);
        return true;
    }

    if (question.indexOf("levy") >= 0 || question.indexOf("work") >= 0 || question.indexOf("pants") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("emote blinks slowly, trying to focus.");
        mob.Command("say Levy Pants. I work at Levy Pants. I think. Or I used to.");
        mob.Command("say How long have I been working there? What year is this?", 2.0);
        mob.Command("say The big man with the green hat showed up one day. Things got very confusing after that.", 4.0);
        return true;
    }

    if (question.indexOf("retire") >= 0 || question.indexOf("quit") >= 0 || question.indexOf("stop") >= 0) {
        mob.Command("say Mrs. Levy won't let me retire. She says I need the 'stimulation.'");
        mob.Command("say She's using me as some kind of... what do they call it... psychological experiment.", 2.0);
        mob.Command("say I just want to go home and sleep. And eat my ham.", 4.0);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("gloria") >= 0 || question.indexOf("trixie") >= 0) {
        mob.Command("emote squints at you uncertainly.");
        mob.Command("say I'm Miss Trixie. Or am I? Someone keeps calling me Gloria.");
        mob.Command("say That big man — Gomez? Reilly? — he kept calling me Gloria. I don't think that's right.", 2.0);
        return true;
    }

    var defaults = [
        "say Is it time to go home yet?",
        "emote stares into the middle distance and appears to fall asleep with her eyes open.",
        "say What? Who? Where's my ham?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onGive(mob, room, eventDetails) {
    var itemName = String(eventDetails).toLowerCase();

    if (itemName.indexOf("ham") >= 0 || itemName.indexOf("food") >= 0 || itemName.indexOf("meat") >= 0) {
        mob.Command("emote 's eyes go wide with joy.");
        mob.Command("say A HAM! Oh! Oh my! After all these years!");
        mob.Command("emote clutches the offering to her chest and begins to cry softly.", 2.0);
        return true;
    }

    mob.Command("emote looks at it in confusion.");
    mob.Command("say This isn't a ham.");
    return true;
}
