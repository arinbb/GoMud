
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pretzel") >= 0) {
        mob.Command("emote sets down his crossword.");
        mob.Command("say Pretzel Day.", 1.5);
        mob.Command("emote's expression changes. It is the change of a man accessing a treasured memory.", 3.0);
        mob.Command("say Once a year, a pretzel cart comes to this office. You can get any topping. Any topping.", 5.0);
        mob.Command("say That is the one good day.", 6.5);
        mob.Command("emote returns to his crossword, the moment complete.", 8.0);
        return true;
    }

    if (question.indexOf("crossword") >= 0 || question.indexOf("puzzle") >= 0) {
        mob.Command("say I do the New York Times crossword every morning.", 1.0);
        mob.Command("say I finish it before lunch.", 2.5);
        mob.Command("emote looks at you with the patience of a man who does not find this remarkable.", 4.0);
        mob.Command("say Then I do the work. Then I go home. That is the day.", 5.5);
        return true;
    }

    if (question.indexOf("michael") >= 0 || question.indexOf("scott") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("emote looks up from the crossword with the expression of a man who has many thoughts and has decided to have none of them out loud.");
        mob.Command("say I have worked for Michael Scott for nine years.", 3.0);
        mob.Command("emote picks up the crossword again.", 4.5);
        mob.Command("say That's what I'll say about that.", 6.0);
        return true;
    }

    if (question.indexOf("florida") >= 0 || question.indexOf("retire") >= 0) {
        mob.Command("emote sets down the crossword with the controlled expression of someone not letting a feeling show.");
        mob.Command("say I have a life in Florida. I am working toward it.", 2.0);
        mob.Command("say Sun. Water. A boat. Not this.", 4.0);
        mob.Command("emote looks out the window at the Pennsylvania sky.", 5.5);
        return true;
    }

    // Default
    mob.Command("emote looks at you over the crossword.");
    mob.Command("say Did I stutter?", 1.5);
    mob.Command("emote returns to the crossword.", 3.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it.");
    mob.Command("say Is this relevant to me?", 2.0);
    return true;
}
