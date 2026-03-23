function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("holling") >= 0 || question.indexOf("husband") >= 0 || question.indexOf("marriage") >= 0 || question.indexOf("age") >= 0) {
        mob.Command("emote smiles with total absence of self-consciousness.");
        mob.Command("say Holling is the best person I have ever met. I know the age thing is what everybody thinks about.");
        mob.Command("say I don't really think about it. He is kind and he is steady and he built this bar with his hands.", 2.0);
        mob.Command("say You don't find that in a man your own age. Not usually. Not like this.", 4.0);
        return true;
    }

    if (question.indexOf("pageant") >= 0 || question.indexOf("miss") >= 0 || question.indexOf("northwest") >= 0 || question.indexOf("territories") >= 0) {
        mob.Command("emote brightens.");
        mob.Command("say I won. I actually won. Miss Northwest Territories, 1985. I still have the sash.");
        mob.Command("say People act like that's a funny thing to be. But I worked very hard for it.", 2.0);
        mob.Command("say The talent portion was singing. Which I should do more of.", 4.0);
        return true;
    }

    if (question.indexOf("sing") >= 0 || question.indexOf("music") >= 0 || question.indexOf("song") >= 0 || question.indexOf("voice") >= 0) {
        mob.Command("emote goes shy in a way she is not usually shy.");
        mob.Command("say I sing. I mean I always kind of sang, but lately I think I might actually -- be able to sing.");
        mob.Command("say Chris says it's real. He put me on the air once. I almost passed out.", 2.0);
        mob.Command("say But then I didn't, and people called in. Good calls.", 4.0);
        return true;
    }

    if (question.indexOf("alaska") >= 0 || question.indexOf("cicely") >= 0 || question.indexOf("here") >= 0) {
        mob.Command("say Cicely is the weirdest place I have ever been, which is saying something because I am from Fort Simpson.");
        mob.Command("say But weird in a good way. Everyone here is a -- a whole person, you know?", 2.0);
        mob.Command("say Like nobody is just one thing. Even the moose is kind of a person.", 4.0);
        return true;
    }

    var defaults = [
        "emote looks at you with the direct unafraid gaze of someone who has stopped worrying about what people think.",
        "say Can I get you something? We have everything. Holling made sure of that.",
        "say I've been thinking about a lot of things lately. Big things. Small things. Both."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote leans over the bar to look at it properly.");
    mob.Command("say Oh that is really something. Where did you get that?");
    mob.Command("emote reaches out and almost touches it, then pulls her hand back with a grin.", 2.0);
    return true;
}
