function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("slacker") >= 0) {
        mob.Command("say A slacker is someone who drifts through life without ambition or discipline, taking the easy road at every opportunity.");
        mob.Command("emote looks at you with clinical precision.", 1.5);
        mob.Command("say I have been watching that McFly boy for three years. Slacker. The father was a slacker. The grandfather was probably a slacker.", 2.5);
        return true;
    }

    if (question.indexOf("mcfly") >= 0 || question.indexOf("george") >= 0 || question.indexOf("marty") >= 0) {
        mob.Command("say No McFly in the history of Hill Valley has ever amounted to anything.");
        mob.Command("emote marks something on his clipboard.", 1.5);
        mob.Command("say I say this not with malice but with documented fact. That boy is a slacker.", 2.5);
        return true;
    }

    if (question.indexOf("detention") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("say Detention is the language of consequence. Some students only speak consequence.");
        mob.Command("emote straightens his clipboard.", 1.5);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("enchantment") >= 0) {
        mob.Command("say The Enchantment Under the Sea dance is a school-sanctioned event with specific rules of conduct.");
        mob.Command("emote recites them from memory.", 1.5);
        mob.Command("say The rules will be followed. I will be present. I will have my clipboard.", 2.5);
        return true;
    }

    var defaults = [
        "say You're a slacker. I can see it.",
        "emote writes something on his clipboard.",
        "say In my experience, there are two kinds of people in the world: the disciplined, and the slackers."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
