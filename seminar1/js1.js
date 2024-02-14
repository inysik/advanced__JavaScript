      // Создаем объект musicCollection с массивом альбомов
      const musicCollection = {
        albums: [
            { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
            { title: "Abbey Road", artist: "The Beatles", year: "1969" },
            { title: "Led Zeppelin IV", artist: "Led Zeppelin", year: "1971" }
        ],

        // Реализуем Symbol.iterator
        [Symbol.iterator]() {
            let index = 0;
            const albums = this.albums;

            return {
                next() {
                    return index < albums.length ?
                        { value: albums[index++], done: false } :
                        { done: true };
                }
            };
        }
    };

    const musicList = document.getElementById('music-collection');

    // Используем цикл for...of для перебора альбомов в музыкальной коллекции
    for (const album of musicCollection) {
        const listItem = document.createElement('li');
        listItem.textContent = `${album.title} - ${album.artist} (${album.year})`;
        musicList.insertAdjacentElement('afterbegin',listItem);
    }