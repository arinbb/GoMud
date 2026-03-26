function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("hired") >= 0) {
        mob.Command("say The ad said: \"Help wanted. Ghostbusters. No experience necessary. Good pay.\" I thought it was some kind of cleaning service.");
        mob.Command("say First week, I drove the Ecto-1 into the library parking garage and three of us chased a floating library card catalog.");
        mob.Command("emote shakes his head slowly.", 2.0);
        mob.Command("say Second week was worse. But the pay is good and the work is -- never mind, it's wild, the work is wild.", 4.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("religion") >= 0 || question.indexOf("scripture") >= 0) {
        mob.Command("say I went to seminary. I know Revelation inside and out.");
        mob.Command("say The Book of Revelation does not specifically mention the Sedgewick Hotel or a giant marshmallow man.");
        mob.Command("emote pauses thoughtfully.", 2.0);
        mob.Command("say But it covers the general territory. I feel like I have context. It helps.", 4.0);
        return true;
    }

    if (question.indexOf("gozer") >= 0 || question.indexOf("staypuft") >= 0 || question.indexOf("stay puft") >= 0) {
        mob.Command("say Egon says Gozer is an inter-dimensional deity from before recorded human history.");
        mob.Command("say I believe him. I've seen the evidence. I am on board with this assessment completely.");
        mob.Command("emote checks the Ecto-1's oil level.", 2.0);
        mob.Command("say The Stay Puft Marshmallow Man is one hundred and twelve feet tall and has a sailor hat. I've made my peace.", 4.0);
        return true;
    }

    if (question.indexOf("ecto") >= 0 || question.indexOf("car") >= 0 || question.indexOf("vehicle") >= 0) {
        mob.Command("say The Ecto-1 is a 1959 Cadillac Miller-Meteor Futura Duplex. Ray paid fifty-five hundred for it.");
        mob.Command("say It needs new brake pads, the PKE antenna needs recalibration, and it has been slimed twice.");
        mob.Command("emote pats the hood with genuine affection.", 2.0);
        mob.Command("say Still the best vehicle I've ever driven. Bar none.", 4.0);
        return true;
    }

    var defaults = [
        "say I'm the most normal person here and that is a very low bar. Ask me about the job, the car, or end times prophecy.",
        "say You want to know something? I've seen things this week that would make a seminary professor cry. And I feel okay about it.",
        "say I don't have a PhD. I have common sense. In this organization, that makes me indispensable."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
