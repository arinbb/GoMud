// Joseph Seed - The Father
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("god") >= 0 || question.indexOf("faith") >= 0 || question.indexOf("believe") >= 0) {
        mob.Command("emote is quiet for a moment. The rosary continues through his fingers.");
        mob.Command("say Faith is not a feeling. It is a decision. A decision you make before the evidence arrives. When the evidence arrives, it is not faith anymore. It is just knowledge.", 1.5);
        mob.Command("emote smiles with the serenity of someone who decided long ago and has not revisited the question.", 3.0);
        return true;
    }

    if (question.indexOf("collapse") >= 0 || question.indexOf("end") >= 0 || question.indexOf("apocalypse") >= 0) {
        mob.Command("say I do not call it the apocalypse. That word has drama in it. What is coming is simply a correction.");
        mob.Command("emote moves to the window. Outside, the compound. His creation.", 1.5);
        mob.Command("say The systems that run your world are not stable. They were never stable. We are building something stable. Something that will be here after.", 3.0);
        mob.Command("say The only question is whether you will be here after. That choice is still available to you.", 4.5);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("jacob") >= 0 || question.indexOf("john") >= 0 || question.indexOf("faith") >= 0) {
        mob.Command("say My siblings are my hands and my heart. Jacob understands strength. John understands confession. Faith understands mercy.");
        mob.Command("emote touches the rosary with particular care.", 1.5);
        mob.Command("say I found each of them in a different kind of darkness. I gave them purpose. They gave me the capacity to do what I was asked to do.", 3.0);
        mob.Command("say A family is not the people you were born to. It is the people who are willing.", 4.5);
        return true;
    }

    if (question.indexOf("you") >= 0 || question.indexOf("chosen") >= 0 || question.indexOf("why") >= 0) {
        mob.Command("emote turns to face you completely. The aviator glasses reflect only you.");
        mob.Command("say I asked that question once. Why me. I asked it for years. I was in a great deal of pain while I asked it.", 1.5);
        mob.Command("say Then I stopped asking. Not because I found the answer. Because I realized the question was the wrong shape.", 3.0);
        mob.Command("say You were sent here. I do not know why yet. I expect I will know when it matters.", 4.5);
        return true;
    }

    if (question.indexOf("freedom") >= 0 || question.indexOf("free") >= 0) {
        mob.Command("say Freedom.", 0);
        mob.Command("emote says the word as if weighing it.", 1.0);
        mob.Command("say People talk about freedom as if it were the absence of constraint. It is not. Total freedom is another word for chaos. For drowning.", 2.0);
        mob.Command("say What I offer is freedom from doubt. Freedom from the constant exhausting work of deciding who you are. That is a real freedom. That is the only one I have found that lasts.", 3.5);
        return true;
    }

    if (question.indexOf("arrest") >= 0 || question.indexOf("warrant") >= 0 || question.indexOf("sheriff") >= 0) {
        mob.Command("emote smiles very slightly. The rosary does not pause.");
        mob.Command("say You came to arrest me once. I remember. I let you try.", 1.5);
        mob.Command("say The warrant was real. The law was real. None of that mattered, in the end. Because what is happening here is larger than the law. Larger than the county.", 3.0);
        mob.Command("say You know this. That is why you are still here.", 4.5);
        return true;
    }

    var defaults = [
        "say Ask me what you came to ask. We both know what it is.",
        "say I have time. I have always had time. Time is what we have most of, before the Collapse.",
        "say You are not the first person to stand where you are standing and not know what to say. Take a moment."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("pin") >= 0 || showText.indexOf("eden") >= 0 || showText.indexOf("gate") >= 0) {
        mob.Command("emote looks at the pin you are holding with complete calm.");
        mob.Command("say You have been to the compound. You have been to my church.", 1.5);
        mob.Command("say Good.", 3.0);
        mob.Command("emote says nothing more. The rosary moves. He watches you.", 4.5);
        return true;
    }

    mob.Command("emote looks at what you are holding with the calm attention of someone reading a sign in a language they know.");
    mob.Command("say Everything means something. What does that mean to you?", 1.5);
    return true;
}
