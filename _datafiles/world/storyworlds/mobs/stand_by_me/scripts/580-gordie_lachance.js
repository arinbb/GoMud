function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("story") >= 0 || question.indexOf("write") >= 0 || question.indexOf("lardass") >= 0) {
        mob.Command("emote sets down his pencil and looks at you.");
        mob.Command("say The Lardass story? Okay. So there was this kid, Davie Hogan -- everyone called him Lardass. He decided to get revenge on everyone in Castle Rock who had ever been mean to him. His weapon was the Pie Eat Contest on the Fourth of July.", 2.0);
        mob.Command("say It did not go the way the judges planned. Or the spectators. Or honestly anyone in a thirty-foot radius.", 4.0);
        mob.Command("emote grins in a way that is the most alive he has looked all day.", 5.5);
        return true;
    }

    if (question.indexOf("chris") >= 0 || question.indexOf("chambers") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say Chris is the smartest kid in our grade. Smarter than any of us. He just -- people have already decided what they think about him because of his family.", 2.0);
        mob.Command("say He's not going to let that be the whole story. I won't let it be the whole story.", 3.5);
        return true;
    }

    if (question.indexOf("brother") >= 0 || question.indexOf("denny") >= 0) {
        mob.Command("emote looks at his notebook.");
        mob.Command("say Denny died in April. Car accident. He was a year older than me.", 1.5);
        mob.Command("say My parents -- they look at me now and they don't see me. They see the space where Denny was.", 3.0);
        mob.Command("emote closes the notebook.", 4.5);
        return true;
    }

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0 || question.indexOf("ray") >= 0) {
        mob.Command("say Ray Brower was twelve years old. That's the same as me.");
        mob.Command("emote stares at the tracks for a moment.", 2.0);
        mob.Command("say I keep trying to figure out what that means. I don't think it means anything. I think that's the part I'm supposed to get used to.", 3.5);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("grow") >= 0) {
        mob.Command("say I want to be a writer. I haven't told anyone that. Chris knows, I think, but we haven't said it.");
        mob.Command("emote looks at his notebook.", 2.0);
        mob.Command("say I don't know if I'll be any good. I know I want to try.", 3.0);
        return true;
    }

    var defaults = [
        "emote looks up from his notebook with a distracted expression.",
        "say Sorry -- I was working on something. What did you say?",
        "emote taps the pencil against his knee, thinking."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("cap") >= 0 || showText.indexOf("castle rock") >= 0) {
        mob.Command("emote looks at the baseball cap for a long moment.");
        mob.Command("say That's Ray Brower's cap. I picked it up. I don't know why I picked it up. I'm going to keep it.", 2.0);
        mob.Command("emote puts it in his pocket without quite looking at you.", 3.5);
        return true;
    }

    if (showText.indexOf("notebook") >= 0) {
        mob.Command("say You can't read it. Nobody reads it. Not yet.");
        mob.Command("emote covers it with his arm, then laughs slightly.", 2.0);
        return true;
    }

    mob.Command("emote glances at it briefly.");
    mob.Command("say That's interesting. Can I think about it?");
    return true;
}
