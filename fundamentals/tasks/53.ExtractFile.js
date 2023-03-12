function exctractFiles(input) {

    let fileInfo = input.split("\\").pop();
    let name = fileInfo.substring(0, fileInfo.lastIndexOf("."));
    let ext = fileInfo.substring(fileInfo.lastIndexOf(".") + 1);
    console.log(`File name: ${name}\nFile extension: ${ext}`);
}

exctractFiles('C:\\Internal\\training-internal\\Templa.te.pptx');
exctractFiles('C:\\Projects\\Data-Structures\\LinkedList.cs');