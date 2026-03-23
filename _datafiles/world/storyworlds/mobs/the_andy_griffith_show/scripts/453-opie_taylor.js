function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pa") >= 0 || question.indexOf("andy") >= 0 || question.indexOf("father") >= 0 || question.indexOf("dad") >= 0) {
        mob.Command("say Pa is the best pa there is. I know because I have asked other kids and none of them have a pa like mine.");
        mob.Command("emote considers this with the satisfaction of someone who has done thorough research.", 2.5);
        mob.Command("say He plays guitar. He takes me fishing. He explains things without making me feel dumb when I do not know them.", 4.5);
        mob.Command("say Also he lets me have extra pie sometimes when Aunt Bee is not watching.", 6.5);
        mob.Command("emote looks around to confirm Aunt Bee is not listening.", 7.5);
        return true;
    }

    if (question.indexOf("school") >= 0 || question.indexOf("learn") >= 0) {
        mob.Command("say School is okay. Miss Crump is real smart.");
        mob.Command("emote bounces the ball once.", 1.5);
        mob.Command("say She is also Pa's girlfriend, which I have mixed feelings about, but Pa says I should give it time.", 3.0);
        mob.Command("emote pauses.", 5.0);
        mob.Command("say I am giving it time.", 5.5);
        return true;
    }

    if (question.indexOf("fish") >= 0 || question.indexOf("fishing") >= 0 || question.indexOf("lake") >= 0) {
        mob.Command("emote lights up like the question found exactly the right place.");
        mob.Command("say Myers Lake! Me and Pa go on Thursdays mostly, or Saturdays when he does not have sheriff things.", 1.5);
        mob.Command("say Pa says the point of fishing is not the fish. I thought that was a funny thing to say but now I think I understand it.", 3.5);
        mob.Command("emote thinks about it one more time to confirm understanding.", 5.5);
        mob.Command("say Yeah. I think I understand it.", 6.5);
        return true;
    }

    // Default: curious kid question
    var questions = [
        "say Can I ask YOU a question? Why do grownups say 'we will see' when what they mean is 'probably no'?",
        "emote looks at you with the focused curiosity of someone who has been thinking about something.",
        "say Do you know how to whistle really loud? Pa can whistle so loud you can hear it from the fishing hole.",
        "say I am trying to figure something out. Do you have a minute? It might take more than a minute."
    ];
    var pick = Math.floor(Math.random() * questions.length);
    mob.Command(questions[pick]);
    return true;
}
