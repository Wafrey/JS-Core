function extractText() {
  let result= $('li')
   .toArray()
   .map((x) =>x.textContent);

   $('#result').text(result.join(', '));
}
