
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("park") >= 0 || question.indexOf("jurassic") >= 0) {
        mob.Command("say When I was young, I ran a flea circus. A tiny stage, tiny lights, tiny performers. People thought they could see things. They couldn't, of course. But they believed.");
        mob.Command("emote looks into the distance with the faraway quality of old memory.", 2.0);
        mob.Command("say This park was the real thing. Not an illusion. The genuine article.", 3.5);
        return true;
    }

    if (question.indexOf("expense") >= 0 || question.indexOf("spared") >= 0 || question.indexOf("cost") >= 0 || question.indexOf("money") >= 0) {
        mob.Command("say We spared no expense.");
        mob.Command("emote says it reflexively, then pauses, as though hearing it differently this time.", 1.5);
        mob.Command("say No. We didn't. Everything was the best we could get. The materials, the people, the science. No expense was spared.", 3.0);
        mob.Command("emote eats another spoonful of ice cream.", 4.5);
        return true;
    }

    if (question.indexOf("grandchild") >= 0 || question.indexOf("tim") >= 0 || question.indexOf("lex") >= 0 || question.indexOf("children") >= 0) {
        mob.Command("emote 's composure shifts, something under it becoming visible.");
        mob.Command("say Tim and Lex. My daughter's children.", 1.5);
        mob.Command("say I invited them here. I wanted them to see it. I wanted to show them something extraordinary.", 3.0);
        mob.Command("say They're going to be all right. I have to believe that. I have to.", 4.5);
        return true;
    }

    if (question.indexOf("hammond") >= 0 || question.indexOf("yourself") >= 0 || question.indexOf("you") >= 0) {
        mob.Command("say I am not a mad scientist. I am not a monster. I am a man who saw something impossible and decided to make it possible.");
        mob.Command("emote taps his amber-topped cane on the floor thoughtfully.", 2.0);
        mob.Command("say Hammond's Flea Circus to Jurassic Park. I've always believed in the genuine article.", 3.5);
        return true;
    }

    if (question.indexOf("malcolm") >= 0 || question.indexOf("chaos") >= 0 || question.indexOf("wrong") >= 0) {
        mob.Command("emote sets down his ice cream spoon.");
        mob.Command("say Dr. Malcolm is a man who finds fault with everything as a theoretical exercise.", 1.5);
        mob.Command("emote picks up the spoon again.", 3.0);
        mob.Command("say He may not be entirely wrong. About some things. In this specific instance.", 4.5);
        return true;
    }

    if (question.indexOf("ice cream") >= 0 || question.indexOf("food") >= 0 || question.indexOf("eat") >= 0) {
        mob.Command("say Real vanilla. Fresh cream. My own recipe. In a crisis, you eat the ice cream first. It won't keep.");
        mob.Command("emote smiles with the specific warmth of a man finding pleasure in small things.", 2.0);
        return true;
    }

    var defaults = [
        "say The potential of this place is still real. The potential is intact. We just need time.",
        "say I built something genuine here. Something true. That doesn't go away.",
        "say Ask me about the ice cream. It's very good ice cream."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote takes the gift and examines it.");
    mob.Command("say How very kind. How very kind of you.");
    mob.Command("emote smiles with genuine warmth. Spared no expense, I see.", 1.5);
    return true;
}
