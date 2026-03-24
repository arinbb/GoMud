function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("snotty") >= 0 || question.indexOf("snarl") >= 0 || question.indexOf("franklin") >= 0) {
        mob.Command("emote sets down the glass he was polishing.");
        mob.Command("say Donn Snotty. Yes. I know that name the way you know the name of a slow leak.", 1.5);
        mob.Command("say He came in here about three years ago, sat at the bar, ordered water, and told me he was going to improve Tonetown.", 2.5);
        mob.Command("say I said: Tonetown does not need improvement. He said: everything needs improvement. That was the last civil conversation we had.", 3.5);
        mob.Command("emote goes back to polishing.", 4.5);
        mob.Command("say His mansion is south. His swamp is south. Do not go south without knowing what you are walking into.", 5.5);
        return true;
    }

    if (question.indexOf("gramps") >= 0 || question.indexOf("missing") >= 0 || question.indexOf("grandfather") >= 0) {
        mob.Command("emote pauses mid-polish.");
        mob.Command("say The inventor. Yes. I know him. He came through the hoop -- ten, twelve years ago. Introduced himself.", 1.5);
        mob.Command("say Good man. Comes in, has a drink, watches the room, asks questions that show he is actually listening to the answers.", 2.5);
        mob.Command("say He went south about a month ago. Said he had evidence on Snotty.", 3.5);
        mob.Command("say He did not come back. That tells you something about the quality of the evidence.", 4.5);
        return true;
    }

    if (question.indexOf("tass") >= 0 || question.indexOf("cool") >= 0) {
        mob.Command("emote considers the question as if it is an order he is deciding how to fill.");
        mob.Command("say Tass is the word we use. What it means is: you show up as yourself, completely, no apologies, no hedging.", 1.5);
        mob.Command("say Some people think it is about the clothes. The clothes help. The clothes are the visible part.", 2.5);
        mob.Command("say The invisible part is the decision. Are you going to be what you are, or are you going to be slightly less to make other people comfortable.", 3.5);
        mob.Command("say Tonetown says: be what you are. Snotty says: be less. That is the whole argument.", 4.5);
        return true;
    }

    if (question.indexOf("swamp") >= 0 || question.indexOf("south") >= 0) {
        mob.Command("emote leans slightly forward.");
        mob.Command("say The swamp is Snotty's work. He runs a chemical operation through the pipes -- neutralizes the chromatic signature of the area.", 1.5);
        mob.Command("say It does not hurt you, physically. It just -- dims things. Including you.", 2.5);
        mob.Command("say If you are going south, dress tass before you go. It gives you some resistance to the grey.", 3.5);
        mob.Command("emote goes back to the glass.", 4.5);
        mob.Command("say Also: go through the gates, not around them. The swamp is worse off the road.", 5.5);
        return true;
    }

    if (question.indexOf("bar") >= 0 || question.indexOf("drink") >= 0) {
        mob.Command("emote sets a glass on the rail.");
        mob.Command("say The bar has been here since before Snotty. Will be here after.", 1.5);
        mob.Command("say I make drinks that match the city. Saturated, intentional, exactly what they say they are.", 2.5);
        mob.Command("say The cocktail at the far end is the one I make when things are bad. It is extremely magenta. It helps.", 3.5);
        return true;
    }

    var defaults = [
        "say Ask me about Snotty, about Gramps, about the swamp. I know things. That is what bartenders are.",
        "emote polishes a glass and watches you with the patience of a person with nowhere else to be.",
        "say The bar is open. The knowledge is free. The drinks cost something. What do you need?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("shades") >= 0 || showText.indexOf("sunglasses") >= 0) {
        mob.Command("emote looks at the sunglasses with the slight nod of a connoisseur.");
        mob.Command("say Tonetown Market. Good choice. The angular frames are correct for this year.", 1.5);
        mob.Command("say You are dressing tass. Good. It matters -- practically, not just aesthetically.", 2.5);
        return true;
    }

    mob.Command("emote examines what you are showing.");
    mob.Command("say From Tonetown, I assume. Things from Tonetown have a quality that is hard to describe and easy to recognize.", 1.5);
    return true;
}
