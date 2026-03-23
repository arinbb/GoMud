
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("rhapsody") >= 0 || question.indexOf("poodle") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("say She's ready. She's been ready for two weeks.");
        mob.Command("emote checks her watch.", 1.5);
        mob.Command("say We've run the full pattern forty-seven times in training. She knows it. I know it. We know it together.", 3.5);
        mob.Command("emote makes a note on the legal pad. This note is about Rhapsody.", 5.5);
        mob.Command("say The last show she moved a hair wide on the down-and-back. We fixed that. It won't happen today.", 7.5);
        return true;
    }

    if (question.indexOf("sherri") >= 0 || question.indexOf("cabot") >= 0 || question.indexOf("owner") >= 0) {
        mob.Command("say Sherri Ann is a wonderful owner.");
        mob.Command("emote says this with the professional warmth of the complete and total truth.", 1.5);
        mob.Command("say She trusts me in the ring. That matters. Some owners -- they get in the way. Sherri Ann understands her job and my job.", 3.5);
        mob.Command("emote is quiet for a beat.", 6.0);
        mob.Command("say She cares about Rhapsody. That comes through in how she's raised her.", 7.5);
        return true;
    }

    if (question.indexOf("handle") >= 0 || question.indexOf("handler") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say I've been handling for fourteen years. Started with obedience, moved into conformation.");
        mob.Command("emote recites this not as a resume but as context.", 2.0);
        mob.Command("say The handler's job is to show what the dog is. You're not performing. You're presenting.", 4.0);
        mob.Command("say The best handling disappears. The judge should see the dog, not me.", 6.5);
        mob.Command("emote looks at her notes again. This is the thing she's best at, disappearing in plain sight.", 8.5);
        return true;
    }

    if (question.indexOf("win") >= 0 || question.indexOf("best in show") >= 0 || question.indexOf("today") >= 0) {
        mob.Command("emote doesn't look up from the legal pad.");
        mob.Command("say Everything we can control is controlled.", 1.5);
        mob.Command("say The dog is prepared. The pattern is set. I know this ring.", 3.5);
        mob.Command("emote looks up.", 5.0);
        mob.Command("say We're going to win.", 6.5);
        mob.Command("emote goes back to the legal pad. Statement delivered, conversation concluded.", 8.0);
        return true;
    }

    // Default
    mob.Command("emote looks up briefly.");
    mob.Command("say Yes?", 0.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it quickly with the focus of someone who has learned to assess things fast.");
    mob.Command("say Is this relevant to the show?", 1.5);
    mob.Command("emote waits for an answer. If it is relevant, she will note it.", 3.0);
    return true;
}
