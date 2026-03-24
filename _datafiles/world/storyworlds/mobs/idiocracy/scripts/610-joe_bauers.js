function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("future") >= 0 || question.indexOf("2505") >= 0 || question.indexOf("how") >= 0) {
        mob.Command("emote takes a breath. Considers where to start. Decides there is no good place to start.");
        mob.Command("say Okay so. Everyone got -- gradually -- dumber. Like nobody made a choice to be dumb. It just -- smart people had fewer kids and less-smart people had more kids and after five hundred years of that -- this.", 2.0);
        mob.Command("say Everything still works. In a way. I mean, it sort of works. Costco is enormous. They have a law school. So.", 4.0);
        mob.Command("emote gives up trying to explain it concisely.", 5.5);
        return true;
    }

    if (question.indexOf("water") >= 0 || question.indexOf("plant") >= 0 || question.indexOf("crops") >= 0 || question.indexOf("farm") >= 0) {
        mob.Command("emote straightens up with the energy of someone who has found the one subject they know completely.");
        mob.Command("say Plants need water. Regular water. H-two-O. Not Brawndo. Water is what you put on plants.", 1.5);
        mob.Command("say Brawndo has electrolytes. Electrolytes are salts and minerals. Plants do not crave salts and minerals at the expense of water. Plants crave water. This is agriculture. This is five thousand years of agriculture.", 3.0);
        mob.Command("say I cannot believe I am the only person who knows this.", 5.0);
        return true;
    }

    if (question.indexOf("brawndo") >= 0 || question.indexOf("electrolyte") >= 0) {
        mob.Command("say Brawndo does NOT have what plants crave.");
        mob.Command("emote waits for this to land. It does not land.", 2.0);
        mob.Command("say Plants crave water. Brawndo has electrolytes. Those are different things. Those are completely different things.", 3.5);
        mob.Command("emote looks around the room for confirmation. Finds none.", 5.0);
        return true;
    }

    if (question.indexOf("iq") >= 0 || question.indexOf("smart") >= 0 || question.indexOf("genius") >= 0 || question.indexOf("average") >= 0) {
        mob.Command("say I have an IQ of one hundred. That is the mean. That is average. I am average.");
        mob.Command("say Back -- where I come from -- I was the most average man in America. They put me in the program because I would not be missed.", 2.0);
        mob.Command("emote is quiet for a moment with the face of a man processing what it means to have been selected for his averageness.", 3.5);
        mob.Command("say And now I am apparently -- the smartest person alive. So. That is where we are.", 5.0);
        return true;
    }

    if (question.indexOf("rita") >= 0) {
        mob.Command("emote has a complicated expression.");
        mob.Command("say She was frozen in the pod next to mine. She is -- she is fine. She is handling it better than I am actually.", 2.0);
        mob.Command("say She is also frozen time-traveler in the future. She seems less surprised by it. I think that says something about her.", 3.5);
        return true;
    }

    var defaults = [
        "emote looks up with the expression of someone being interrupted while thinking.",
        "say What? Sorry. I was -- sorry. What did you say?",
        "emote rubs his face. He is very tired."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("brawndo") >= 0 || showText.indexOf("can") >= 0) {
        mob.Command("emote looks at the Brawndo can for a long time.");
        mob.Command("say That is what they are putting on the crops. They stopped using water in -- I do not know when. And the crops are dying. And nobody can see why.", 2.0);
        mob.Command("say Because it has electrolytes. Plants crave electrolytes. Plants do not crave electrolytes.", 4.0);
        mob.Command("emote seems to be losing his mind slightly.", 5.5);
        return true;
    }

    mob.Command("emote looks at it.");
    mob.Command("say Huh. Yeah. Okay. What is that for exactly?", 1.5);
    return true;
}
