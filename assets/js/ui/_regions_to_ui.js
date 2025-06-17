export function regionToUI(regions, regionModalLanguageElement) {
    for (let i = 0; i < regions.length; i++) {
        regionModalLanguageElement.innerHTML +=
            `
                    <li class="region-modal__language-item">
                        <h1 class="region-modal__language-title">${regions[i].title} region</h1>
                    </li>
                `;
        for (let j = 0; j < regions[i].languages.length; j++) {
            regionModalLanguageElement.innerHTML +=
                `
                        <li class="region-modal__language-item">
                            <a href="" class="region-modal__language-link">${regions[i].languages[j]}</a>
                        </li>
                    `;
        }
    }
}