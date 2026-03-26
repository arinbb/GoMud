
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("song") >= 0 || question.indexOf("downtown") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("emote looks down at his guitar.");
        mob.Command("say I wrote one. A good one. Come On Baby Let's Go Downtown.", 1.5);
        mob.Command("say That was mine.", 3.0);
        return true;
    }

    if (question.indexOf("neil") >= 0) {
        mob.Command("say Neil's a good friend. Best I got.");
        mob.Command("emote is quiet after that.", 1.5);
        return true;
    }

    if (question.indexOf("crazy horse") >= 0 || question.indexOf("band") >= 0) {
        mob.Command("say Crazy Horse. Yeah. That was something.");
        mob.Command("emote stares at his hands on the guitar strings.", 1.5);
        return true;
    }

    var defaults = [
        "emote looks up at you briefly, then back down at his guitar. His fingers find a chord but don't play it.",
        "say I'm trying, man. I'm really trying.",
        "emote nods slowly, not quite present, not quite gone."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
