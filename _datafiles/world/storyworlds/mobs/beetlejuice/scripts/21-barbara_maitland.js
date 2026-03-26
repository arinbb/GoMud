
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("adam") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("say Adam? Oh, he's so patient. You should see him with his models — hours and hours of careful detail work.");
        mob.Command("say He's having a harder time with all this than I am, I think. But he's trying. He always tries.", 1.5);
        mob.Command("emote smiles fondly, her translucent form shimmering.", 3.0);
        return true;
    }

    if (question.indexOf("house") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say This was our dream home. We spent years making it perfect — the wallpaper, the curtains, the garden...");
        mob.Command("say And now Delia has turned the living room into some kind of modern art nightmare. There's a sculpture in there that I think is supposed to be a horse? Maybe?", 2.0);
        return true;
    }

    if (question.indexOf("lydia") >= 0) {
        mob.Command("say Lydia is such a sweet girl. A little dark, maybe, but she has a good heart.");
        mob.Command("say She reminds me of myself at that age. Feeling like she doesn't quite fit in anywhere.", 1.5);
        mob.Command("say She can see us. Really see us. That means something.", 3.0);
        return true;
    }

    if (question.indexOf("handbook") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("say That handbook is the most confusing thing I've ever read, and I once tried to assemble Swedish furniture.");
        mob.Command("say It keeps referring to forms we don't have and offices we can't find. Very unhelpful.", 1.5);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("dead") >= 0 || question.indexOf("die") >= 0 || question.indexOf("bridge") >= 0) {
        mob.Command("say It happened so fast. We were driving home, and there was a dog on the covered bridge, and Adam swerved...");
        mob.Command("emote touches her face absently, remembering.");
        mob.Command("say The next thing I knew, we were back in the house. And then a spider crawled out of my hand. That's when I knew.", 2.0);
        return true;
    }

    if (question.indexOf("cook") >= 0 || question.indexOf("kitchen") >= 0 || question.indexOf("food") >= 0 || question.indexOf("bak") >= 0) {
        mob.Command("say I used to love cooking. It was my passion — breads, pies, casseroles, you name it.");
        mob.Command("say I can't eat anymore, of course. Can't even taste. But I still like being in the kitchen.", 1.5);
        mob.Command("emote looks at the kitchen with a mixture of longing and comfort.", 3.0);
        mob.Command("say Habit, I suppose. Some things stay with you even after you die.", 4.5);
        return true;
    }

    if (question.indexOf("deetz") >= 0 || question.indexOf("delia") >= 0 || question.indexOf("charles") >= 0) {
        mob.Command("say The Deetzes... well. They have terrible taste. Just terrible.");
        mob.Command("say But I think they mean well. Charles seems like a decent man. He's just stressed.", 1.5);
        mob.Command("say Delia, though... her sculptures. Oh my.", 3.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("business card") >= 0 || showText.indexOf("card") >= 0) {
        mob.Command("say Oh no. Oh no no no. Please tell me you didn't call him. PLEASE tell me you didn't say his name.");
        return true;
    }

    if (showText.indexOf("handbook") >= 0) {
        mob.Command("say That thing! I tried to follow the instructions for scaring people and ended up turning my own head into a basketball.");
        return true;
    }

    if (showText.indexOf("chalk") >= 0) {
        mob.Command("say Be careful with that. Adam drew a door with chalk once and we ended up in the waiting room for THREE HOURS.");
        return true;
    }

    return false;
}
