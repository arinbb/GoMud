function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("chris") >= 0 || question.indexOf("chambers") >= 0) {
        mob.Command("emote looks up from his writing.");
        mob.Command("say Chris Chambers. He was my best friend.", 1.5);
        mob.Command("emote is quiet for a moment.", 3.0);
        mob.Command("say He died in a fast food restaurant, trying to break up a fight between two strangers. He had been doing things like that his whole life. That was exactly who he was.", 4.5);
        mob.Command("emote looks back out the window at the boy below who is twelve and does not know any of this yet.", 6.0);
        return true;
    }

    if (question.indexOf("gordie") >= 0 || question.indexOf("lachance") >= 0 || question.indexOf("writer") >= 0) {
        mob.Command("emote looks at his hands.");
        mob.Command("say I became a writer. I tried to get the words right for what happened that summer.", 2.0);
        mob.Command("say The words only go so close. But close is something.", 3.5);
        mob.Command("emote picks up his pen.", 4.5);
        return true;
    }

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("say I was twelve going on thirteen the first time I saw a dead human being.");
        mob.Command("emote looks at the boys below.", 2.0);
        mob.Command("say I'd like to tell you it didn't have an effect. I'd like to tell you we walked home and were fine.", 3.5);
        mob.Command("say But we were not fine. And the not-fine turned into -- this.", 5.0);
        mob.Command("emote gestures vaguely at the pages and the window and everything.", 6.0);
        return true;
    }

    if (question.indexOf("summer") >= 0 || question.indexOf("childhood") >= 0 || question.indexOf("memory") >= 0) {
        mob.Command("emote sets down his pen.");
        mob.Command("say I never had any friends later on like the ones I had when I was twelve.", 1.5);
        mob.Command("emote pauses, then continues more quietly.", 3.0);
        mob.Command("say Does anyone?", 4.0);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("grow") >= 0 || question.indexOf("boys") >= 0) {
        mob.Command("say They grew up. Most of them.", 1.5);
        mob.Command("emote does not elaborate on the 'most'.", 2.5);
        mob.Command("say That summer -- the summer they walked the tracks to find Ray Brower -- was the last summer. After that, things started to diverge the way things do.", 3.5);
        mob.Command("say But that summer, they were all exactly what they were supposed to be. Together. That was real.", 5.5);
        return true;
    }

    var defaults = [
        "emote looks at you as if you have stepped out of the memory and into the room.",
        "say Some of this I remember perfectly. Some of it I have had to reconstruct. Most of it is both.",
        "emote looks down at the boys in the treehouse below and does not answer right away."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("cap") >= 0 || showText.indexOf("castle rock") >= 0) {
        mob.Command("emote looks at the baseball cap for a very long time.");
        mob.Command("say Ray Brower's cap. Gordie kept it.", 2.0);
        mob.Command("emote touches it briefly, then draws his hand back.", 3.5);
        mob.Command("say He kept a lot of things from that summer. Not all of them were objects.", 5.0);
        return true;
    }

    mob.Command("emote looks at it and then at you.");
    mob.Command("say Does this remind you of something? It should.");
    return true;
}
