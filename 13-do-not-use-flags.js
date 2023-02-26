// Don't use flags as function parameters


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


function createFile(name, temp) {
    if (temp) {
      fs.create(`./temp/${name}`);
    } else {
      fs.create(name);
    }
  }