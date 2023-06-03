$(() => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }

    const getIndex = data => {
        return Math.floor(Math.random() * data.length);
    }

    $.ajax(settings).done(response => {
        const data = JSON.parse(response);
        let index = getIndex(data);

        $("#text").text(data[index].text);

        let author = data[index].author == null ? "Anonymous" : data[index].author;
        $("#author").text(author);

        const href = "https://twitter.com/intent/tweet/?text=";
        let query = data[index].text.replace(/\s/g, "%20") + '%20-%20' + author;
        $("#tweet-quote").attr("href", href + query);
        

        $("button").on("click", () => {
            index = getIndex(data);

            $("#text").text(data[index].text);

            author = data[index].author == null ? "Anonymous" : data[index].author;
            $("#author").text(author);

            query = data[index].text.replace(/\s/g, "%20") + '%20-%20' + author;
            $("#tweet-quote").attr("href", href + query);

        });
    });
});