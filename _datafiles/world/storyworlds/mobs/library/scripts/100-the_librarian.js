
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("book") >= 0 || question.indexOf("read") >= 0) {
        mob.Command("say The Book Stacks are to the north. Browse the shelves and pick up anything that catches your eye. To enter a story, simply open the book.");
        return true;
    }

    if (question.indexOf("movie") >= 0 || question.indexOf("film") >= 0 || question.indexOf("screen") >= 0) {
        mob.Command("say The Screening Room is to the east. You'll find film reels on the shelves. Load one into the projector to step into that world.");
        return true;
    }

    if (question.indexOf("art") >= 0 || question.indexOf("paint") >= 0 || question.indexOf("gallery") >= 0) {
        mob.Command("say The Gallery is to the west. Each painting is a doorway. Take one from the wall and gaze into it to be transported.");
        return true;
    }

    if (question.indexOf("return") >= 0 || question.indexOf("back") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say Type 'return' from within any story world and you'll find yourself back here in the Library. The stories never mind letting you go... though some are reluctant.");
        return true;
    }

    if (question.indexOf("help") >= 0) {
        mob.Command("say Browse the stacks, screening room, or gallery. Pick up a book, film reel, or painting. Use it to enter that world. Type 'return' to come back.");
        return true;
    }

    // No keyword match — let AI handle it if available
    return false;
}
