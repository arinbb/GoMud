// Jacob Seed - The Soldier
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wolf") >= 0 || question.indexOf("wolves") >= 0 || question.indexOf("animal") >= 0) {
        mob.Command("say Wolves are honest.", 0);
        mob.Command("emote does not look away from the window.", 1.0);
        mob.Command("say They have a hierarchy. They follow the strongest. They do not follow ideology or charisma or the promise of something better. They follow the one who is best at surviving.", 2.0);
        mob.Command("say I respect that. More than I respect most things people tell me about themselves.", 3.5);
        return true;
    }

    if (question.indexOf("military") >= 0 || question.indexOf("soldier") >= 0 || question.indexOf("war") >= 0 || question.indexOf("army") >= 0) {
        mob.Command("say I did three tours. I was very good at it.");
        mob.Command("emote takes his dog tags between two fingers for a moment, then lets them drop.", 1.5);
        mob.Command("say When I came back there was nothing. No structure. No purpose. No hierarchy worth following. The country I fought for had nothing to offer me.", 3.0);
        mob.Command("say Joseph offered me something to build. I built it.", 4.5);
        return true;
    }

    if (question.indexOf("weak") >= 0 || question.indexOf("strong") >= 0 || question.indexOf("condition") >= 0) {
        mob.Command("say The weak are not useless. They show you where the structure fails.");
        mob.Command("emote turns from the window for the first time. His eyes are flat and professional.", 1.5);
        mob.Command("say I take the weak and I find out what is underneath the weakness. Sometimes there is nothing. Sometimes there is everything. You cannot know until you apply pressure.", 3.0);
        mob.Command("say That is conditioning. That is also just the truth.", 4.5);
        return true;
    }

    if (question.indexOf("joseph") >= 0 || question.indexOf("faith") >= 0 || question.indexOf("john") >= 0) {
        mob.Command("say Joseph is necessary. Faith keeps the followers willing. John keeps them confessed and grateful.");
        mob.Command("emote returns his attention to the treeline.", 1.5);
        mob.Command("say I keep them capable. Somebody has to.", 3.0);
        return true;
    }

    var defaults = [
        "say The prepared survive. That is all. It is not complicated.",
        "say I do not explain myself to people who have not earned the context.",
        "say Watch the treeline. There is something moving in sector four that I do not recognize yet."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
