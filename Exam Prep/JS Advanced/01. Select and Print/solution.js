function move(command) {


    let aTowns = $('#available-towns');
    let sTowns = $('#selected-towns');
    let outputDiv = $('#output')

    if (command === 'right') {
        sTowns.append(aTowns.find(':selected'));
    } else if (command === 'left') {
        aTowns.append(sTowns.find(':selected'));
    } else {

        outputDiv.empty();

        let result=sTowns
        .find('option')
        .toArray()
        .map(el=> $(el).text())
        .join('; ');

        outputDiv.append(result)
    }
}