
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("neil") >= 0 || question.indexOf("young") >= 0 || question.indexOf("neighbor") >= 0) {
        mob.Command("say The young one.");
        mob.Command("emote rocks twice before continuing.", 2.0);
        mob.Command("say He plays at all hours. The music goes across the fence. I have stopped minding it.");
        mob.Command("emote pauses.", 1.5);
        mob.Command("say I have started listening for it when it stops.");
        return true;
    }

    if (question.indexOf("ranch") >= 0 || question.indexOf("land") >= 0 || question.indexOf("property") >= 0) {
        mob.Command("say Been here since before the road was paved.");
        mob.Command("emote looks at the fields the way someone looks at something they own without owning.", 2.0);
        mob.Command("say The land does not belong to anyone for long. You are just the one holding it for now.");
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("old") >= 0 || question.indexOf("age") >= 0) {
        mob.Command("say Old man look at my life.");
        mob.Command("emote almost smiles, the expression barely moving the weathered face.", 2.0);
        mob.Command("say The young one said that to me once. I said: I am looking. What I see is you.");
        mob.Command("say He did not know what to do with that. He went and wrote a song about it instead.", 2.0);
        return true;
    }

    if (question.indexOf("twenty") >= 0 || question.indexOf("young") >= 0 || question.indexOf("youth") >= 0) {
        mob.Command("say Twenty-four.");
        mob.Command("emote rocks.", 1.5);
        mob.Command("say It does not feel like what you think it will feel like. Neither does seventy.");
        mob.Command("say The years between are where the work is.", 2.0);
        return true;
    }

    if (question.indexOf("harvest") >= 0 || question.indexOf("wheat") >= 0 || question.indexOf("field") >= 0) {
        mob.Command("say Every year the same. Every year different.");
        mob.Command("emote watches the wheat move in the breeze.", 2.0);
        mob.Command("say A harvest is just time made visible. The wheat was always going to be ready. You just have to wait it out.");
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("song") >= 0 || question.indexOf("guitar") >= 0) {
        mob.Command("say I do not know much about music.");
        mob.Command("emote whittles a shaving without looking up.", 2.0);
        mob.Command("say I know that what he plays at night sometimes stops me from sleeping in a way that is not unpleasant.");
        mob.Command("say That is as close to music criticism as I get.", 1.5);
        return true;
    }

    var defaults = [
        "emote rocks slowly, saying nothing, which is itself an answer.",
        "say I am not much of a talker.",
        "say Ask me about the land. That I know."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
