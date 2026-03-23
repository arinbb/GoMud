function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("van") >= 0) {
        mob.Command("emote turns around and faces you with sudden intensity.");
        mob.Command("say You have seen the van? Where? What color? What direction?");
        mob.Command("emote grabs his notepad.", 1.0);
        mob.Command("say Describe it precisely. Everything you remember. Start from the beginning.", 2.0);
        return true;
    }

    if (question.indexOf("pedro") >= 0 || question.indexOf("man") >= 0 || question.indexOf("suspect") >= 0) {
        mob.Command("emote straightens and speaks with the precision of someone who has rehearsed this.");
        mob.Command("say Two individuals. One is short, mustache. One is tall, beard. They operate a modified vehicle.");
        mob.Command("say I cannot say more. Active investigation. But I am close.", 2.0);
        return true;
    }

    if (question.indexOf("case") >= 0 || question.indexOf("evidence") >= 0 || question.indexOf("board") >= 0) {
        mob.Command("emote gestures at the board with the quiet pride of an artist discussing a major work.");
        mob.Command("say Three weeks of work. Seventeen confirmed sightings. License plate leads, all checked.");
        mob.Command("say I am one piece away from the complete picture. One piece.", 2.0);
        return true;
    }

    if (question.indexOf("donut") >= 0 || question.indexOf("coffee") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote looks briefly offended.");
        mob.Command("say I do not have time to eat when there is an active case.");
        mob.Command("emote glances involuntarily at the donut box.", 1.5);
        mob.Command("say Fine. One. For energy.", 2.0);
        return true;
    }

    if (question.indexOf("frustrated") >= 0 || question.indexOf("behind") >= 0 || question.indexOf("fail") >= 0) {
        mob.Command("emote's jaw tightens noticeably.");
        mob.Command("say I am not behind. I am calibrating.");
        mob.Command("say The van cannot stay ahead forever. Physics will not allow it. Neither will I.", 2.0);
        return true;
    }

    var defaults = [
        "say I cannot discuss details of an active investigation.",
        "emote scribbles something in his notepad and looks back at the board.",
        "say Everything is related. You just have to find the connection. I will find it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it sharply.");
    mob.Command("say Where did you get that?");
    mob.Command("emote takes out his notepad and writes something before you can answer.", 1.5);
    return true;
}
