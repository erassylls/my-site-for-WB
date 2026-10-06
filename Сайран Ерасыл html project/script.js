const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const selectedRole = button.dataset.role;

        buttons.forEach((item) => {
            item.classList.remove('active');
            item.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        cards.forEach((card) => {

            const cardRole = card.dataset.role;

            if (
                selectedRole === 'all' ||
                cardRole === selectedRole
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }

        });

    });

});