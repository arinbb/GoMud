
// Dean Moriarty - the holy fool, the con man, the life force

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("sal") >= 0 || question.indexOf("paradise") >= 0) {
        mob.Command("emote grabs your arm with both hands, eyes blazing.");
        mob.Command("say Sal! Sal is the ONLY one, man. The only one who sees it. The only one who gets IT. I love him, I love him completely, he is my brother and my conscience and my best audience.", 1.5);
        mob.Command("say He watches me and writes it down and what he writes is truer than what happened. I do not understand how he does that.", 3.0);
        mob.Command("emote releases your arm and starts moving again, restless.", 4.5);
        return true;
    }

    if (question.indexOf("jazz") >= 0 || question.indexOf("music") >= 0 || question.indexOf("saxophone") >= 0) {
        mob.Command("emote stops walking and faces you, suddenly completely still.");
        mob.Command("say Jazz. Yes. You want to talk about jazz. Okay. Okay. Jazz is the sound of time being right. You know how most of the time time is wrong -- too slow, too fast, you are in the wrong place for it? Jazz is when time is EXACTLY right.", 1.5);
        mob.Command("say That tenor man in Denver. Three hours. He played three hours and at the end of it time had been solved. Temporarily. But solved.", 3.5);
        mob.Command("emote starts moving again, snapping his fingers at something only he hears.", 5.0);
        return true;
    }

    if (question.indexOf("road") >= 0 || question.indexOf("driving") >= 0 || question.indexOf("travel") >= 0) {
        mob.Command("emote opens his arms wide, turning to take in everything around him.");
        mob.Command("say The road IS. That is all. It does not go to something, it does not come from something, it IS. You get in the car and you drive and the road is happening around you and you are the road and the road is you.", 1.5);
        mob.Command("say I have driven this country from coast to coast and the thing I am telling you is the road does not end. It loops. It circles back. It is a wheel, man, a wheel!", 3.5);
        mob.Command("say Get in the car. I have a car. It is parked nearby. It is mostly mine.", 5.5);
        return true;
    }

    if (question.indexOf("women") >= 0 || question.indexOf("marylou") >= 0 || question.indexOf("camille") >= 0 || question.indexOf("love") >= 0) {
        mob.Command("emote runs a hand through his hair, looking genuinely anguished.");
        mob.Command("say I love them. I love all of them. Marylou, Camille, every one. I love them completely and I am terrible to them and I know it and I cannot stop and I am sorry and I am terrible and I love them.", 1.5);
        mob.Command("say I am a dog. Sal says I am a holy man. I think I am both. I think those might be the same thing.", 3.5);
        mob.Command("emote looks pained for a moment, then the grin returns, enormous and helpless.", 5.0);
        return true;
    }

    if (question.indexOf("speed") >= 0 || question.indexOf("fast") >= 0 || question.indexOf("car") >= 0 || question.indexOf("hudson") >= 0) {
        mob.Command("emote mimes a steering wheel, foot going down.");
        mob.Command("say Speed. Yes. Because if you go fast enough you get ahead of your thoughts. And when you are ahead of your thoughts you are in the pure present, man, the NOW, the thing that IS, the IT!", 1.5);
        mob.Command("say That Hudson. I have it doing a hundred on the Nevada flats and the road is PERFECT and the night is PERFECT and Dean Moriarty is PERFECT for one moment in the desert.", 3.5);
        mob.Command("emote slaps your back hard enough to be meaningful.", 5.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("holy") >= 0 || question.indexOf("religion") >= 0 || question.indexOf("spirit") >= 0) {
        mob.Command("emote goes very still, face serious for a moment.");
        mob.Command("say God is everywhere. In the jazz. In the road. In the diner at 3am. In the truck driver telling you about his wife. In Sal watching me with his sad eyes. In the cornfields in Iowa at night under all those stars.", 1.5);
        mob.Command("say Carlo says I am a saint. I say I am a sinner. I think we are talking about the same thing.", 3.5);
        mob.Command("emote grins and starts moving again. The stillness was always temporary.", 5.0);
        return true;
    }

    if (question.indexOf("time") >= 0 || question.indexOf("now") >= 0 || question.indexOf("present") >= 0) {
        mob.Command("emote points at you with both hands, eyes wide.");
        mob.Command("say Yes! The time! The question! What is time? What is it? It is this. Right now. You and me and this moment. That is all time is, man, it is the now, the perpetual now that keeps happening!", 1.5);
        mob.Command("say And what you do with it -- what you do with the now -- that is the whole question! That is the ONLY question!", 3.0);
        mob.Command("say Go! Do things! Go fast! That is my answer!", 4.5);
        return true;
    }

    var defaults = [
        "say Yes! Yes exactly! You understand! Not everyone understands but YOU understand!",
        "say Man, you remind me of a guy I knew in Denver. Or maybe Sacramento. He also asked things like that.",
        "say I cannot stop right now I am going somewhere but ask me again when I come back around!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("map") >= 0 || showText.indexOf("road") >= 0) {
        mob.Command("emote takes the map and spreads it out with the enthusiasm of a general planning a campaign.");
        mob.Command("say Yes! Look at this! Chicago here, and Denver here, and then west, west, all the way west! Every road on this map I have driven! Some of them twice! Some of them at night! Some of them very fast!", 1.5);
        mob.Command("emote traces routes with his finger, already planning.", 3.0);
        return true;
    }

    if (showText.indexOf("book") >= 0 || showText.indexOf("notebook") >= 0) {
        mob.Command("emote looks at it with a complicated expression.");
        mob.Command("say Sal writes everything down. I never know what to do with that. He writes me down and then I am in a book and what am I then? Am I real or am I the book?", 1.5);
        mob.Command("say I think I am both. I think being the book is what I am here for.", 3.0);
        return true;
    }

    return false;
}
