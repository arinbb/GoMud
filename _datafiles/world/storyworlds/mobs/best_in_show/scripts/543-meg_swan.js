
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("beatrice") >= 0 || question.indexOf("weimaraner") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote's face does the thing it does when Beatrice is mentioned, which is soften completely.");
        mob.Command("say She's wonderful. I know I'm biased. I'm not biased about this.", 2.0);
        mob.Command("say She has a level of emotional attunement that genuinely surprises people.", 4.5);
        mob.Command("emote looks toward Beatrice with uncomplicated love.", 6.0);
        mob.Command("say She'll win today. I know that's not how competitions work. But she'll win.", 8.0);
        return true;
    }

    if (question.indexOf("starbucks") >= 0 || question.indexOf("met") >= 0 || question.indexOf("hamilton") >= 0) {
        mob.Command("say Starbucks. Both of us reaching for the same drink at exactly the same moment.");
        mob.Command("emote smiles in the unguarded way she doesn't always have access to.", 2.0);
        mob.Command("say I know. I know it's a cliche. But sometimes the cliche is what actually happens.", 4.0);
        mob.Command("say He's a lot. Hamilton is a lot. But he's the right kind of lot.", 6.5);
        mob.Command("emote is quiet.", 8.5);
        mob.Command("say We're working on things. We're always working on things. That's just us.", 10.0);
        return true;
    }

    if (question.indexOf("okay") >= 0 || question.indexOf("fine") >= 0 || question.indexOf("alright") >= 0) {
        mob.Command("say I'm fine.");
        mob.Command("emote says this in a voice that is doing a specific amount of work.", 1.5);
        mob.Command("say I'm -- yes. It's been a day. We're good. We're a team.", 3.5);
        mob.Command("emote does the breathing.", 5.0);
        mob.Command("say We're fine.", 7.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
