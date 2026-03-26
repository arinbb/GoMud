
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("work") >= 0 || question.indexOf("job") >= 0 || question.indexOf("career") >= 0) {
        var lies = [
            function() {
                mob.Command("say I'm in real estate.", 0.5);
                mob.Command("emote nods confidently.", 1.5);
                mob.Command("say Commercial. Mostly commercial.", 2.5);
                mob.Command("emote adds nothing. The lie is, apparently, commercial real estate.", 4.0);
            },
            function() {
                mob.Command("say I work for the Yankees.", 0.5);
                mob.Command("say Assistant to the traveling secretary.", 1.5);
                mob.Command("emote sits up slightly taller.", 3.0);
                mob.Command("say It's a very important position.", 4.5);
            },
            function() {
                mob.Command("say I'm between projects right now.", 0.5);
                mob.Command("emote waves a hand.", 1.5);
                mob.Command("say I have some things in development. NBC, actually.", 2.5);
                mob.Command("say You wouldn't know it. It's a show about -- look, it's complicated.", 4.5);
            }
        ];
        var pick = Math.floor(Math.random() * lies.length);
        lies[pick]();
        return true;
    }

    if (question.indexOf("women") >= 0 || question.indexOf("girlfriend") >= 0 || question.indexOf("date") >= 0 || question.indexOf("relationship") >= 0) {
        mob.Command("say I'm seeing someone.", 0.5);
        mob.Command("emote pauses.", 1.5);
        mob.Command("say Several someones, potentially. It's in flux.", 2.5);
        mob.Command("emote leans forward.", 3.5);
        mob.Command("say The thing you have to understand about me with women is that I have a system.", 5.0);
        mob.Command("emote is quiet for a moment.", 6.5);
        mob.Command("say The system has some issues.", 8.0);
        return true;
    }

    if (question.indexOf("parents") >= 0 || question.indexOf("frank") >= 0 || question.indexOf("estelle") >= 0 || question.indexOf("mother") >= 0 || question.indexOf("father") >= 0) {
        mob.Command("emote 's expression changes in several directions simultaneously.");
        mob.Command("say My parents.", 1.5);
        mob.Command("emote looks at the table.", 3.0);
        mob.Command("say They live in Queens. My mother still makes a certain noise when I walk in the door. My father invented a holiday.", 4.5);
        mob.Command("say I grew up in that house. That house is why I am the way I am.", 7.0);
        mob.Command("emote does not specify which way he is.", 8.5);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("cheap") >= 0 || question.indexOf("pay") >= 0) {
        mob.Command("say I'm not cheap. I'm economical.", 0.5);
        mob.Command("emote sets down what he is eating.", 1.5);
        mob.Command("say There's a difference. Being economical means you understand the value of money. Being cheap means you're stingy.", 3.0);
        mob.Command("emote pauses.", 5.0);
        mob.Command("say I did not pay for this meal. Jerry is paying for this meal. That is economical.", 6.5);
        return true;
    }

    var defaults = [
        "say Let me tell you something. I had a situation this morning. I'm not going to get into it but the point is: I was right.",
        "emote looks around the room and then back at you, then back around the room. He is checking something.",
        "say I have a theory about this. Do you want to hear it? The theory is somewhat involved.",
        "say Yada yada yada. You understand."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
