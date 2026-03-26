function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("art") >= 0 || question.indexOf("catapult") >= 0 || question.indexOf("piano") >= 0 || question.indexOf("trebuchet") >= 0) {
        mob.Command("emote turns to face you with the focused attention of someone who has been waiting to be asked this.");
        mob.Command("say I am going to launch a piano from a trebuchet into the air above Cicely. This is art.");
        mob.Command("say Not because it destroys something. Because it creates a moment of impossible beauty.", 2.0);
        mob.Command("say A piano in the air is a piano freed from the floor. From the assumption that it must stay where it is.", 4.0);
        mob.Command("say That is the argument I am making. With a trebuchet.", 5.0);
        return true;
    }

    if (question.indexOf("philosophy") >= 0 || question.indexOf("meaning") >= 0 || question.indexOf("life") >= 0 || question.indexOf("wisdom") >= 0) {
        mob.Command("emote leans back and lets a moment of thought happen.");
        mob.Command("say Jung says we are all trying to become what we already are. The work is removal, not addition.");
        mob.Command("say Cicely is a place that removes things. The excess. The pretense. The wrong-sized ambitions.", 2.0);
        mob.Command("say What you have left after Alaska is who you actually are. Not everyone likes what they find.", 4.0);
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("vinyl") >= 0 || question.indexOf("radio") >= 0 || question.indexOf("broadcast") >= 0) {
        mob.Command("emote touches the turntable gently.");
        mob.Command("say Music is the only argument that works on the body directly. No translation required.");
        mob.Command("say The right song at the right moment is a physical event. It happens to you, not at you.", 2.0);
        mob.Command("say Radio is how I make that available to everyone in a forty-mile radius. Which is approximately everyone.", 4.0);
        return true;
    }

    if (question.indexOf("whitman") >= 0 || question.indexOf("thoreau") >= 0 || question.indexOf("jung") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("emote picks up the nearest book.");
        mob.Command("say Whitman teaches you that you are allowed to contain contradictions. Thoreau teaches you to look at what is actually in front of you.");
        mob.Command("say Jung teaches you that the thing you are most afraid of is usually the most important thing about you.", 2.0);
        mob.Command("say Between the three of them, you have a complete instruction manual for being a person.", 4.0);
        return true;
    }

    if (question.indexOf("prison") >= 0 || question.indexOf("con") >= 0 || question.indexOf("past") >= 0 || question.indexOf("before") >= 0) {
        mob.Command("say I did time. Grand theft auto, which is a long story with a good lesson inside it.");
        mob.Command("say Prison is where I found Whitman. Which is a thing I will say to anyone who asks about rehabilitation.", 2.0);
        mob.Command("say I am not rehabilitated. I am educated. The difference is significant.", 4.0);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("cicely") >= 0 || question.indexOf("wilderness") >= 0) {
        mob.Command("emote sweeps an arm toward the window and everything beyond it.");
        mob.Command("say Cicely is the experiment. Put a hundred people in the middle of this much wilderness and see what they make of each other.");
        mob.Command("say The answer, so far, is: something genuine. Something that could not happen anywhere else.", 2.0);
        mob.Command("say The wilderness strips everything down to what matters. And what matters here is extraordinary.", 4.0);
        return true;
    }

    var defaults = [
        "say This is Chris Stevens, K-Bear, reminding you that you are exactly where you are supposed to be.",
        "emote regards you with the warm interest of someone who finds human beings endlessly worth paying attention to.",
        "say Emerson says the only way out is through. In Alaska, the through part is also the out part."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
