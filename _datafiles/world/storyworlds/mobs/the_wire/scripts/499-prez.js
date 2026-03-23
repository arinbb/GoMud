function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("teach") >= 0 || question.indexOf("kids") >= 0 || question.indexOf("student") >= 0 || question.indexOf("school") >= 0) {
        mob.Command("emote looks at the papers on his desk.");
        mob.Command("say I was not a good police.", 2.0);
        mob.Command("emote says this as a fact he has worked through.", 3.5);
        mob.Command("say But I can -- some of these kids, I can see when they get it.", 5.0);
        mob.Command("say When the math makes sense to them. When they see that numbers connect to things they already know.", 7.5);
        mob.Command("emote straightens the papers.", 9.0);
        mob.Command("say That is worth something. That is real.", 10.5);
        return true;
    }

    if (question.indexOf("police") >= 0 || question.indexOf("cop") >= 0 || question.indexOf("before") >= 0) {
        mob.Command("say I was on the force for a few years.", 1.5);
        mob.Command("emote careful about what he says next.", 3.0);
        mob.Command("say It was not the right fit. There were -- I made mistakes.", 5.0);
        mob.Command("emote does not list the mistakes.", 6.5);
        mob.Command("say This is the right fit.", 8.0);
        mob.Command("emote looks at the classroom with the expression of someone who has made a correct decision late.", 9.5);
        return true;
    }

    if (question.indexOf("corner") >= 0 || question.indexOf("game") >= 0 || question.indexOf("street") >= 0) {
        mob.Command("emote looks at the window.");
        mob.Command("say Some of my students are already in it.", 2.0);
        mob.Command("emote turns back to the desk.", 3.5);
        mob.Command("say I cannot fix that. I cannot undo the corners.", 5.0);
        mob.Command("say But if they are in my class, they are here. And here I can -- I can show them something.", 7.0);
        mob.Command("emote picks up the red pen.", 8.5);
        mob.Command("say Even if it is just that numbers make sense. That something makes sense.", 10.0);
        return true;
    }

    if (question.indexOf("math") >= 0 || question.indexOf("dice") >= 0 || question.indexOf("probability") >= 0) {
        mob.Command("say I teach probability with dice.", 1.5);
        mob.Command("emote almost smiles.", 3.0);
        mob.Command("say They know dice. They play with dice. The math that the state wants me to teach --", 4.5);
        mob.Command("emote gestures at the curriculum folder.", 5.5);
        mob.Command("say I teach that too. But I start with what they know.", 7.0);
        mob.Command("say That is the only way into it.", 8.5);
        return true;
    }

    var defaults = [
        "emote looks up from the grading with teacher attention.",
        "say Can I help you with something.",
        "emote sets down the red pen and waits."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
