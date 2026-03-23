
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("rose") >= 0 || question.indexOf("flower") >= 0) {
        mob.Command("emote goes very still for a moment, looking at something far away.");
        mob.Command("say She is mine. I think she is rather proud and difficult.");
        mob.Command("say But she is also mine. I used to think she was clever. Now I think she was fragile, and that is the same thing.", 2.0);
        mob.Command("emote touches the tiny scarf with one hand.", 3.0);
        return true;
    }

    if (question.indexOf("fox") >= 0 || question.indexOf("tame") >= 0 || question.indexOf("taming") >= 0) {
        mob.Command("emote 's eyes brighten.");
        mob.Command("say The fox told me something important. That you are responsible, forever, for what you have tamed.");
        mob.Command("say I tamed him. He tamed me. We are responsible for each other.", 2.0);
        mob.Command("say What is essential is invisible to the eye. He told me the secret.", 3.5);
        return true;
    }

    if (question.indexOf("adult") >= 0 || question.indexOf("grown") >= 0 || question.indexOf("people") >= 0) {
        mob.Command("emote tilts his head with an expression of genuine puzzlement.");
        mob.Command("say Adults are very strange. They are concerned with things that seem important but are not.");
        mob.Command("say They like numbers. They like owning things. They do not often look at the sky.", 2.0);
        mob.Command("emote shrugs with the complete unconcern of someone who has made peace with not understanding.", 3.5);
        return true;
    }

    if (question.indexOf("sheep") >= 0 || question.indexOf("draw") >= 0) {
        mob.Command("emote looks at you very seriously.");
        mob.Command("say If you please -- draw me a sheep.");
        mob.Command("say Not a sheep that is sick. Not an old sheep. A good sheep. That will live a long time.", 2.0);
        mob.Command("emote waits, completely serious, as if this is the most important request in the world. It is.", 3.5);
        return true;
    }

    if (question.indexOf("planet") >= 0 || question.indexOf("asteroid") >= 0 || question.indexOf("home") >= 0 || question.indexOf("b-612") >= 0 || question.indexOf("b612") >= 0) {
        mob.Command("say My planet is very small. You can pull up all the baobab seedlings in a single morning.");
        mob.Command("say It has three volcanoes. Two active. I clean them every day.", 2.0);
        mob.Command("emote looks at the stars for a moment.", 3.0);
        mob.Command("say And my rose. Though she would not want me to mention her first. She has her pride.", 4.5);
        return true;
    }

    if (question.indexOf("star") >= 0 || question.indexOf("sky") >= 0 || question.indexOf("laugh") >= 0) {
        mob.Command("emote laughs -- the sound is exactly like five hundred million tiny bells.");
        mob.Command("say You will look at the stars differently now. Every one might be mine.");
        mob.Command("say When you hear me laugh, you will remember that laughter. That is the point.", 2.0);
        return true;
    }

    if (question.indexOf("baobab") >= 0 || question.indexOf("danger") >= 0) {
        mob.Command("say Baobabs are a terrible danger. If you neglect them when small, they split the planet.");
        mob.Command("say It is a matter of discipline. You must tend your planet every morning.", 2.0);
        mob.Command("emote looks at you very directly.", 3.0);
        mob.Command("say The same is true of the inside of a person. I think.", 4.0);
        return true;
    }

    var defaults = [
        "say What do you do when you are sad? On my planet I watch the sunset.",
        "emote tilts his head and considers you with complete seriousness.",
        "say I once knew a man who counted stars he thought he owned. He never looked at them.",
        "say Grown-ups never understand anything by themselves, so it is tiresome to explain."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines what you are showing him with the total attention of a child.");
    mob.Command("say That is interesting. What does it do? Is it useful for sheep?");
    return true;
}

function onIdle(mob, room) {
    return false;
}
