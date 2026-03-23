function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("moon") >= 0 || question.indexOf("nasa") >= 0 || question.indexOf("apollo") >= 0 || question.indexOf("space") >= 0 || question.indexOf("astronaut") >= 0) {
        mob.Command("emote straightens to his full height.");
        mob.Command("say I went to the moon. Apollo 14. I stood on another world and looked back at this one.");
        mob.Command("say Do you understand what that does to a person? To actually see the Earth from outside it?", 2.0);
        mob.Command("say Everything looks different from up there. Including what matters.", 4.0);
        mob.Command("emote glances at the moon rock.", 5.0);
        mob.Command("say I brought a piece of it back. Not for the nation. For myself.", 5.5);
        return true;
    }

    if (question.indexOf("develop") >= 0 || question.indexOf("plan") >= 0 || question.indexOf("resort") >= 0 || question.indexOf("build") >= 0 || question.indexOf("cicely") >= 0) {
        mob.Command("say Cicely has untapped potential. I own a significant portion of the surrounding land.");
        mob.Command("say A golf course. A hotel. A proper runway. This could be something.", 2.0);
        mob.Command("say The town has character. You build infrastructure around character and you have destination.", 4.0);
        mob.Command("emote spreads his hands over the maps.", 5.0);
        mob.Command("say It is going to happen. I am patient.", 5.5);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("why") >= 0 || question.indexOf("here") >= 0 || question.indexOf("stay") >= 0) {
        mob.Command("emote pauses, which is not his usual speed.");
        mob.Command("say I came here after the program ended. I needed something that was still -- frontier.");
        mob.Command("say Houston is small. Washington is small. Alaska is not small.", 2.0);
        mob.Command("emote looks out the window at the mountains.", 4.0);
        mob.Command("say The scale here is right. For someone who has seen what I have seen.", 4.5);
        return true;
    }

    if (question.indexOf("military") >= 0 || question.indexOf("service") >= 0 || question.indexOf("marines") >= 0 || question.indexOf("war") >= 0) {
        mob.Command("say Marines. Then test pilot. Then NASA. That is a progression with a logic.");
        mob.Command("say I have served this country in several capacities. I am proud of all of them.", 2.0);
        mob.Command("say I am proud of Cicely too. It is its own kind of service.", 4.0);
        return true;
    }

    if (question.indexOf("joel") >= 0 || question.indexOf("doctor") >= 0) {
        mob.Command("say Fleischman is a capable doctor who doesn't know yet that he has found his place.");
        mob.Command("say I arranged to bring him here. Some people need to be placed where they belong.", 2.0);
        mob.Command("emote allows himself a small satisfaction.", 4.0);
        mob.Command("say He'll acknowledge it eventually. They always do.", 4.5);
        return true;
    }

    var defaults = [
        "say I went to the moon. This is foundational context.",
        "emote regards you with the considered authority of a man who has been to space and returned.",
        "say Cicely is going to be extraordinary. The timeline is my own business."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it with the evaluating eye of someone who has assessed many things.");
    mob.Command("say That has value. I can see that.");
    mob.Command("emote nods once, military brief.", 2.0);
    return true;
}
