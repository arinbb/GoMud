
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("george") >= 0 || question.indexOf("costanza") >= 0) {
        mob.Command("emote pauses, considering how to explain this.");
        mob.Command("say George is my best friend. I know. I know what you're thinking.", 1.5);
        mob.Command("emote spreads his hands in a gesture of acknowledged bafflement.", 3.0);
        mob.Command("say There's no logical defense of this. He lies constantly. He never has any money. Every plan he has ends in a disaster that somehow affects me.", 5.0);
        mob.Command("say And yet.", 7.5);
        mob.Command("emote appears to have no further elaboration. The 'and yet' is complete.", 9.0);
        return true;
    }

    if (question.indexOf("elaine") >= 0 || question.indexOf("benes") >= 0) {
        mob.Command("say Elaine and I dated. Now we're friends. Is that weird?", 1.0);
        mob.Command("emote considers it.", 2.5);
        mob.Command("say It's not weird. Or it is weird, but we've done it long enough that it's just the situation now.", 4.0);
        mob.Command("say She's very smart. Also has the worst taste in men of anyone I've ever met.", 6.0);
        mob.Command("emote pauses. Considers this.", 7.5);
        mob.Command("say I include myself in that assessment.", 9.0);
        return true;
    }

    if (question.indexOf("kramer") >= 0) {
        mob.Command("emote gestures vaguely toward the door to 5B.");
        mob.Command("say Kramer.", 1.5);
        mob.Command("emote is quiet for a moment.", 3.0);
        mob.Command("say I cannot explain Kramer. Nobody can explain Kramer. Kramer is a phenomenon that exists adjacent to explanation.", 5.0);
        mob.Command("say He had a level installed in his apartment. He reconstructed a talk show set in his living room. He once set fire to a cabin.", 7.5);
        mob.Command("emote looks at the door, then back at you.", 9.5);
        mob.Command("say And he's fine. Somehow he's always fine.", 11.0);
        return true;
    }

    if (question.indexOf("superman") >= 0 || question.indexOf("magnet") >= 0) {
        mob.Command("say Superman?", 1.0);
        mob.Command("emote looks toward the refrigerator.", 2.5);
        mob.Command("say Superman is the perfect superhero. He can do everything. He's completely invulnerable. He just chooses to live like a normal person. I find that relatable.", 4.0);
        mob.Command("emote nods, satisfied with this.", 6.5);
        return true;
    }

    if (question.indexOf("comedy") >= 0 || question.indexOf("joke") >= 0 || question.indexOf("stand up") >= 0) {
        mob.Command("emote brightens slightly.");
        mob.Command("say The thing about comedy is observation. You just have to notice things.", 1.5);
        mob.Command("say Everything is material. Everything. The way people talk on elevators. The whole unspoken contract of the laundromat. Why there are different sizes of trash bags.", 3.5);
        mob.Command("emote gestures at the room around him.", 5.5);
        mob.Command("say All of this. This is the show.", 7.0);
        return true;
    }

    // Default: turn it into a bit
    var bits = [
        "say What IS that? No, I mean -- what is the deal with that, specifically?",
        "emote considers what you've said and then considers what there is to observe about what you've said.",
        "say You know, I had a bit about that. Or I'm working on one. The premise is right, the words aren't there yet.",
        "say See, this is what I mean. Everything is material."
    ];
    var pick = Math.floor(Math.random() * bits.length);
    mob.Command(bits[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it carefully.");
    mob.Command("say What is the deal with this?", 1.5);
    mob.Command("emote seems to be working out the beginning of an observation.", 3.0);
    return true;
}
