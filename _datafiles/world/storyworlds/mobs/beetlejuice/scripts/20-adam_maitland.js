
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("handbook") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("say The Handbook for the Recently Deceased? It reads like stereo instructions. I've been through it three times and I still don't understand half of it.");
        mob.Command("say There's a chapter on haunting that references an appendix that doesn't exist. Who edited this thing?");
        return true;
    }

    if (question.indexOf("model") >= 0 || question.indexOf("town") >= 0 || question.indexOf("hobby") >= 0) {
        mob.Command("say Oh, the model! That's my life's work. Well... my life's work when I was alive.");
        mob.Command("emote gestures proudly at the detailed miniature town of Winter River.");
        mob.Command("say Every building is to scale. Every shingle hand-cut. I've been working on it for years.", 1.5);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("die") >= 0) {
        mob.Command("say It's... an adjustment. One minute you're driving home from the hardware store, the next you're swerving to avoid a dog, and then...");
        mob.Command("say Well. Let's just say the covered bridge wasn't very forgiving.", 2.0);
        return true;
    }

    if (question.indexOf("barbara") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("say Barbara is the best thing that ever happened to me. Living or dead.");
        mob.Command("emote smiles warmly, his translucent form flickering slightly.");
        mob.Command("say She's handling all this better than I am, honestly. She always was the strong one.", 1.5);
        return true;
    }

    if (question.indexOf("beetlejuice") >= 0 || question.indexOf("betelgeuse") >= 0) {
        mob.Command("say Shh! Don't say that name!");
        mob.Command("emote looks around nervously.");
        mob.Command("say He's dangerous. Really dangerous. We made the mistake of calling him once and it nearly cost us everything.", 1.5);
        mob.Command("say Whatever you do, don't say his name three times. Trust me on this.", 3.0);
        return true;
    }

    if (question.indexOf("house") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say This was our dream house. We spent years fixing it up, making it just right.");
        mob.Command("say And now the Deetzes are... well, you've seen what Delia's done to the place. It's heartbreaking.", 1.5);
        mob.Command("emote winces, looking at a wall that has been painted an aggressive shade of mauve.", 3.0);
        return true;
    }

    if (question.indexOf("lydia") >= 0) {
        mob.Command("say Lydia's a great kid. She can actually see us, you know. Most living people can't.");
        mob.Command("say She's got a good heart, even if she dresses like every day is a funeral. She reminds me of the daughter we never had.", 2.0);
        return true;
    }

    mob.Command("say Hmm, I'm not really sure about that. You could ask me about the handbook, my model town, or... well, our situation here.");
    return true;
}
