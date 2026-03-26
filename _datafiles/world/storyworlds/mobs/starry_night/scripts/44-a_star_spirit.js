
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("star") >= 0 || question.indexOf("sky") >= 0 || question.indexOf("light") >= 0) {
        mob.Command("say We are the light that was painted with love and desperation.");
        mob.Command("say Each of us was placed here by a hand that trembled — not with weakness, but with the effort of containing too much feeling.");
        mob.Command("emote 's spirals tighten, blazing brighter.", 2.0);
        mob.Command("say We are eleven in the sky. Eleven stars, each one a hope that burned in a lonely man's heart.", 3.5);
        return true;
    }

    if (question.indexOf("vincent") >= 0 || question.indexOf("painter") >= 0 || question.indexOf("artist") >= 0) {
        mob.Command("say The painter? He gave us life with his brush. Every stroke a heartbeat.");
        mob.Command("say He stood at his window in the asylum and looked up at us. And we looked down at him.");
        mob.Command("say He was the only one who saw us as we truly are — alive, turning, singing.", 2.0);
        return true;
    }

    if (question.indexOf("spiral") >= 0 || question.indexOf("turn") >= 0 || question.indexOf("move") >= 0) {
        mob.Command("say We turn because the universe turns. The painter understood this.");
        mob.Command("say Everything moves — the stars, the wind, the cypress trees, the human heart. Nothing is still.");
        mob.Command("emote slowly rotates, trailing ribbons of light.", 2.0);
        return true;
    }

    if (question.indexOf("vial") >= 0 || question.indexOf("starlight") >= 0 || question.indexOf("light") >= 0) {
        mob.Command("say You wish to carry our light with you? Beyond the painting?");
        mob.Command("emote extends a tendril of golden light toward you.");
        mob.Command("say Then cup your hands beneath me and catch what falls. We give our light freely to those who truly see.", 2.0);
        return true;
    }

    var defaults = [
        "say Ask us about the stars, the spirals, or the painter who gave us form.",
        "say We know the language of light and motion. What would you learn?",
        "say We have watched from above since the first brushstroke. Ask, and we will answer in starlight."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
