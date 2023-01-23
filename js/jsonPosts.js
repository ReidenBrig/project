const posts = document.querySelector('.products_posts');

var products = JSON.parse(json);

    for (let i = 0; i < products.length; i++) {
        
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');

        h3.innerHTML = products[i].title;
        img.src = products[i].img;
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.borderRadius = '15px';
        p.innerHTML = products[i].price;
        

        
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);

        posts.appendChild(div);
    }
