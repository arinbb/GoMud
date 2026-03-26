
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("harvest") >= 0 || question.indexOf("album") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("emote looks out at the fields.");
        mob.Command("say The album? It's just... what's here. The ranch, the old man, the band. I'm trying to put it down honest.", 1.5);
        return true;
    }

    if (question.indexOf("danny") >= 0 || question.indexOf("whitten") >= 0) {
        mob.Command("emote is quiet for a long time.");
        mob.Command("say Danny's got a song in him that's better than anything I ever wrote. I just wish he could stay long enough to play it.", 2.0);
        return true;
    }

    if (question.indexOf("heart") >= 0 || question.indexOf("gold") >= 0) {
        mob.Command("say That one just came. Sat on the porch, picked up the harmonica, and there it was.");
        mob.Command("emote shrugs.", 1.5);
        mob.Command("say Still looking, though.", 2.5);
        return true;
    }

    if (question.indexOf("old man") >= 0 || question.indexOf("neighbor") >= 0) {
        mob.Command("say The old man? He's been here longer than the fence posts.");
        mob.Command("say Taught me more about living than anybody. Twenty-four and so much more.", 2.0);
        return true;
    }

    if (question.indexOf("guitar") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("emote runs his thumb across the guitar strings.");
        mob.Command("say The guitar says what I can't. Always has.", 1.5);
        return true;
    }

    if (question.indexOf("ranch") >= 0 || question.indexOf("california") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("emote looks around at the porch, the fields, the sky.");
        mob.Command("say Broken Arrow. Yeah. This is where the songs live.", 1.5);
        return true;
    }

    var defaults = [
        "emote plays a quiet chord and lets it ring out, as if that were the answer.",
        "say Hmm. Yeah. I don't know about that.",
        "emote squints at the horizon, thinking about it, then shakes his head slowly."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
