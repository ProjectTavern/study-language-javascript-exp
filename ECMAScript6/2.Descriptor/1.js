let labte = {};
Object.defineProperty(labte, "book", {
    get: function () {
        return "Book";
    }
});

console.log(labte.book);

(function () {
    let source = {};

    Object.defineProperty(source, "TestOne", {
        get: () => "Classic"
    });
    console.log(source.TestOne);
})();