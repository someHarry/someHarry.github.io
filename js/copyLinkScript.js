const copyLinkButtons = document.querySelectorAll(".copy-link-button");

for (let i = 0; i < copyLinkButtons.length; i++) {
    copyLinkButtons[i].onclick = (event) => {
        let targetItem = event.target.closest("section").children[0];
        if (targetItem.href) {
            navigator.clipboard.writeText(targetItem.href);
            console.log("link copied to clipboard 🎉")
        } else {
            navigator.clipboard.writeText(targetItem.textContent);
            console.log("there's no link, text copied to clipboard 🎉")
        }
    }
}