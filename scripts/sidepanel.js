export function sidepanel(){
    var sidePanel = document.getElementById('side-panel');

    fetch('../views/components/sidebar.html')
    .then(response => {
        return response.text();
    })
    .then(html => {
        sidePanel.innerHTML = html;
    })
    .catch(error => {
        console.error("Failed to fetch component: ", error);
    })
}


