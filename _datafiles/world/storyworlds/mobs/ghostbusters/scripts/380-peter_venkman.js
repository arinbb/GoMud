function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ghost") >= 0 || question.indexOf("paranormal") >= 0) {
        mob.Command("say I'll be honest with you -- I went into parapsychology because the lab hours were flexible and the girls in the psychology department were very attractive.");
        mob.Command("say Then we actually found one. A real one. In the New York Public Library. Floating cards, flying books, the whole package.");
        mob.Command("emote shrugs with the exaggerated nonchalance of a man who is absolutely not over the fact that ghosts are real.", 2.0);
        mob.Command("say So now I catch them. I don't know. Life takes you places.", 4.0);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("ghostbusters") >= 0 || question.indexOf("company") >= 0) {
        mob.Command("say We got one. That's the business. Right now it's me, Ray, Egon, and Winston.");
        mob.Command("say The city's crawling with them. PKE readings off the charts. Every Class IV manifestation in the five boroughs is waking up at once.");
        mob.Command("emote picks up a business card and flips it between his fingers.", 2.0);
        mob.Command("say We're ready to believe you. That's our whole pitch. It works surprisingly well.", 4.0);
        return true;
    }

    if (question.indexOf("dana") >= 0 || question.indexOf("barrett") >= 0) {
        mob.Command("say Dana Barrett. Cellist. New York Philharmonic. Incredibly smart, very beautiful, and currently possessed by an ancient Sumerian deity.");
        mob.Command("emote runs a hand through his hair in a practiced gesture.");
        mob.Command("say I've had complicated relationships before. This is the most complicated.", 2.0);
        mob.Command("say She'll be fine. I'm choosing to believe that.", 3.5);
        return true;
    }

    if (question.indexOf("egon") >= 0 || question.indexOf("spengler") >= 0) {
        mob.Command("say Egon is a genius. The kind of genius who doesn't realize that other people are not also geniuses.");
        mob.Command("say He built the containment unit in three weeks. He explained it to me once. I understood the second word.");
        mob.Command("emote smiles with genuine affection underneath the sarcasm.", 2.0);
        mob.Command("say If Egon says we shouldn't cross the streams, we don't cross the streams. That's just how it works.", 4.0);
        return true;
    }

    if (question.indexOf("ray") >= 0 || question.indexOf("stantz") >= 0) {
        mob.Command("say Ray? Ray is the heart of this operation and also the reason we sometimes almost die.");
        mob.Command("say He believes everything. Completely. No skepticism. When a supernatural occurrence looks him in the eye, he smiles at it.");
        mob.Command("emote looks almost fond.", 2.0);
        mob.Command("say He chose the Stay Puft Marshmallow Man. As the form of our destruction. Because it felt nice. That's Ray.", 4.0);
        return true;
    }

    if (question.indexOf("streams") >= 0 || question.indexOf("cross") >= 0) {
        mob.Command("say Egon told me not to cross the streams. He used the phrase 'total protonic reversal.'");
        mob.Command("say I asked what that meant. He said: imagine all life as you know it stopping instantaneously and every molecule in your body exploding at the speed of light.");
        mob.Command("emote spreads his hands.", 2.0);
        mob.Command("say We crossed the streams. It worked out. I still think Egon was right not to recommend it.", 4.0);
        return true;
    }

    if (question.indexOf("god") >= 0) {
        mob.Command("say If someone asks if you are a god -- and someone will ask -- you say yes.");
        mob.Command("say Ray said no. You should have seen what happened next.");
        mob.Command("emote shakes his head slowly.", 2.0);
        mob.Command("say I'm not saying lie. I'm saying this is a context where the truth is not your friend.", 4.0);
        return true;
    }

    var defaults = [
        "say I'm a little busy right now. Saving New York. You know how it is.",
        "say Ask me about ghosts, the business, Dana, the boys, or the streams. I've got opinions on all of them.",
        "say In my experience, the right answer to almost any question is 'we'll figure it out.' Has worked so far."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails).toLowerCase();
    if (showText.indexOf("proton") >= 0 || showText.indexOf("pack") >= 0) {
        mob.Command("say Nice pack. Mines got a dent in the accelerator housing from the Sedgewick job. Worth it.");
        return true;
    }
    if (showText.indexOf("trap") >= 0) {
        mob.Command("say Tried and true. Step on the pedal, don't stare into the beam. Very basic. Very effective.");
        return true;
    }
    mob.Command("say Interesting. What am I looking at?");
    return true;
}
