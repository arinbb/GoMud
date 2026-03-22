
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("rule") >= 0 || question.indexOf("law") >= 0 || question.indexOf("regulation") >= 0) {
        mob.Command("say The rules are simple. The living and the dead are not supposed to interact. That's the whole point.");
        mob.Command("emote takes a drag on her cigarette. Smoke drifts from the slit in her throat.");
        mob.Command("say You die, you move on, you leave the living alone. But does anyone listen? No. They never listen.", 2.0);
        mob.Command("say I've been doing this job for centuries and not one dead person has ever just followed the rules.", 4.0);
        return true;
    }

    if (question.indexOf("handbook") >= 0 || question.indexOf("book") >= 0 || question.indexOf("manual") >= 0) {
        mob.Command("say The Handbook for the Recently Deceased. Read it. That's what it's for.");
        mob.Command("say I don't have time to walk every newly dead idiot through the basics. That's what the handbook is for.");
        mob.Command("emote stamps out her cigarette and immediately lights another.", 2.0);
        mob.Command("say Yes, it's confusing. Yes, it reads like stereo instructions. File a complaint with publishing. Form 27-B stroke 6.", 3.5);
        return true;
    }

    if (question.indexOf("beetlejuice") >= 0 || question.indexOf("betelgeuse") >= 0) {
        mob.Command("say Don't. Say. That. Name.");
        mob.Command("emote 's eyes narrow dangerously, smoke pouring from her throat.");
        mob.Command("say He's a loose cannon. A menace. I was his caseworker once — ONCE — and that was enough for several eternities.", 2.0);
        mob.Command("say I washed my hands of him centuries ago. He's on his own. Whatever he does, I don't want to know about it.", 4.0);
        return true;
    }

    if (question.indexOf("wait") >= 0 || question.indexOf("line") >= 0 || question.indexOf("queue") >= 0 || question.indexOf("number") >= 0) {
        mob.Command("say Everyone waits. No exceptions. Take a number, fill out your forms, and wait to be called.");
        mob.Command("say I don't care who you were when you were alive. You're dead now. You wait like everyone else.");
        mob.Command("say The football team has been out there for weeks. They're not complaining. Well, they are, but quietly.", 2.0);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("die") >= 0) {
        mob.Command("say You're dead. It's permanent. Deal with it.");
        mob.Command("emote looks at you with the weary patience of someone who has had this conversation ten million times.");
        mob.Command("say There's no going back, no do-overs, no appeals process. Well, there IS an appeals process, but the paperwork takes about three hundred years.", 2.0);
        return true;
    }

    if (question.indexOf("smok") >= 0 || question.indexOf("cigarette") >= 0) {
        mob.Command("say Old habits.");
        mob.Command("emote takes a long drag. Smoke curls from both her mouth and the slit in her throat.");
        mob.Command("say What's it going to do, kill me?", 1.5);
        mob.Command("emote almost smiles. Almost.", 3.0);
        return true;
    }

    if (question.indexOf("office") >= 0 || question.indexOf("work") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say I'm a caseworker for the recently deceased. I process cases, file paperwork, and try to keep idiots from haunting the living.");
        mob.Command("say It's thankless work. The dead are needy, the living are clueless, and the paperwork never ends.");
        mob.Command("emote gestures at a mountain of folders on her desk.", 2.0);
        return true;
    }

    mob.Command("say I'm busy. Ask me something relevant — the rules, the handbook, the waiting process — or get out of my office.");
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("handbook") >= 0) {
        mob.Command("say You're supposed to READ it, not wave it around. I don't have time for show and tell. I have 47,000 cases backlogged.");
        return true;
    }

    if (showText.indexOf("business card") >= 0 || showText.indexOf("card") >= 0) {
        mob.Command("emote 's eyes narrow. Smoke pours from the slit in her throat.");
        mob.Command("say Where did you get this? If that maniac is loose again I swear to... never mind. Just don't say his name. Don't even THINK it too loudly.", 1);
        return true;
    }

    if (showText.indexOf("ticket") >= 0 || showText.indexOf("waiting room") >= 0) {
        mob.Command("say Your number will be called when it's called. Bothering me about it won't speed things up.");
        return true;
    }

    mob.Command("say I don't have time for this. File a form.");
    return true;
}
