function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("lorraine") >= 0 || question.indexOf("baines") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("emote 's ears go red.");
        mob.Command("say Lorraine? She -- I mean -- I don't -- I see her sometimes at school.", 1.0);
        mob.Command("emote stares at the counter.", 2.0);
        mob.Command("say She's wonderful. She's -- I think she's wonderful. I've never spoken to her.", 3.0);
        return true;
    }

    if (question.indexOf("biff") >= 0 || question.indexOf("tannen") >= 0) {
        mob.Command("emote hunches his shoulders instinctively.");
        mob.Command("say Biff just -- he does my homework sometimes. We have an arrangement.", 1.5);
        mob.Command("say It's fine. It's not -- I mean, it's easier than the alternative.", 2.5);
        mob.Command("emote pauses, clearly not believing his own answer.", 3.5);
        return true;
    }

    if (question.indexOf("writing") >= 0 || question.indexOf("story") >= 0 || question.indexOf("notebook") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("emote covers his notebook with his arm reflexively.");
        mob.Command("say It's nothing. It's just -- science fiction stories. Nobody would want to read them.", 1.5);
        mob.Command("emote relaxes slightly.", 2.5);
        mob.Command("say But sometimes when I'm writing them I feel like... like maybe someone out there would understand. The people I write about.", 3.5);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("enchantment") >= 0) {
        mob.Command("say The Enchantment Under the Sea? I -- I'm going. I think. I just don't know who with.");
        mob.Command("emote goes back to staring at his notebook.", 2.0);
        return true;
    }

    if (question.indexOf("destiny") >= 0 || question.indexOf("future") >= 0 || question.indexOf("someday") >= 0) {
        mob.Command("emote looks up, something shifting in his eyes.");
        mob.Command("say Someday. Yeah. Someday I'm going to do something that matters.", 1.5);
        mob.Command("say I don't know what yet. But I'm going to.", 2.5);
        return true;
    }

    var defaults = [
        "emote glances at his notebook and mumbles something inaudible.",
        "say I just need to think this through.",
        "emote writes something, erases it, writes it again."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("book") >= 0 || showText.indexOf("novel") >= 0) {
        mob.Command("emote stares at it for a long moment.");
        mob.Command("say Is that... is that from the future?", 1.5);
        mob.Command("say No. Never mind. I don't want to know.", 2.5);
        mob.Command("emote goes back to his notebook, writing faster than before.", 3.5);
        return true;
    }

    return false;
}
