(function(children, partner, location, job) {
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML = `<p>${message}</p>`;
})(2, "Alice", "New York", "Software Engineer");
