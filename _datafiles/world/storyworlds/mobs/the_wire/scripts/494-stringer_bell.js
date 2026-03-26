function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("business") >= 0 || question.indexOf("product") >= 0 || question.indexOf("drug") >= 0) {
        mob.Command("emote sets down the textbook with the precision of a man who marks his page.");
        mob.Command("say It is a business. Let us be clear about that.", 2.0);
        mob.Command("say Supply chain. Distribution network. Market share.", 4.0);
        mob.Command("emote says these words the way a business school professor would.", 5.5);
        mob.Command("say The product moves because there is demand. We satisfy demand. That is commerce.", 7.5);
        mob.Command("say The illegal part is a regulatory question. Not a business question.", 9.5);
        return true;
    }

    if (question.indexOf("avon") >= 0) {
        mob.Command("emote takes a breath that contains a full analysis.");
        mob.Command("say Avon is my partner. My friend.", 2.5);
        mob.Command("say He does not understand that what we have could be something else.", 4.5);
        mob.Command("emote closes the textbook.", 6.0);
        mob.Command("say He is a soldier. He thinks like a soldier. The corners are territory to him.", 7.5);
        mob.Command("say To me they are market positions. The difference matters.", 9.0);
        mob.Command("emote looks at the closed book.", 10.5);
        mob.Command("say It will matter eventually.", 12.0);
        return true;
    }

    if (question.indexOf("economics") >= 0 || question.indexOf("school") >= 0 || question.indexOf("textbook") >= 0) {
        mob.Command("say I take a class at the community college.", 1.5);
        mob.Command("emote in a tone that is factual and also a statement of intent.", 3.0);
        mob.Command("say Supply and demand. Marginal utility. Price elasticity.", 4.5);
        mob.Command("say All of it applies. More than the people teaching it understand.", 6.5);
        mob.Command("emote returns his eyes to the textbook.", 8.0);
        return true;
    }

    if (question.indexOf("game") >= 0) {
        mob.Command("emote looks up from the textbook.");
        mob.Command("say The game.", 2.0);
        mob.Command("say I am trying to move past the game. The game has a ceiling.", 3.5);
        mob.Command("say There is no game in legitimate business. There is only market.", 5.5);
        mob.Command("emote taps the textbook cover.", 7.0);
        mob.Command("say This is the way out. This is the map.", 8.5);
        mob.Command("emote is quiet. He believes this. He is not entirely right.", 10.0);
        return true;
    }

    var defaults = [
        "emote looks up from the textbook with businesslike attention.",
        "say What can I do for you.",
        "emote marks his place and waits."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
