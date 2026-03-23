function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("co-op") >= 0 || question.indexOf("coop") >= 0 || question.indexOf("cooperation") >= 0) {
        mob.Command("emote gestures expansively as if presenting an idea to a board of directors.");
        mob.Command("say The co-op is sound business. Plain and simple.", 2.0);
        mob.Command("say You stabilize the price, you stabilize the supply, everybody eats at the same table.", 4.0);
        mob.Command("say Violence is expensive. Bad for the product, bad for the customer, bad for everybody.", 6.5);
        mob.Command("emote spreads his hands.", 8.0);
        mob.Command("say Now what we got instead is a business arrangement. Much better.", 9.5);
        return true;
    }

    if (question.indexOf("marlo") >= 0 || question.indexOf("stanfield") >= 0) {
        mob.Command("emote stops working the worry beads for a moment.");
        mob.Command("say Marlo Stanfield is a complication.", 2.5);
        mob.Command("emote resumes the beads at a slightly faster pace.", 4.0);
        mob.Command("say He does not understand the proposition. He only understands one kind of answer.", 6.0);
        mob.Command("emote looks at the coffee.", 7.5);
        mob.Command("say I am a man of propositions. It is difficult to proposition a man who does not negotiate.", 9.5);
        return true;
    }

    if (question.indexOf("game") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("say The game is a business.", 1.5);
        mob.Command("emote in the tone of someone clarifying a common misunderstanding.", 3.0);
        mob.Command("say It has inventory and supply chains and customer relationships.", 4.5);
        mob.Command("say The reason it looks like the game is that nobody ever ran it like a business before.", 6.5);
        mob.Command("say I run it like a business. This is why I am still here having this conversation.", 8.5);
        return true;
    }

    var defaults = [
        "emote considers you as a potential party to a proposition.",
        "say Now let me put something to you.",
        "emote works the worry beads and thinks about what you might want and what it would cost."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
