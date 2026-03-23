
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("patricia") >= 0 || question.indexOf("pat") >= 0 || question.indexOf("woman") >= 0 || question.indexOf("missing") >= 0) {
        mob.Command("emote leans forward immediately.");
        mob.Command("say You've seen her? Patricia Carroll — about this height, dark hair. She was driving through here three days ago.", 1.5);
        mob.Command("emote produces a photograph from his jacket pocket — a young woman, laughing.", 2.5);
        mob.Command("say She was going to pay a courtesy call on an old woman. Fiancee's mother. She hasn't come back.", 4.0);
        mob.Command("emote 's jaw tightens. 'Mrs. Trefoile. The house down the lane. Do you know it?'", 5.5);
        return true;
    }

    if (question.indexOf("trefoile") >= 0 || question.indexOf("mrs") >= 0 || question.indexOf("house") >= 0 || question.indexOf("lane") >= 0) {
        mob.Command("say The locals won't talk about her. Not directly.", 1.0);
        mob.Command("emote 's voice is careful, worried.", 2.0);
        mob.Command("say The barman looked at the floor when I said the name. That tells me something.", 3.5);
        mob.Command("say I'm going up there. I'm going up there tonight if she hasn't come back.", 5.0);
        return true;
    }

    if (question.indexOf("brooch") >= 0 || question.indexOf("pin") >= 0 || question.indexOf("silver") >= 0) {
        mob.Command("emote looks at the brooch at the waitress's collar, then back at you.");
        mob.Command("say That's Patricia's. I gave it to her on her birthday. I know that piece.", 2.0);
        mob.Command("emote 's voice drops. 'She found it in the road, she said. In the road.'", 3.5);
        mob.Command("say Patricia would not have dropped that brooch. Not unless something made her drop it.", 5.5);
        return true;
    }

    if (question.indexOf("stephen") >= 0 || question.indexOf("fiance") >= 0 || question.indexOf("fiancee") >= 0) {
        mob.Command("say Stephen Trefoile died two years ago.", 1.0);
        mob.Command("emote keeps his voice level with visible effort.", 2.0);
        mob.Command("say Patricia was engaged to him. When he died, she wrote to the mother. A courtesy call. That's all it was meant to be.", 3.5);
        mob.Command("say Just a courtesy call.", 5.0);
        return true;
    }

    var defaults = [
        "say Have you seen her? Dark hair, about this height?",
        "emote looks at you with the focused desperation of a man running out of time.",
        "say I need to find her. I need to find her today."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var item = eventDetails.item;
    if (!item) {
        mob.Command("emote looks at it, then at you.");
        return true;
    }

    var name = item.NameSimple().toLowerCase();
    if (name.indexOf("mirror") >= 0) {
        mob.Command("emote looks at the mirror, puzzled.");
        mob.Command("say Where did you get that? That came from the house, didn't it.", 1.5);
        mob.Command("emote stands. 'Tell me what's happening up there. Tell me everything.'", 3.0);
        return true;
    }

    mob.Command("emote examines it quickly.");
    mob.Command("say Does Patricia have something like this? Was she carrying this?");
    return true;
}
