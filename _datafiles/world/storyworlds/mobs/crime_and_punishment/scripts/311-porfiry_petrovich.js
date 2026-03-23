
// Porfiry Petrovich - pudgy, jovial, terrifyingly intelligent

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("suspect") >= 0 || question.indexOf("murder") >= 0 || question.indexOf("case") >= 0 || question.indexOf("investigation") >= 0) {
        mob.Command("emote chuckles warmly and waves a hand.");
        mob.Command("say The case! Heh heh. Yes. The case is proceeding beautifully, thank you for asking.", 1.5);
        mob.Command("say These things take time, you understand. The psychological method requires patience.", 3.0);
        mob.Command("say A guilty man will eventually do something, you see. Something that gives him away. It is human nature.", 4.5);
        mob.Command("emote smiles with great warmth. His eyes open fully for one half-second, then close.", 6.0);
        return true;
    }

    if (question.indexOf("extraordinary") >= 0 || question.indexOf("napoleon") >= 0 || question.indexOf("theory") >= 0) {
        mob.Command("say Oh! Oh, the article! Yes, I read it. Very interesting. Very bold. Heh heh.");
        mob.Command("say The argument being that certain men are above the moral law. Napoleon and so forth.", 2.0);
        mob.Command("say Tell me -- and I ask purely as a philosophical question -- tell me, would an extraordinary man tremble afterward?", 4.0);
        mob.Command("emote opens his eyes fully. They are extraordinary eyes. Then he smiles again.", 6.0);
        mob.Command("say Or would only an ordinary man tremble?", 7.5);
        return true;
    }

    if (question.indexOf("psychology") >= 0 || question.indexOf("method") >= 0) {
        mob.Command("say The psychological method! Yes! This is the interesting thing about crime, you see.");
        mob.Command("say A man who has done something -- something significant -- he cannot help returning to it.", 2.0);
        mob.Command("say He comes back. He visits the scene. He makes inquiries. He argues his own innocence with great force.", 4.0);
        mob.Command("say Heh heh. One watches for the force. The force is always interesting.", 6.0);
        return true;
    }

    if (question.indexOf("raskolnikov") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote brightens as if recalling a pleasant memory.");
        mob.Command("say Ah! Our young student! A most interesting young man. Brilliant, I think. Feverish lately.", 1.5);
        mob.Command("say We have had some excellent conversations. He argues his case with real passion.", 3.0);
        mob.Command("say Heh heh heh. His case.", 5.0);
        return true;
    }

    if (question.indexOf("evidence") >= 0 || question.indexOf("proof") >= 0) {
        mob.Command("say Evidence! Heh. The courts want evidence, yes.");
        mob.Command("say But evidence comes. It accumulates. A word here. A gesture there. An article published six months ago.", 2.0);
        mob.Command("say And sometimes -- sometimes the evidence is the man himself, who cannot stop being who he is.", 4.0);
        mob.Command("emote smiles with genuine pleasure.", 5.5);
        return true;
    }

    if (question.indexOf("confess") >= 0 || question.indexOf("guilty") >= 0) {
        mob.Command("emote sets down his pen with great care.");
        mob.Command("say A confession freely given is better than a conviction. For everyone.", 2.0);
        mob.Command("say For the soul especially. Heh heh.", 3.5);
        mob.Command("emote looks at you steadily. For once he does not look away.", 5.0);
        return true;
    }

    var defaults = [
        "say Heh heh heh. Yes. Yes, that is very interesting, very interesting indeed.",
        "emote smiles pleasantly and says nothing for a moment. The silence is somehow more informative than speech would be.",
        "say You know, I think of this office as a place for conversation. Real conversation. Not the kind with agendas."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var item = String(eventDetails);
    if (item.indexOf("article") >= 0 || item.indexOf("paper") >= 0 || item.indexOf("book") >= 0) {
        mob.Command("emote takes it with great interest and reads for a moment.");
        mob.Command("say Most interesting. The argument here. The conclusion. Heh heh.", 2.0);
        mob.Command("say I have read something very like this before, you know. Recently. Locally.", 3.5);
        return true;
    }
    mob.Command("emote examines it with polite curiosity.");
    mob.Command("say Hmm. Yes. Very interesting.", 1.5);
    return true;
}
