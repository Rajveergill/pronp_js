function get_article() {
    let article = new Array;
    let article_str = localStorage.getItem('paragraph');
    if (article_str !== null) {
        article = JSON.parse(article_str); 
    }
    return article;
}

function add() {
    let input = document.getElementById('input').value;
 
    let article = get_article();
    article.push(input);
    localStorage.setItem('paragraph', JSON.stringify(article));
 
    show();
 
    return false;
}
function show() {
    let article = get_article();
 
    let html = '<article>';
    for(let i=0; i<article.length; i++) {
        html += '<p>' + article[i] + '</p>';
    };
    html += '</article>';
 
    document.getElementById('article').innerHTML = html;
 
    
}
document.getElementById('add').addEventListener('click', add);
show();