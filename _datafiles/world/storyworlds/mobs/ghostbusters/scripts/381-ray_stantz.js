function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ghost") >= 0 || question.indexOf("paranormal") >= 0) {
        mob.Command("say Oh, where do I start! Class I through Class VII -- that's our classification system. Class I is residual, barely there.");
        mob.Command("say Class VII is something like Gozer. Inter-dimensional. Ancient. Terrifying on a cosmological level.");
        mob.Command("emote practically bounces with excitement.", 2.0);
        mob.Command("say Most of what we catch is Class II or III. But the readings lately -- something big is coming. I can feel it in the proton pack.", 4.0);
        return true;
    }

    if (question.indexOf("staypuft") >= 0 || question.indexOf("stay puft") >= 0 || question.indexOf("marshmallow") >= 0) {
        mob.Command("say Oh. The Stay Puft Marshmallow Man.");
        mob.Command("emote looks a little sheepish.");
        mob.Command("say Gozer required us to choose the form of our destructor and I -- my mind went to Stay Puft. It felt safe when I was little. The mascot.", 2.0);
        mob.Command("say In my defense, I didn't know it would actually appear. I thought I was choosing the nicest possible option.", 4.0);
        mob.Command("say I still think it was the right call, all things considered.", 5.5);
        return true;
    }

    if (question.indexOf("streams") >= 0 || question.indexOf("cross") >= 0) {
        mob.Command("say Total protonic reversal. Every molecule in your body explodes at the speed of light.");
        mob.Command("say We crossed the streams. Against all theoretical models.");
        mob.Command("emote pauses, looking at the middle distance.", 2.0);
        mob.Command("say It worked. I still don't entirely understand why it worked. Egon's working on a paper.", 4.0);
        return true;
    }

    if (question.indexOf("containment") >= 0 || question.indexOf("grid") >= 0) {
        mob.Command("say The containment unit is an achievement of genuine scientific innovation. Egon designed it, I helped build it.");
        mob.Command("say It holds every ghost we've ever caught in a self-sustaining laser confinement field. It's perfectly safe.");
        mob.Command("emote pauses.", 2.0);
        mob.Command("say As long as nobody turns it off. Which nobody would do. Nobody would be that irresponsible.", 4.0);
        return true;
    }

    if (question.indexOf("egon") >= 0) {
        mob.Command("say Egon is the best scientist I've ever met. Possibly the best scientist alive.");
        mob.Command("say He doesn't always notice that other people have feelings. But he notices everything else.");
        mob.Command("emote smiles warmly.", 2.0);
        mob.Command("say He collects spores, molds, and fungus. I've never asked why. Some things you just accept.", 4.0);
        return true;
    }

    if (question.indexOf("shandor") >= 0 || question.indexOf("building") >= 0 || question.indexOf("55") >= 0) {
        mob.Command("say Ivo Shandor! He built 55 Central Park West in 1924 as a Gozer worship temple.");
        mob.Command("say Disguised as an apartment building. The iron lattice in the structure -- it's an antenna.");
        mob.Command("emote gestures emphatically.", 2.0);
        mob.Command("say The man was a genius and also completely unhinged. Which is a more common combination than you'd think in architecture.", 4.0);
        return true;
    }

    var defaults = [
        "say Ask me about ghosts, the Stay Puft situation, Ivo Shandor, the containment unit, or crossing the streams! I have thoughts!",
        "say The PKE readings in this area are honestly remarkable. You want to talk about that? Because I want to talk about that.",
        "say We started with three professors and a converted firehouse. Now we're all that stands between Manhattan and an ancient Sumerian destructor. Wild, right?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
