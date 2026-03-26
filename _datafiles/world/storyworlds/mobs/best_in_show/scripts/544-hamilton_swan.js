
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("beatrice") >= 0 || question.indexOf("weimaraner") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("say Beatrice is -- she's exceptional. She's been evaluated by three different trainers.");
        mob.Command("emote says this with the precision of a man who consults professionals about most things.", 2.0);
        mob.Command("say She senses emotional states. Her vet says this is typical for the breed, but with Beatrice it's particular.", 4.0);
        mob.Command("emote lowers his voice.", 6.0);
        mob.Command("say She knows when Meg and I are -- she responds to it. The trainer uses therapeutic techniques.", 8.0);
        return true;
    }

    if (question.indexOf("starbucks") >= 0 || question.indexOf("met") >= 0 || question.indexOf("meg") >= 0) {
        mob.Command("emote's expression shifts into something warm and slightly rehearsed from repetition.");
        mob.Command("say We met at a Starbucks. Both reaching for the same drink -- nonfat latte, same size, same moment.", 2.0);
        mob.Command("say I know how that sounds. But it was -- I don't know. It was real.", 4.5);
        mob.Command("emote is quiet for a beat.", 6.0);
        mob.Command("say She was wearing a blazer. The blazer she has now, actually. She's had it a long time.", 7.5);
        return true;
    }

    if (question.indexOf("therapist") >= 0 || question.indexOf("therapy") >= 0 || question.indexOf("doctor") >= 0) {
        mob.Command("say We go twice a week. Sometimes three times if there's -- a circumstance.");
        mob.Command("emote says this with the matter-of-fact tone of someone for whom this is just a logistical fact.", 2.0);
        mob.Command("say It helps. We've developed a -- a vocabulary. A framework for communication.", 4.0);
        mob.Command("emote appears to be running through some of the vocabulary internally.", 6.0);
        mob.Command("say It works. Most of the time it works very well.", 8.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
