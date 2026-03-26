function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("new york") >= 0 || question.indexOf("manhattan") >= 0 || question.indexOf("city") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("emote closes his eyes briefly.");
        mob.Command("say Manhattan. Upper West Side. Zabar's on a Sunday morning. The park in autumn.");
        mob.Command("say The smell of a real deli. A subway that goes somewhere. Civilization.", 2.0);
        mob.Command("emote pauses.", 4.0);
        mob.Command("say I miss it. I miss it every single day.", 4.5);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("cicely") >= 0 || question.indexOf("wilderness") >= 0) {
        mob.Command("emote gestures expansively at the log walls.");
        mob.Command("say This is the hostile wilderness. This is where New York doctors go when they make unfortunate financial arrangements with state medical boards.");
        mob.Command("say It is beautiful. I acknowledge it is beautiful. It is also trying to kill everyone who lives here in a variety of creative ways.", 2.0);
        mob.Command("say I have treated frostbite, bear encounters, altitude issues, and a man who was injured by a moose. A moose.", 4.0);
        return true;
    }

    if (question.indexOf("maggie") >= 0 || question.indexOf("o'connell") >= 0 || question.indexOf("oconnell") >= 0 || question.indexOf("pilot") >= 0) {
        mob.Command("emote gets a look.");
        mob.Command("say Maggie. Maggie is -- she is the most infuriating person I have ever met in a life full of infuriating people.");
        mob.Command("say She is also. She is also. This is complicated and I am not having this conversation.", 2.0);
        mob.Command("emote straightens some papers on the desk with unnecessary force.", 4.0);
        return true;
    }

    if (question.indexOf("medicine") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("practice") >= 0 || question.indexOf("heal") >= 0) {
        mob.Command("emote straightens his posture slightly.");
        mob.Command("say I am a very good doctor. I went to Columbia and Johns Hopkins. I know what I am doing.");
        mob.Command("say The practice here is -- unconventional. The patients present with things that are not in any textbook I own.", 2.0);
        mob.Command("say But the medicine is real. The patients are real. I take that seriously.", 4.0);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("stay") >= 0 || question.indexOf("leave") >= 0 || question.indexOf("loan") >= 0) {
        mob.Command("say The state of Alaska paid for my medical school. In exchange I owe them four years of service in an underserved area.");
        mob.Command("say Cicely is an underserved area. An aggressively underserved area.", 2.0);
        mob.Command("emote looks out the window.", 4.0);
        mob.Command("say I have two years remaining. I am counting.", 4.5);
        return true;
    }

    var defaults = [
        "say I am a doctor from New York City. I am doing my best under significant constraints.",
        "emote looks at you with the expression of a man who is always slightly surprised to find himself in Alaska.",
        "say Ask me something medical. That I can actually help with."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
