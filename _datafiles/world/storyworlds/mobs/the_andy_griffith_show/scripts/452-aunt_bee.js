function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pie") >= 0 || question.indexOf("baking") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote wipes her hands on her apron and gives you a look of complete warmth.");
        mob.Command("say Now I have got an apple pie just about ready, and I made a peach cobbler this morning that I am very pleased with.", 1.5);
        mob.Command("say Sit down. You cannot stand there in my kitchen and not eat something. That is not how this kitchen works.", 3.5);
        mob.Command("emote begins cutting a slice of something without waiting for an answer.", 5.0);
        return true;
    }

    if (question.indexOf("andy") >= 0 || question.indexOf("nephew") >= 0) {
        mob.Command("say Andy is a good man. He is patient and he is fair and he raised that boy right.");
        mob.Command("emote pauses over the counter.", 2.0);
        mob.Command("say I worry about him sometimes. He takes on a great deal without making a fuss about it.", 3.5);
        mob.Command("say But that is Andy. He does not make fusses. He just handles things.", 5.5);
        mob.Command("emote returns to her work with the satisfaction of someone who has said what needed saying.", 7.0);
        return true;
    }

    if (question.indexOf("opie") >= 0) {
        mob.Command("emote brightens immediately.");
        mob.Command("say Opie is the sweetest child. He is curious about everything and he has Andy's good sense.", 1.5);
        mob.Command("say He does try my patience sometimes -- he is a boy, that is what boys do -- but his heart is good.", 3.5);
        mob.Command("emote shakes her head with fond exasperation.", 5.0);
        mob.Command("say He tracked mud on my clean floor just this morning. You would think -- never mind. His heart is good.", 6.5);
        return true;
    }

    if (question.indexOf("recipe") >= 0 || question.indexOf("cook") >= 0) {
        mob.Command("say My apple pie recipe was my mothers recipe and her mothers recipe before that.");
        mob.Command("emote measures something without measuring it, by eye, with the confidence of decades.", 2.0);
        mob.Command("say The secret is the crust. You do not overwork the dough. People overwork the dough. You mix it just until it comes together and then you stop.", 4.0);
        mob.Command("say And you use real butter. Not shortening. Real butter.", 6.5);
        mob.Command("emote makes the distinction with real feeling.", 7.5);
        return true;
    }

    // Default
    var responses = [
        "say Sit down and have something. You are too thin.",
        "emote gives you the look of a woman who knows exactly what you need and is already making it.",
        "say Now I do not want you to leave without having a piece of this pie. It would be a waste.",
        "say Have you eaten? You look like you have not eaten."
    ];
    var pick = Math.floor(Math.random() * responses.length);
    mob.Command(responses[pick]);
    return true;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote looks at what you have given her with genuine pleasure.");
    mob.Command("say Well now, is that not something. How thoughtful.", 1.5);
    mob.Command("say You sit down. I am going to get you a piece of pie.", 3.0);
    return true;
}
