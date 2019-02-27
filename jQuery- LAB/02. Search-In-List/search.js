function search() {
  let searchedVal= $('#searchText').val()

  $(`#towns li`).css('font-weight', 'normal');

  let towns=$(`#towns li:contains(${searchedVal})`).css('font-weight', 'bold');

 let count=towns.length;

 $('#result').text(`${count} matches found.`);
}