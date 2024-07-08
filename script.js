document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("myButton");
  const bookInfo = document.getElementById("bookInfo");

  button.addEventListener("click", function() {
      
      const xmlString = `<?xml version="1.0"?>
      <x:books xmlns:x="urn:books">
          <book id="bk001">
              <author>Antoine de Saint Exupery</author>
              <title>The Little Prince</title>
              <genre>Parable</genre>
              <price>8.84$</price>
              <pub_date>1943-06-04</pub_date>
              <review>"The Little Prince" is a modern fable that has captivated readers globally.</review>
          </book>
          <book id="bk002">
              <author>George Orwell</author>
              <title>Animal Farm</title>
              <genre>Fantasy</genre>
              <price>8.99$</price>
              <pub_date>1945-08-17</pub_date>
              <review>"Animal Farm" is a dystopian satire that depicts the negative features of a society, as opposed to a utopian satire that talks up an ideal or perfect society.</review>
          </book>
          <book id="bk003">
              <author>Alexandre Dumas</author>
              <title>The Count of Monte Cristo</title>
              <genre>Adventure Novel</genre>
              <price>51.60$</price>
              <pub_date>1846-01-15</pub_date>
              <review>"The Count of Monte Cristo," a widely popular classic, explores the devastating consequences for both the innocent and the guilty.</review>
          </book>
          <book id="bk004">
              <author>F. Scott Fitzgerald</author>
              <title>The Great Gatsby</title>
              <genre>Novel</genre>
              <price>6.75$</price>
              <pub_date>1925-04-10</pub_date>
              <review>"The Great Gatsby" is widely considered a literary masterpiece and a contender for the title of the Great American Novel.</review>
          </book>
          <book id="bk005">
              <author>William Shakespeare</author>
              <title>Hamlet</title>
              <genre>Drama</genre>
              <price>8.00$</price>
              <pub_date>1623-??-??</pub_date>
              <review>"Hamlet" is one of the greatest plays of all time. The compelling tragedy of the tormented young prince of Denmark continues to capture the imaginations of modern audiences worldwide.</review>
          </book>
      </x:books>`;

      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      
      const books = xmlDoc.getElementsByTagName("book");

      const randomIndex = Math.floor(Math.random() * books.length);
      const book = books[randomIndex];

      const author = book.getElementsByTagName("author")[0].textContent;
      const title = book.getElementsByTagName("title")[0].textContent;
      const genre = book.getElementsByTagName("genre")[0].textContent;
      const price = book.getElementsByTagName("price")[0].textContent;
      const pubDate = book.getElementsByTagName("pub_date")[0].textContent;
      const review = book.getElementsByTagName("review")[0].textContent;

      bookInfo.innerHTML = `
          <strong>Author:</strong> ${author} <br>
          <strong>Title:</strong> ${title} <br>
          <strong>Genre:</strong> ${genre} <br>
          <strong>Price:</strong> ${price} <br>
          <strong>Publication Date:</strong> ${pubDate} <br>
          <strong>Review:</strong> ${review}
      `;
  });
});
