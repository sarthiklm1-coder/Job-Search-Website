const categories = Array.from(jCategories);

document.getElementById("searchbar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredItems = categories.filter((item) => 
         item.title.toLowerCase().includes(searchData));
    displayItems(filteredItems);
});

const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";
    items.forEach((item) => {   // index removed here
        const index = jCategories.indexOf(item);  // ✅ fixed index
        const { images, title, rate, av } = item;
        const jList = document.createElement("div");
        jList.className = "jList";
        jList.innerHTML = `
        <img src="${images}" alt="">
        <h3>${title}</h3>
        <p>${rate}</p>
        <span class="key">${av}</span>
        `;
        rootElement.appendChild(jList);

        jList.addEventListener("click", () => {
            window.location.href = `jobs-details.html?id=${index}`;
        });
    });
};

displayItems(categories);