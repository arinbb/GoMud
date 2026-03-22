
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"14\">The painted starlight seeps into your eyes. The world seems to shimmer with hidden detail -- every surface alive with brushstrokes, every shadow rich with color.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"8\">The painted starlight fades from your vision. The world looks a little less vivid.</ansi>");
}
