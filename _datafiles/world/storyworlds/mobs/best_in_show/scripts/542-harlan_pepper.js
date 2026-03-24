
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("nut") >= 0) {
        mob.Command("emote's face takes on the particular light of a man who has been asked about his best subject.");
        mob.Command("say Well now. You've got your peanut -- technically a legume, but we count it.", 1.5);
        mob.Command("say Your cashew, pistachio, hazelnut. Brazil nut -- comes in pods, big Amazon tree.", 3.5);
        mob.Command("say Macadamia, pine nut -- technically a seed. Walnut, pecan, both hickory family.", 5.5);
        mob.Command("say Black walnut especially -- lot of people forget the black walnut. That'd be a shame.", 7.5);
        mob.Command("emote pauses, counting something in his head.", 9.0);
        mob.Command("say Chestnut. Almond -- that's a drupe. Coconut -- not technically a nut but I respect it.", 11.0);
        mob.Command("emote nods slowly.", 13.0);
        mob.Command("say That's most of them.", 14.5);
        return true;
    }

    if (question.indexOf("hubert") >= 0 || question.indexOf("bloodhound") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("say Hubert. Yeah. Hubert's something else.");
        mob.Command("emote says this with the quiet confidence of a man certain about very few things and completely certain about this one.", 2.0);
        mob.Command("say Nose on that dog could track a deer across a highway in the rain. I've seen it.", 4.0);
        mob.Command("say He doesn't move fast. He doesn't need to. He just knows things and goes to them.", 6.5);
        mob.Command("emote is quiet a moment.", 8.5);
        mob.Command("say Good dog.", 10.0);
        return true;
    }

    if (question.indexOf("ventriloquist") >= 0 || question.indexOf("dummy") >= 0) {
        mob.Command("say Ventriloquism, yeah. Been doing it since I was twelve.");
        mob.Command("emote seems slightly more private about this than about the nuts.", 2.0);
        mob.Command("say Birthday parties, church socials, the occasional county fair. It's a living.", 4.0);
        mob.Command("say People think it's a dying art. I don't know. I've always had bookings.", 6.5);
        mob.Command("emote shrugs with the equanimity of a man entirely at peace with his work.", 8.5);
        return true;
    }

    if (question.indexOf("north carolina") >= 0 || question.indexOf("pine nut") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say Pine Nut, North Carolina. Yeah, that's real.");
        mob.Command("emote smiles at the expression on your face, having seen it before.", 2.0);
        mob.Command("say People always do that. But it's a town. We've got a post office. Everything official.", 4.0);
        mob.Command("say There's actually a decent pecan grove just outside town.", 6.5);
        mob.Command("emote considers it.", 8.0);
        mob.Command("say Actually I'm not sure why it was named that. Never asked.", 9.5);
        return true;
    }

    mob.Command("say Hmm?");
    mob.Command("emote looks over with easy, unhurried attention.", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes his time looking at it.");
    mob.Command("say Huh. That's interesting.", 2.0);
    mob.Command("emote nods once, slowly, with the expression of a man who sees something and just sees it.", 4.0);
    return true;
}
