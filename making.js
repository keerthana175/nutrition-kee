function toggleStrikeThrough(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.classList.add('strikethrough');
    } else {
        checkbox.parentNode.classList.remove('strikethrough');
    }
}
document.getElementById('shareButton').addEventListener('click', copyLinkToClipboard);

function copyLinkToClipboard() {
    const link = window.location.href;

    navigator.clipboard.writeText(link).then(function() {
        alert('Link copied!');
    }).catch(function() {
        alert('Failed to copy the link.');
    });
}

             
