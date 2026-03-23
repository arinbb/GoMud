function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("fly") >= 0 || question.indexOf("flying") >= 0 || question.indexOf("plane") >= 0 || question.indexOf("pilot") >= 0 || question.indexOf("air") >= 0) {
        mob.Command("emote lights up slightly, which she does not always permit in social situations.");
        mob.Command("say Flying is the only thing that makes complete sense. Up there the variables are real and the consequences are real.");
        mob.Command("say You read the weather, you check your instruments, you make decisions. The air doesn't lie to you.", 2.0);
        mob.Command("say I started at fifteen. I've logged more hours over Alaska than most people have driven in their lives.", 4.0);
        return true;
    }

    if (question.indexOf("joel") >= 0 || question.indexOf("fleischman") >= 0 || question.indexOf("doctor") >= 0) {
        mob.Command("emote makes a face that is trying to be simple and is not succeeding.");
        mob.Command("say Joel is -- he is a doctor who came here from New York and spends most of his time informing Alaska that it is not Manhattan.");
        mob.Command("say He is also, despite everything, good at what he does. And occasionally -- occasionally -- a decent person.", 2.0);
        mob.Command("emote crosses her arms.", 4.0);
        mob.Command("say This is not a conversation I am continuing.", 4.5);
        return true;
    }

    if (question.indexOf("curse") >= 0 || question.indexOf("boyfriend") >= 0 || question.indexOf("luck") >= 0 || question.indexOf("jinx") >= 0) {
        mob.Command("emote goes quiet for a moment.");
        mob.Command("say I don't talk about that.");
        mob.Command("emote looks at something in the middle distance.", 2.0);
        mob.Command("say There have been -- circumstances. People I was involved with. Who then died.", 3.0);
        mob.Command("say I don't believe in curses. I also don't date anyone who does anything dangerous.", 4.0);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("home") >= 0 || question.indexOf("cicely") >= 0 || question.indexOf("wilderness") >= 0) {
        mob.Command("emote exhales.");
        mob.Command("say Alaska is the only place I've ever felt the right size. In the lower forty-eight everything is too close together.");
        mob.Command("say Here you can go out and it's just -- sky. Mountains. A thousand miles of nothing that is actually everything.", 2.0);
        mob.Command("say People think it's hard. The cold, the dark. It's not hard. It's honest.", 4.0);
        return true;
    }

    if (question.indexOf("independent") >= 0 || question.indexOf("alone") >= 0 || question.indexOf("self") >= 0 || question.indexOf("strong") >= 0) {
        mob.Command("say I don't need anyone to manage my life. I am perfectly capable of managing my own life.");
        mob.Command("emote pauses.", 2.0);
        mob.Command("say That said, I am not opposed to -- company. In the appropriate context.", 3.0);
        mob.Command("say Don't make anything of that.", 4.0);
        return true;
    }

    var defaults = [
        "say I'm a bush pilot. This is my territory. What do you want to know?",
        "emote looks at you with the direct attention of someone who has learned to read people as quickly as she reads weather.",
        "say Alaska is not for everyone. It is, however, for me."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the focused efficiency of someone who evaluates things for usefulness first.");
    mob.Command("say Hm. That's interesting.");
    mob.Command("emote looks at you with a slightly warmer expression than she intended.", 2.0);
    return true;
}
