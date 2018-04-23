let labte = {};
Object.defineProperty(labte, "book", {
    get: function () {
        return "Book";
    }
});

console.log(labte.book);