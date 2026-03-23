
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("madison") >= 0) {
        mob.Command("emote stops folding the bag and looks at you directly.");
        mob.Command("say Billy is the best person I've ever known. Not because he's smart or because he's funny -- though he's both in his way. Because he means it.", 1.5);
        mob.Command("say Everything he does, he means it. You can't fake that. You either have it or you don't.", 3.0);
        return true;
    }

    if (question.indexOf("lunch") >= 0 || question.indexOf("bag") >= 0 || question.indexOf("note") >= 0 || question.indexOf("sandwich") >= 0) {
        mob.Command("emote picks up a lunch bag.");
        mob.Command("say Peanut butter on whole wheat. He's had the same lunch since he was seven. I stopped asking if he wanted something different around year three.", 1.5);
        mob.Command("say The note says 'you can do it.' It's always said that. I mean it different every day.", 3.0);
        return true;
    }

    if (question.indexOf("frank") >= 0 || question.indexOf("father") >= 0) {
        mob.Command("say Mr. Madison is a complicated man who loves his son more than he knows how to say.");
        mob.Command("emote folds the paper bag with care. 'Most good fathers are.'", 2.0);
        return true;
    }

    if (question.indexOf("cook") >= 0 || question.indexOf("kitchen") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("say I've been cooking in this kitchen for twenty years. I know every burner, every shelf, every pot.");
        mob.Command("say This kitchen has fed a family. That's not a small thing. I don't treat it like a small thing.", 2.0);
        return true;
    }

    if (question.indexOf("eric") >= 0 || question.indexOf("gordon") >= 0) {
        mob.Command("emote puts down what he's holding.");
        mob.Command("say Mr. Gordon doesn't eat here.", 1.5);
        mob.Command("emote picks up what he was holding again. That's the entire statement.", 3.0);
        return true;
    }

    var defaults = [
        "say You can do it. Whatever you're trying to do.",
        "emote slides a lunch bag across the counter toward you. 'It's ready.'",
        "say There is always food. That's what I'm here for."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote takes it and examines it.");
    mob.Command("say I'll find a good place for this.", 1.5);
    mob.Command("say Thank you.", 2.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it carefully.");
    mob.Command("say Where did you find this?");
    return true;
}
