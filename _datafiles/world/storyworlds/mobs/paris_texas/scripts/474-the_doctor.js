
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("travis") >= 0 || question.indexOf("man") >= 0 || question.indexOf("patient") >= 0) {
        mob.Command("say He walked out of the desert. We don't know how long he was out there.");
        mob.Command("emote checks his notes.", 2.0);
        mob.Command("say Dehydrated. Undernourished. But walking. Whatever was keeping him going, it worked.", 3.5);
        mob.Command("emote puts his glasses back in his shirt pocket.", 5.0);
        mob.Command("say He won't give me his name. That's his business.", 6.5);
        return true;
    }

    if (question.indexOf("help") >= 0 || question.indexOf("okay") >= 0 || question.indexOf("fine") >= 0) {
        mob.Command("say He'll be all right. The body is resilient when it has something to stay for.");
        mob.Command("emote looks at the highway for a moment.", 2.0);
        mob.Command("say What he needs now isn't medical.", 3.5);
        return true;
    }

    return false;
}
