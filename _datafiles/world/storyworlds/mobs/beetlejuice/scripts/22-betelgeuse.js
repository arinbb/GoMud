
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("name") >= 0) {
        mob.Command("say Whoa whoa whoa! Careful with the name, pal! You say it three times and BOOM — I'm free, you're stuck with me, no refunds, no exchanges!");
        mob.Command("emote waggles his eyebrows suggestively.");
        mob.Command("say But between you and me? Go ahead. Say it. I dare ya. I DOUBLE dare ya.", 2.0);
        return true;
    }

    if (question.indexOf("bio-exorcist") >= 0 || question.indexOf("exorcist") >= 0 || question.indexOf("job") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say Bio-exorcist! The best in the business! The ONLY one in the business!");
        mob.Command("say You got living people problems? I got living people solutions! I scare 'em, I freak 'em, I make their heads spin — sometimes literally!");
        mob.Command("emote pulls a business card out of thin air that reads 'Betelgeuse - Bio-Exorcist - Will Work For Freedom'.", 2.0);
        mob.Command("say Satisfaction guaranteed or your afterlife back! Terms and conditions may apply. They won't. Because I don't have terms and conditions!", 4.0);
        return true;
    }

    if (question.indexOf("sandworm") >= 0 || question.indexOf("saturn") >= 0 || question.indexOf("worm") >= 0) {
        mob.Command("say UGH. Don't get me started on sandworms.");
        mob.Command("emote shudders dramatically, his whole body rippling like jello.");
        mob.Command("say You know my ex-wife is a sandworm? Yeah. THAT was a rough divorce. She got the desert, I got trust issues.", 2.0);
        mob.Command("say Those things are all teeth and no personality. Kinda like my mother-in-law. HEY-O!", 4.0);
        return true;
    }

    if (question.indexOf("marriage") >= 0 || question.indexOf("bride") >= 0 || question.indexOf("wedding") >= 0 || question.indexOf("marry") >= 0) {
        mob.Command("say Funny you should mention that! I'm actually in the market for a bride!");
        mob.Command("say See, I need a living bride to get outta this whole 'confined to the afterlife' situation. It's a loophole. A ROMANTIC loophole.");
        mob.Command("emote straightens his moldy tie and slicks back his mossy hair.", 2.0);
        mob.Command("say What do you say? You know anybody? I clean up nice. Well. I clean up.", 3.5);
        return true;
    }

    if (question.indexOf("living") >= 0 || question.indexOf("alive") >= 0 || question.indexOf("life") >= 0) {
        mob.Command("say Living? Been there, done that, got the death certificate!");
        mob.Command("say Overrated if you ask me. All that breathing and eating and sleeping — who's got the time?");
        mob.Command("say Dead is where it's at. No taxes, no dentist appointments, no awkward Thanksgivings. Well, except for the whole 'trapped for eternity' thing.", 2.0);
        return true;
    }

    if (question.indexOf("dead") >= 0 || question.indexOf("death") >= 0 || question.indexOf("afterlife") >= 0) {
        mob.Command("say The afterlife? It's a bureaucratic NIGHTMARE. Forms, waiting rooms, caseworkers...");
        mob.Command("say It's like the DMV but forever. And you thought the DMV was hell? HA! At least hell has character!", 2.0);
        mob.Command("emote cackles wildly, bits of moss flying from his hair.", 3.5);
        return true;
    }

    if (question.indexOf("juno") >= 0 || question.indexOf("boss") >= 0 || question.indexOf("caseworker") >= 0) {
        mob.Command("say Juno? Ugh, that old bat. She used to be my caseworker. Total buzzkill.");
        mob.Command("say Always with the rules. 'Don't scare the living, don't eat the dead, don't turn into a snake at parties.'");
        mob.Command("say She washed her hands of me centuries ago. Can't imagine why!", 2.0);
        mob.Command("emote grins with far too many teeth.", 3.5);
        return true;
    }

    if (question.indexOf("maitland") >= 0 || question.indexOf("adam") >= 0 || question.indexOf("barbara") >= 0) {
        mob.Command("say The Maitlands! Nice couple. Total amateurs though. Couldn't haunt their way out of a paper bag.");
        mob.Command("say They tried scaring the Deetzes with bedsheets. BEDSHEETS! What is this, Halloween for five-year-olds?");
        mob.Command("say That's why they need ME. The Ghost with the Most! But do they appreciate it? Nooooo.", 2.5);
        return true;
    }

    if (question.indexOf("deetz") >= 0 || question.indexOf("charles") >= 0 || question.indexOf("delia") >= 0) {
        mob.Command("say The Deetzes? Oh, they're PERFECT marks. Rich city people who moved to the sticks.");
        mob.Command("say The wife's an art freak, the husband's having a breakdown, and don't even get me started on the interior decorating.", 1.5);
        mob.Command("emote rubs his hands together gleefully.", 3.0);
        mob.Command("say I could have those people out of that house in five minutes flat. But nobody ever lets me do things MY way.", 4.0);
        return true;
    }

    if (question.indexOf("lydia") >= 0) {
        mob.Command("say Lydia! Now SHE'S interesting. She can see ghosts, she's into all the creepy stuff...");
        mob.Command("say She's cute, in a Wednesday Addams kind of way. Little goth princess.");
        mob.Command("emote 's eyes light up with an unsettling gleam.", 2.0);
        mob.Command("say Hey, she wouldn't happen to be looking for a husband, would she? Asking for a friend. The friend is me.", 3.5);
        return true;
    }

    // Default response - Beetlejuice always has something to say
    var defaults = [
        "say Hey, I'm an open book! A gross, moldy, open book! Ask me about my bio-exorcist business, sandworms, marriage prospects, or the Maitlands!",
        "say What, you came all this way and THAT'S what you wanna know? Ask me something good! Ask about the bio-exorcist biz!",
        "say I got opinions on EVERYTHING, baby! Try asking about something interesting — like ME!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
