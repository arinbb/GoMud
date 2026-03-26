
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();
    var user = GetUser(eventDetails.sourceId);

    // Check if the player has done key things
    var visitedAfterlife = false;
    var summonedBJ = false;
    if (user) {
        visitedAfterlife = (user.GetTempData("visited_afterlife") == "true");
        summonedBJ = (user.GetTempData("bj_summoned") == "true");
    }

    if (question.indexOf("handbook") >= 0 || question.indexOf("book") >= 0) {
        if (visitedAfterlife) {
            mob.Command("say So you've BEEN there. The waiting room. You saw what it's like.");
            mob.Command("say Now you understand why the handbook is so important. Even if it IS written like stereo instructions.", 1.5);
            mob.Command("say Did you meet Juno? She's... intense.", 3.0);
        } else {
            mob.Command("say The Handbook for the Recently Deceased? It reads like stereo instructions. I've been through it three times and I still don't understand half of it.");
            mob.Command("say There's a chapter on haunting that references an appendix that doesn't exist. Who edited this thing?");
        }
        return true;
    }

    if (question.indexOf("model") >= 0 || question.indexOf("town") >= 0 || question.indexOf("hobby") >= 0) {
        mob.Command("say Oh, the model! That's my life's work. Well... my life's work when I was alive.");
        mob.Command("emote gestures proudly at the detailed miniature town of Winter River.");
        mob.Command("say Every building is to scale. Every shingle hand-cut. I've been working on it for years.", 1.5);
        mob.Command("say You know, sometimes I think I see things moving in it. Tiny people, going about their tiny lives. Barbara says I'm imagining it.", 3.0);
        mob.Command("say I don't think I'm imagining it.", 5.0);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("die") >= 0) {
        mob.Command("say It's... an adjustment. One minute you're driving home from the hardware store, the next you're swerving to avoid a dog, and then...");
        mob.Command("emote trails off, staring at his translucent hands.");
        mob.Command("say Well. Let's just say the covered bridge wasn't very forgiving.", 2.0);
        mob.Command("say The worst part? I never finished the model town post office. The tiny mailbox is only half-painted.", 3.5);
        return true;
    }

    if (question.indexOf("barbara") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("say Barbara is the best thing that ever happened to me. Living or dead.");
        mob.Command("emote smiles warmly, his translucent form flickering slightly.");
        mob.Command("say She's handling all this better than I am, honestly. She always was the strong one.", 1.5);
        mob.Command("say She still tries to cook, you know. Can't taste anything, can't eat anything, but she still organizes the spice rack. Force of habit. Force of love.", 3.0);
        return true;
    }

    if (question.indexOf("beetlejuice") >= 0 || question.indexOf("betelgeuse") >= 0) {
        if (summonedBJ) {
            mob.Command("say You SUMMONED him?!");
            mob.Command("emote 's translucent form flares bright with alarm.");
            mob.Command("say Oh no. Oh no no no. Barbara! BARBARA! They summoned him!", 1.5);
            mob.Command("say Do you have any idea what you've done? Last time he got loose he tried to MARRY Lydia. He turned the house into a carnival. He -- he --", 3.0);
            mob.Command("emote sits down heavily on his workbench, putting his head in his hands. His head briefly sinks through his hands.", 5.0);
        } else {
            mob.Command("say Shh! Don't say that name!");
            mob.Command("emote looks around nervously, checking every corner of the attic.");
            mob.Command("say He's dangerous. Really dangerous. We made the mistake of calling him once and it nearly cost us everything.", 1.5);
            mob.Command("say Whatever you do, don't say his name three times in the living room. I'm serious. PLEASE.", 3.0);
        }
        return true;
    }

    if (question.indexOf("scare") >= 0 || question.indexOf("haunt") >= 0 || question.indexOf("ghost") >= 0) {
        mob.Command("say Barbara and I have been trying to scare the Deetzes out of the house. It's... not going great.");
        mob.Command("emote pulls at his face. It stretches two inches then snaps back.");
        mob.Command("say I tried the bedsheet thing. With eyeholes? They thought it was a Diane Arbus photograph.", 2.0);
        mob.Command("say Barbara tried making scary noises. Delia recorded them and called it 'ambient sculpture.'", 3.5);
        mob.Command("say We're terrible at being dead.", 5.0);
        return true;
    }

    if (question.indexOf("house") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say This was our dream house. We spent years fixing it up, making it just right.");
        mob.Command("say And now the Deetzes are... well, you've seen what Delia's done to the place.", 1.5);
        mob.Command("emote winces, looking at a wall that has been painted an aggressive shade of mauve.");
        mob.Command("say She replaced the wallpaper I hung myself with... I don't even know what to call it. Abstract suffering?", 3.5);
        return true;
    }

    if (question.indexOf("lydia") >= 0) {
        mob.Command("say Lydia's a great kid. She can actually see us, you know. Most living people can't.");
        mob.Command("say She's got a good heart, even if she dresses like every day is a funeral.", 1.5);
        mob.Command("say She reminds me of the daughter Barbara and I... well. We never got the chance.", 3.0);
        mob.Command("emote looks away, blinking. Can ghosts cry? Apparently they can.", 4.5);
        return true;
    }

    if (question.indexOf("delia") >= 0 || question.indexOf("deetz") >= 0) {
        mob.Command("say The Deetzes... look, I'm sure they're fine people. I'm sure of it.");
        mob.Command("emote does not look sure of it.");
        mob.Command("say But Delia turned my workshop into a 'creative space.' She put a crystal on my bandsaw. A CRYSTAL. ON MY BANDSAW.", 2.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("business card") >= 0 || showText.indexOf("card") >= 0) {
        mob.Command("emote recoils at the sight of the card.");
        mob.Command("say Don't trust him! Barbara and I learned the hard way. That man is pure chaos in a striped suit.", 1);
        mob.Command("say He tried to marry Lydia. MARRY her. A 600-year-old dead guy trying to marry a teenager. That's -- I don't even have words.", 2.5);
        return true;
    }

    if (showText.indexOf("handbook") >= 0) {
        mob.Command("say Oh, you found a copy too? Did you understand the part about ectoplasmic subdivision? Because I sure didn't.");
        mob.Command("say I've been highlighting passages but the highlighter keeps going through the page. Ghost problems.", 2.0);
        return true;
    }

    if (showText.indexOf("miniature") >= 0 || showText.indexOf("model") >= 0) {
        mob.Command("emote 's translucent form flickers with emotion.");
        mob.Command("say That's... that's my house. Our house. Every shingle. I hand-cut every single shingle.", 1);
        mob.Command("emote reaches for the miniature, then pulls his hand back, afraid he'll phase through it.", 2.5);
        return true;
    }

    if (showText.indexOf("chalk") >= 0) {
        mob.Command("say Careful with that. Chalk draws doors you can't close.");
        mob.Command("say The handbook says something about 'liminal thresholds' but the explanation references an appendix that doesn't exist. Typical.", 2.0);
        return true;
    }

    return false;
}
