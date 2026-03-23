
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("school") >= 0 || question.indexOf("grade") >= 0 || question.indexOf("learn") >= 0) {
        mob.Command("emote gets that look of a man who has been changed by something he didn't expect.");
        mob.Command("say You know what? School is actually good. I know that sounds insane coming from me specifically. But it's good.", 1.5);
        mob.Command("say Like, fractions. I understand fractions now. I didn't understand fractions for TWENTY-SEVEN YEARS. And now I do. That's wild. That's genuinely wild.", 3.0);
        return true;
    }

    if (question.indexOf("ernie") >= 0 || question.indexOf("penguin") >= 0) {
        mob.Command("emote's whole face transforms.");
        mob.Command("say Ernie is my best friend. He's a penguin. He's incredibly supportive and I don't care what anyone says about whether he's real or not because he's REAL to me.", 1.5);
        mob.Command("say He's probably by the pool. He likes the pool. I like the pool. We agree on the pool.", 3.0);
        return true;
    }

    if (question.indexOf("veronica") >= 0 || question.indexOf("teacher") >= 0) {
        mob.Command("emote gets a complicated expression.");
        mob.Command("say Miss Vaughn is... she's incredible. She's like the smartest person I've ever met and she believed I could learn things and she was RIGHT and...", 1.5);
        mob.Command("emote clears his throat. 'I mean. She's a great teacher. Very professional. So hot. I mean -- GREAT teacher.'", 3.0);
        return true;
    }

    if (question.indexOf("dad") >= 0 || question.indexOf("frank") >= 0 || question.indexOf("hotel") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say My dad worked his whole life building something and I just... I didn't get it for a long time. I thought it was just hotels.", 1.5);
        mob.Command("say It's not just hotels. It's what he made. And he made it so I'd have something. And I almost let someone take it. Not anymore.", 3.0);
        return true;
    }

    if (question.indexOf("eric") >= 0 || question.indexOf("gordon") >= 0) {
        mob.Command("say Eric Gordon is a bad person. I know that sounds simple but some things are simple.");
        mob.Command("emote shrugs. 'Also he cheats at academic decathlon.'", 2.0);
        return true;
    }

    if (question.indexOf("carl") >= 0 || question.indexOf("lunch") >= 0 || question.indexOf("sandwich") >= 0) {
        mob.Command("emote puts a hand on his chest.");
        mob.Command("say Carl is the best person I know. He makes my lunch every day. He always puts a note in it. The note always says the same thing but it's never the same thing.", 1.5);
        mob.Command("say It says 'You can do it.' But every day it means something different. Because every day I'm doing something different. Carl gets that.", 3.0);
        return true;
    }

    if (question.indexOf("shampoo") >= 0 || question.indexOf("conditioner") >= 0) {
        mob.Command("emote straightens up with the authority of a man about to impart wisdom.");
        mob.Command("say Shampoo is BETTER. I go on FIRST and I clean the HAIR. Conditioner is better -- I LEAVE the hair SILKY and SMOOTH. Oh REALLY fool? REALLY?", 1.5);
        mob.Command("emote pauses. 'I've thought about this a lot. Both have merits. But shampoo goes first and I think that matters.'", 3.0);
        return true;
    }

    var defaults = [
        "say That is a great question. I'm going to think about that. I'm thinking about it right now.",
        "emote nods very seriously. 'I hear you. I hear what you're saying.'",
        "say You know what I always say? Actually I say a lot of things. But this is one of them.",
        "say I'm working on being smarter. I'm getting there. Fractions first, then everything else."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes it and looks at it with genuine interest.");
    mob.Command("say Whoa. WHOA. Where did you get this? This is incredible. Wait --");
    mob.Command("emote sniffs it. 'Is this what I think it is?'", 2.0);
    return true;
}
