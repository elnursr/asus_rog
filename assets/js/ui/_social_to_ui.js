export function socialToUI(socials, socialElement) {

    socials.forEach(({ url, className }) => {
        socialElement.innerHTML +=
            `
                <li class="footer__social-item">
                    <a href="${url}" class="footer__social-link" target="_blank">
                        <i class="fa-brands ${className}"></i>
                    </a>
                </li>
            `;
    });
}