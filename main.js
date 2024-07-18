const books = document.querySelectorAll('.book');
let lastSelectedIndex = null;

books.forEach((book, index) => {
    book.addEventListener('click', (event) => {
        const isCtrlPressed = event.ctrlKey;
        const isShiftPressed = event.shiftKey;

        if (isShiftPressed && lastSelectedIndex !== null) {
            const start = Math.min(index, lastSelectedIndex);
            const end = Math.max(index, lastSelectedIndex);
            for (let i = start; i <= end; i++) {
                books[i].classList.add('selected');
            }
        } else if (isCtrlPressed) {
            book.classList.toggle('selected');
        } else {
            books.forEach(b => b.classList.remove('selected'));
            book.classList.add('selected');
        }

        lastSelectedIndex = index;
    });
});