function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drug") >= 0 || question.indexOf("struggle") >= 0 || question.indexOf("addict") >= 0 || question.indexOf("use") >= 0) {
        mob.Command("emote goes quiet for a moment.");
        mob.Command("say The struggle.", 2.0);
        mob.Command("emote looks at the cart.", 3.5);
        mob.Command("say Everybody on these corners got a struggle. Mine just got its own name.", 5.0);
        mob.Command("say I am -- I am working on it. I have been working on it.", 7.0);
        mob.Command("emote straightens a shirt on the cart. The work is ongoing.", 8.5);
        return true;
    }

    if (question.indexOf("mcnulty") >= 0 || question.indexOf("police") >= 0 || question.indexOf("cop") >= 0) {
        mob.Command("say McNulty.", 1.5);
        mob.Command("emote half-smiles.", 3.0);
        mob.Command("say He tries. Out of all the police I have known -- and I have known a few, you know what I am saying -- he actually tries.", 4.5);
        mob.Command("say He dont always know what he is doing to people when he tries.", 7.0);
        mob.Command("emote adjusts a shirt. There is more to that sentence that he does not say.", 8.5);
        return true;
    }

    if (question.indexOf("street") >= 0 || question.indexOf("hard") >= 0 || question.indexOf("life") >= 0) {
        mob.Command("say It is hard out here.", 1.5);
        mob.Command("emote says this without self-pity, as a statement of meteorological fact.", 3.0);
        mob.Command("say But I got my shirts. I got my route. I know where everything is on these blocks.", 5.0);
        mob.Command("emote taps the side of his head.", 6.5);
        mob.Command("say That knowledge got value. You just got to find the right buyer.", 8.0);
        return true;
    }

    if (question.indexOf("shirt") >= 0 || question.indexOf("cart") >= 0) {
        mob.Command("say Shirts! Three dollars!", 1.0);
        mob.Command("emote gestures at the loaded cart with salesman energy.", 2.5);
        mob.Command("say Fruit of the Loom. Good quality. Pre-washed.", 4.0);
        mob.Command("say I got small, medium, large. I got extra large if you need it, no judgment.", 6.0);
        return true;
    }

    var defaults = [
        "emote looks at you with the quick comprehensive attention of someone who reads people for a living.",
        "say What you need.",
        "emote straightens a shirt and waits."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
