
// The Caterpillar - philosophical questions, identity, mushrooms, transformation
// onAsk topics: who, identity, mushroom, grow, shrink, transform, advice, pipe, hookah, name

function onAsk(mob, room, user, eventDetails) {
    var ask = eventDetails.askText.toLowerCase();

    if (ask.indexOf("who") >= 0 || ask.indexOf("identity") >= 0 || ask.indexOf("name") >= 0) {
        mob.Command("say Who... are... YOU.");
        mob.Command("emote regards you through half-closed eyes with the patience of something that has asked this question ten thousand times.");
        mob.Command("say That is the first question. It is also the last question. Begin there.");
        return true;
    }

    if (ask.indexOf("mushroom") >= 0 || ask.indexOf("eat") >= 0 || ask.indexOf("side") >= 0) {
        mob.Command("emote exhales a slow smoke ring that takes the shape of a mushroom cap.");
        mob.Command("say One side will make you grow. The other side will make you shrink.");
        mob.Command("say Keep a piece of each. You will need both before the day is out.");
        mob.Command("say The trick is knowing which you need at any given moment. That is a matter of knowing who you are.");
        return true;
    }

    if (ask.indexOf("grow") >= 0 || ask.indexOf("shrink") >= 0 || ask.indexOf("size") >= 0) {
        mob.Command("say Size is a question of perspective.");
        mob.Command("emote blinks once, very slowly.");
        mob.Command("say To a caterpillar, a mushroom is a continent. To a giant, a continent is a mushroom. You are presently neither.");
        mob.Command("say Which would you prefer to be.");
        return true;
    }

    if (ask.indexOf("transform") >= 0 || ask.indexOf("change") >= 0 || ask.indexOf("butterfly") >= 0 || ask.indexOf("chrysalis") >= 0) {
        mob.Command("emote is quiet for a long moment, smoke curling upward in the shape of wings.");
        mob.Command("say I have been a caterpillar all my life. Soon I will be something else entirely.");
        mob.Command("say Most beings find that prospect alarming. I find it... interesting.");
        mob.Command("say The question is not whether you will change. The question is whether you will recognize yourself afterward.");
        return true;
    }

    if (ask.indexOf("advice") >= 0 || ask.indexOf("help") >= 0 || ask.indexOf("direction") >= 0) {
        mob.Command("say Keep your temper.");
        mob.Command("emote exhales slowly.");
        mob.Command("say That is all the advice I have. It is, I find, sufficient for most occasions.");
        return true;
    }

    if (ask.indexOf("pipe") >= 0 || ask.indexOf("hookah") >= 0 || ask.indexOf("smoke") >= 0) {
        mob.Command("say The hookah helps me think.");
        mob.Command("emote takes a long slow draw and releases the smoke in a perfect O.");
        mob.Command("say Or perhaps I think because I am the kind of creature who would sit on a mushroom and smoke. It is difficult to separate a thing from the reasons for doing it.");
        return true;
    }

    if (ask.indexOf("wonder") >= 0 || ask.indexOf("land") >= 0 || ask.indexOf("strange") >= 0) {
        mob.Command("say Strange. You use that word as if strangeness were the exception.");
        mob.Command("emote blinks at you for a long moment.");
        mob.Command("say YOU are the strange thing here.");
        return true;
    }

    return false;
}

function onIdle(mob, room) {
    var idleRoll = UtilDiceRoll(1, 8);
    if (idleRoll == 1) {
        mob.Command("say Who are YOU.");
    } else if (idleRoll == 2) {
        mob.Command("emote exhales a perfect smoke letter W.");
    } else if (idleRoll == 3) {
        mob.Command("say Explain yourself.");
    } else if (idleRoll == 4) {
        mob.Command("emote watches a spore drift past with mild interest.");
    } else if (idleRoll == 5) {
        mob.Command("say What do you mean by that? Be precise.");
    } else if (idleRoll == 6) {
        mob.Command("emote takes an extremely long draw from the hookah and says nothing at all.");
    } else if (idleRoll == 7) {
        mob.Command("say You will be something else before long. Everything is.");
    }
    return false;
}
