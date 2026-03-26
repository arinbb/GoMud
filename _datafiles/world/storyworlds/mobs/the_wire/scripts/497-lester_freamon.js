function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("money") >= 0 || question.indexOf("follow") >= 0 || question.indexOf("case") >= 0) {
        mob.Command("emote sets down the miniature with the specific gentleness it requires.");
        mob.Command("say Follow the money.", 2.0);
        mob.Command("emote turns to the board.", 3.5);
        mob.Command("say The corners are where you see the game. But the money is where the game lives.", 5.0);
        mob.Command("say Money goes from the corner to the stash to the supply chain to the top.", 7.0);
        mob.Command("say The top is never on the corner. The top is somewhere you have to trace to.", 9.0);
        mob.Command("emote taps the board in a spot that connects three things.", 11.0);
        mob.Command("say That is what a wiretap gives you. Not the transaction. The infrastructure.", 13.0);
        return true;
    }

    if (question.indexOf("patience") >= 0 || question.indexOf("time") >= 0 || question.indexOf("wait") >= 0) {
        mob.Command("emote looks at the miniature in his hands.");
        mob.Command("say I was in the pawnshop unit for thirteen years.", 2.0);
        mob.Command("emote says this without bitterness. It is a fact, and facts are what they are.", 3.5);
        mob.Command("say Thirteen years. I built a lot of miniatures.", 5.0);
        mob.Command("say And I thought about cases. The cases they would not let me work.", 7.0);
        mob.Command("say When they brought me back, I had thirteen years of thinking done.", 9.0);
        mob.Command("emote resumes work on the miniature.", 10.5);
        mob.Command("say Patience is not waiting. Patience is working while you wait.", 12.0);
        return true;
    }

    if (question.indexOf("miniature") >= 0 || question.indexOf("dollhouse") >= 0 || question.indexOf("wood") >= 0 || question.indexOf("furniture") >= 0) {
        mob.Command("say It keeps the hands busy.", 1.5);
        mob.Command("emote holds up the current piece.", 3.0);
        mob.Command("say Victorian parlor chair. Twelve of them in the set. The detail requires patience.", 4.5);
        mob.Command("emote turns it in the light.", 6.0);
        mob.Command("say Same skill as good police work. Small things that connect to larger things.", 7.5);
        mob.Command("say You miss the small things, the larger things make no sense.", 9.0);
        mob.Command("emote resumes carving with the knife.", 10.5);
        return true;
    }

    if (question.indexOf("pieces") >= 0) {
        mob.Command("say All the pieces matter.", 1.5);
        mob.Command("emote does not elaborate. That is the whole answer.", 3.0);
        return true;
    }

    var defaults = [
        "emote looks up from the miniature with patient attention.",
        "say What do you need.",
        "emote waits. He is good at waiting."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
