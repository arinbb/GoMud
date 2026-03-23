function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("man") >= 0 || question.indexOf("chong") >= 0 || question.indexOf("partner") >= 0) {
        mob.Command("emote lights up and gestures broadly.");
        mob.Command("say Man! My partner, man. We have been through everything together, him and me.");
        mob.Command("say He lives up the street. Mostly he plays guitar and looks at the lava lamp. But when it counts, man is there.", 2.0);
        return true;
    }

    if (question.indexOf("van") >= 0) {
        mob.Command("emote waves his hand like he is clearing smoke.");
        mob.Command("say The van? What van? I do not know what you are talking about with a van.");
        mob.Command("emote glances in the rearview mirror.", 1.5);
        mob.Command("say Actually, forget I said that. Beautiful vehicle. Very natural materials.", 2.5);
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("band") >= 0 || question.indexOf("roxy") >= 0 || question.indexOf("battle") >= 0) {
        mob.Command("emote turns to face you with the energy of someone who has been waiting to discuss this.");
        mob.Command("say The Battle of the Bands at the Roxy! On the Sunset Strip, man! We are playing it.");
        mob.Command("say We are going to win it too. Pedro and Man, live at the Roxy. That is going on a poster.", 2.0);
        return true;
    }

    if (question.indexOf("stedenko") >= 0 || question.indexOf("cop") >= 0 || question.indexOf("police") >= 0) {
        mob.Command("emote checks the rearview mirror very casually.");
        mob.Command("say That cop. He is always back there somewhere. You know the type.");
        mob.Command("say He is very dedicated. I respect it. I just prefer he is dedicated somewhere else.", 2.0);
        return true;
    }

    if (question.indexOf("cousin") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote nods with genuine warmth.");
        mob.Command("say My cousin has a house, right, over on the east side. Always food. Always people.");
        mob.Command("say Any time I need anything, I go to my cousin. She always has too much of whatever it is.", 2.0);
        return true;
    }

    if (question.indexOf("car") >= 0 || question.indexOf("lowrider") >= 0 || question.indexOf("hydraulics") >= 0) {
        mob.Command("emote pats the dashboard with genuine tenderness.");
        mob.Command("say This car is everything, man. 1964 Impala. I put three years into this car.");
        mob.Command("say The hydraulics alone took six months. You want to see it bounce? Watch this.", 2.0);
        mob.Command("emote hits the switch. The car rises and falls perfectly.", 3.5);
        return true;
    }

    var defaults = [
        "say You know what, man? Everything is going to work out. I can feel it.",
        "emote turns the radio up slightly and nods to it.",
        "say My cousin says I am too optimistic. My cousin is wrong about this specific thing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with raised eyebrows.");
    mob.Command("say Hey, where did you get that?");
    mob.Command("say That is something. Keep that. That is a good thing to have.", 1.5);
    return true;
}
