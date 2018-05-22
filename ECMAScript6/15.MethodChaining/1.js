let modelInstance = {};

class ThumbnailBuilder {

    constructor () {}

    static origin (value) {
        modelInstance.origin = value;
        return this;
    }

    static smallThumb (value) {
        modelInstance.smallThumb = value;
        return this;
    }

    static largeThumb (value) {
        modelInstance.largeThumb = value;
        return this;
    }

    static caption (value) {
        modelInstance.caption = value;
        return this;
    }

    static meta (value) {
        modelInstance.meta = value;
        return this;
    }

    static options (value) {
        modelInstance.options = value;
        return this;
    }

    static build (container) {
        const model = modelInstance;
        modelInstance = {};
        return model;
    }
}

let thumbs = ["start", [10,20,30,40,50].map(
    item => ThumbnailBuilder
    .origin(item)
    .smallThumb(2)
    .largeThumb(3)
    .caption(4)
    .meta(5)
    .options(6)
    .build(7)
)];

console.log(thumbs);