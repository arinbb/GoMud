
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wayne") >= 0) {
        mob.Command("emote allows the smallest smile.");
        mob.Command("say Wayne is... Wayne. He loves things completely. He thinks the guitar is a religious instrument. He treats everything he loves like it's sacred.", 1.5);
        mob.Command("say Most people lose that. He hasn't. It's annoying. I mean that in the best way.", 3.5);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("crucial") >= 0 || question.indexOf("taunt") >= 0) {
        mob.Command("say Crucial Taunt. We've been together three years. We have a sound. I know what I want it to be.");
        mob.Command("emote plays a chord fragment on her guitar.", 2.0);
        mob.Command("say That. That sound, but louder and tighter and more of it. That's where we're going.", 3.5);
        return true;
    }

    if (question.indexOf("benjamin") >= 0 || question.indexOf("manager") >= 0) {
        mob.Command("emote 's expression flattens.");
        mob.Command("say Benjamin Kane contacted me. Twice.", 1.5);
        mob.Command("say My answer was no both times and will continue to be no.", 2.5);
        return true;
    }

    if (question.indexOf("sing") >= 0 || question.indexOf("song") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say Music is the thing that was already there. You just find it. The good songs were always waiting to be written.", 1.5);
        mob.Command("emote plays a few bars of something that sounds like the beginning of something real.", 2.5);
        return true;
    }

    var defaults = [
        "say We go on in an hour. I need to warm up.",
        "emote gives you a look that is not unfriendly and then goes back to tuning.",
        "say Come to the show. You'll understand better after the show."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
