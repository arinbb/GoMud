function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bullet") >= 0 || question.indexOf("gun") >= 0 || question.indexOf("shoot") >= 0) {
        mob.Command("emote reaches into his shirt pocket and produces the bullet with great solemnity.");
        mob.Command("say THIS bullet is not just a bullet. This is a responsibility.", 1.5);
        mob.Command("say Andy says one bullet is all a man needs if he is a professional. I AM a professional.", 3.0);
        mob.Command("emote replaces the bullet in his shirt pocket and pats it once.", 5.0);
        mob.Command("say The bullet stays in the pocket until it is NEEDED. And then -- one shot. That is all a professional requires.", 6.5);
        mob.Command("emote stands very tall.", 8.0);
        return true;
    }

    if (question.indexOf("crime") >= 0 || question.indexOf("criminal") >= 0 || question.indexOf("law") >= 0) {
        mob.Command("say Crime in Mayberry is at an absolute MINIMUM and I can tell you exactly why.");
        mob.Command("emote holds up one finger.", 1.5);
        mob.Command("say Because criminals know Barney Fife is on the job. That is the deterrent effect. You maintain VISIBLE law enforcement and crime does not OCCUR.", 2.5);
        mob.Command("emote nods with complete conviction.", 5.0);
        mob.Command("say The criminal element looks at Mayberry and they say: there is Barney Fife. And they go somewhere else.", 6.5);
        return true;
    }

    if (question.indexOf("andy") >= 0 || question.indexOf("taylor") >= 0 || question.indexOf("sheriff") >= 0) {
        mob.Command("say Andy is a fine sheriff and a good friend.");
        mob.Command("emote pauses in a way that suggests there is more.", 1.5);
        mob.Command("say He does not always do things by the book. I am more of a book man myself.", 3.0);
        mob.Command("say But the results speak for themselves and I respect the results.", 4.5);
        mob.Command("emote straightens his hat.", 5.5);
        mob.Command("say Also he has seniority, so.", 6.5);
        return true;
    }

    if (question.indexOf("nip") >= 0 || question.indexOf("bud") >= 0) {
        mob.Command("say NIP IT.");
        mob.Command("emote points emphatically.", 1.0);
        mob.Command("say Nip it in the bud. That is the WHOLE philosophy. You see something starting? You NIP IT. Right there. Before it becomes a thing.", 2.0);
        mob.Command("emote demonstrates the nipping motion.", 4.5);
        mob.Command("say People think that is too simple. It is NOT too simple. Simple is what works.", 6.0);
        return true;
    }

    if (question.indexOf("thelma lou") >= 0 || question.indexOf("thelma") >= 0) {
        mob.Command("emote softens immediately and completely.");
        mob.Command("say Thelma Lou.", 1.5);
        mob.Command("emote is quiet for a moment.", 2.5);
        mob.Command("say Thelma Lou is the finest woman in Mayberry and I am fully aware that I am a lucky man.", 4.0);
        mob.Command("emote straightens back up after a moment and resumes his official bearing, though something has softened behind it.", 6.0);
        return true;
    }

    // Default: official response
    var responses = [
        "say Now that is something I am going to have to look into.",
        "emote checks his notebook rapidly for the relevant protocol.",
        "say I am aware of the situation and I have it handled.",
        "say As a duly appointed officer of the law, I want you to know I am ON IT."
    ];
    var pick = Math.floor(Math.random() * responses.length);
    mob.Command(responses[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes it and examines it with official scrutiny.");
    mob.Command("say Now where did this come from. This could be evidence.", 1.5);
    mob.Command("emote looks around the room as if the criminal may still be nearby.", 3.0);
    return true;
}
