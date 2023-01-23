// Don't Use Flags


// Bad
function saveImage(name, type) {
    switch (type) {
        case 'jpeg':
            fs.create(`./jpeg/${name}`);
            break;
        case 'png':
            fs.create(`./png/${name}`);
            break;

        default:
            fs.create(name)
            break;
    }
}

// Good

function saveImage(name) {
    fs.create(name);
}

function saveJpegImage(name) {
    fs.create(`./jpeg/${name}`);
}

function savePngImage(name) {
    fs.create(`./png/${name}`);
}