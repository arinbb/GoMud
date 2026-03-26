
// Svidrigailov - mysterious, corrupt, charming, Raskolnikovs dark mirror

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("raskolnikov") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote takes a long draw on his cigar.");
        mob.Command("say Ah. Him. He and I have more in common than he would like to believe.", 1.5);
        mob.Command("say He arrived at the same conclusion I did, by a much more complicated route. I respect the complication.", 3.0);
        mob.Command("say He thinks his theory makes him special. The theory is irrelevant. The act is what counts.", 4.5);
        return true;
    }

    if (question.indexOf("extraordinary") >= 0 || question.indexOf("theory") >= 0 || question.indexOf("napoleon") >= 0) {
        mob.Command("emote smiles with genuine amusement.");
        mob.Command("say His theory. Yes. Very elaborate.", 1.5);
        mob.Command("say Some men are born to give orders and some to receive them. I never needed a philosophical framework for this. It seemed obvious.", 3.0);
        mob.Command("say The suffering afterward -- that is the difference between us. I do not suffer afterward.", 5.0);
        return true;
    }

    if (question.indexOf("eternity") >= 0 || question.indexOf("death") >= 0 || question.indexOf("afterlife") >= 0) {
        mob.Command("emote exhales smoke slowly.");
        mob.Command("say Eternity. I have thought about this. You know what I think eternity might be?", 1.5);
        mob.Command("say A bathhouse. Small. Spiders in the corners. Dark. You spend eternity in a small dark bathhouse with spiders.", 3.0);
        mob.Command("say People say that is a terrible vision. I think it is simply honest.", 5.0);
        return true;
    }

    if (question.indexOf("dunya") >= 0 || question.indexOf("sister") >= 0 || question.indexOf("avdotya") >= 0) {
        mob.Command("emote is quiet for a moment, something shifting behind the pleasant expression.");
        mob.Command("say She is the only person who has made me feel -- I will not tell you what she made me feel.", 2.0);
        mob.Command("say I made her an offer. She declined very clearly. One must respect clarity.", 4.0);
        mob.Command("emote looks back at the canal. The subject is closed.", 6.0);
        return true;
    }

    if (question.indexOf("guilt") >= 0 || question.indexOf("conscience") >= 0 || question.indexOf("wrong") >= 0) {
        mob.Command("say Guilt. Yes, I know the word.");
        mob.Command("say I find that charitable acts help. Not with guilt -- I don't feel guilt exactly -- but as a kind of accounting.", 2.0);
        mob.Command("say I have given money to the Marmeladov children. Set up some arrangements. It balances the ledger somewhat.", 4.0);
        mob.Command("emote seems to find this satisfying in a way he does not entirely understand.", 6.0);
        return true;
    }

    var defaults = [
        "say We are more alike than you think. Most people are more alike than they think.",
        "emote watches you with those pale blue eyes, pleasant and entirely opaque.",
        "say I am going to America. Did you know that? I have made some arrangements. America seems appropriate."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
