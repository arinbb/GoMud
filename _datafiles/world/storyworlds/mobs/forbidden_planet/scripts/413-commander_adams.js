
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("morbius") >= 0 || question.indexOf("doctor") >= 0) {
        mob.Command("say Morbius is brilliant. I have no doubt of that. He's also been alone on this rock for twenty years with something that killed everyone else who was here.");
        mob.Command("emote 's jaw sets.", 1.5);
        mob.Command("say He says everything is under control. He's said that twice. Both times, someone died.", 2.5);
        mob.Command("say I will give him one more chance to tell me the truth before I start making my own decisions.", 4.0);
        return true;
    }

    if (question.indexOf("krell") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("technology") >= 0) {
        mob.Command("say I'm a military commander, not a physicist. But I know what a strategic asset looks like.");
        mob.Command("emote scans the horizon with his hand scanner.", 1.5);
        mob.Command("say That machine underground could change everything. Every equation the United Planets has ever run. That's why Command sent us.", 2.5);
        mob.Command("say Right now I'm less worried about the asset and more worried about the thing that killed my crew.", 4.0);
        return true;
    }

    if (question.indexOf("monster") >= 0 || question.indexOf("attack") >= 0 || question.indexOf("creature") >= 0 || question.indexOf("id") >= 0) {
        mob.Command("say Something came through the perimeter. Something that the field registered as mass and energy but that the cameras couldn't capture.");
        mob.Command("emote 's voice is controlled and very careful.", 1.5);
        mob.Command("say Two men are dead. The force field held at a hundred and forty percent capacity. It stopped.");
        mob.Command("say Morbius says it was an electromagnetic phenomenon. I don't believe him.", 3.0);
        mob.Command("say I think whatever it is, it knows where we are, and it will come back.", 4.5);
        return true;
    }

    if (question.indexOf("altaira") >= 0 || question.indexOf("girl") >= 0 || question.indexOf("daughter") >= 0) {
        mob.Command("say Miss Altaira is -- she is remarkable. She's been here her whole life and she's completely--");
        mob.Command("emote stops himself with visible effort.", 1.5);
        mob.Command("say She deserves to see Earth. That's my professional assessment.", 2.5);
        return true;
    }

    if (question.indexOf("leave") >= 0 || question.indexOf("depart") >= 0 || question.indexOf("return") >= 0 || question.indexOf("earth") >= 0) {
        mob.Command("say Our orders are to assess the colony, retrieve any colonists, and evaluate the Krell technology for possible exploitation.");
        mob.Command("emote 's voice is flat with military precision and personal frustration.", 1.5);
        mob.Command("say Morbius refuses to leave. He refuses to allow United Planets access to the machine. He may be right about one of those things.", 2.5);
        mob.Command("say Two of my crew are dead. I'm running out of patience for negotiation.", 4.0);
        return true;
    }

    var defaults = [
        "say I'm a military man. I need answers, not hypotheses. Tell me what you know.",
        "say Keep your head down and your eyes open. We don't know what's out there.",
        "say Follow protocols. Stay inside the perimeter after dark. That's an order."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("disc") >= 0 || showText.indexOf("krell") >= 0) {
        mob.Command("emote examines it with a soldier's eye rather than a scholar's.");
        mob.Command("say Krell alloy? This came from underground.", 1.5);
        mob.Command("say The machine produced this? Or Morbius did?", 2.5);
        mob.Command("say Either way, I want to know where you got it.", 3.5);
        return true;
    }

    return false;
}
