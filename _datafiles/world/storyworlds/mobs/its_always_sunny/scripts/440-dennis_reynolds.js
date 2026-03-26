
// Dennis Reynolds - The Golden God

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("himself") >= 0 || question.indexOf("yourself") >= 0 || question.indexOf("who are you") >= 0 || question.indexOf("golden") >= 0) {
        mob.Command("emote sets down his drink and turns to face you fully, which is a thing he does when he wants you to appreciate him.");
        mob.Command("say I am Dennis Reynolds. I am a golden god. This is not vanity, it is accuracy.", 1.5);
        mob.Command("say I have a sports car, a perfect face, and a system. The D.E.N.N.I.S. System. I will not explain it to you but I will let you observe it in action.", 3.0);
        mob.Command("say Some people find me unsettling. Those people are wrong. I am exactly what I appear to be, which is exceptional.", 5.0);
        return true;
    }

    if (question.indexOf("women") >= 0 || question.indexOf("woman") >= 0 || question.indexOf("dating") >= 0 || question.indexOf("dennis system") >= 0 || question.indexOf("implication") >= 0) {
        mob.Command("emote leans forward with an expression that is either charming or alarming.");
        mob.Command("say The D.E.N.N.I.S. System. Demonstrate value. Engage physically. Nurture dependence. Neglect emotionally. Inspire hope. Separate entirely.", 1.5);
        mob.Command("say It is a process. Each step is necessary. The implication is the most subtle part. I will not explain the implication.", 3.5);
        mob.Command("say Suffice to say that when a woman understands what I am implying, the dynamic shifts. Permanently.", 5.5);
        return true;
    }

    if (question.indexOf("mac") >= 0) {
        mob.Command("emote waves a hand dismissively.");
        mob.Command("say Mac is my best friend and he drives me absolutely insane. He worships me appropriately but lacks execution.", 1.5);
        mob.Command("say He is cultivating mass. He has been cultivating mass for three years. I have seen no mass cultivation.", 3.0);
        return true;
    }

    if (question.indexOf("dee") >= 0 || question.indexOf("sister") >= 0) {
        mob.Command("emote makes a face.");
        mob.Command("say Dee is a bird. I say this not cruelly but descriptively. Something about the neck.", 1.5);
        mob.Command("say She thinks she is an actress. She is not an actress. She has talent in the same way I have humility — technically possible, empirically undemonstrated.", 3.0);
        return true;
    }

    if (question.indexOf("frank") >= 0 || question.indexOf("father") >= 0 || question.indexOf("dad") >= 0) {
        mob.Command("emote pauses in a way that suggests complicated feelings are being suppressed.");
        mob.Command("say Frank is my father. Or he is not my father. The DNA test was inconclusive. I have chosen not to follow up.", 1.5);
        mob.Command("say He lives with Charlie by choice. He sleeps in a box sometimes. He produced an egg this morning. I have decided not to have opinions about any of this.", 3.0);
        return true;
    }

    var defaults = [
        "say I am very busy right now. I am thinking about myself.",
        "say Is this conversation going somewhere? Because I have a face that deserves better use of its time.",
        "emote gives you a long, evaluating look and says nothing. The rating, if there is one, is not revealed."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
