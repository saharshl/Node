document.querySelector("button").addEventListener("click", generate);

function generate(event) {
    event.preventDefault();
    function create(element) {
        return document.createElement(element);
    }

    function appendElement(parent, element) {
        return parent.appendChild(element);
    }
    let sec = document.querySelector('.sec');
    let section=document.querySelectorAll('.sec');
    section.forEach(function(he){
        he.innerHTML="";
    });
    let val;
    let url3 = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url3).then((res) => res.json()).then((data) => {
            val = data;
            for (let i = 0; i < val.length; i++) {
                if(i==100){
                    break;
                }
                let div = create('div');
                let h3 = create('h3');
                let h5 = create('h5');
                let p = create('p');
                h3.textContent = val[i].title;
                h5.textContent = val[i].id;
                p.textContent = val[i].body;
                appendElement(div, h5);
                appendElement(div, h3);
                appendElement(div, p);
                appendElement(sec, div);
            }
        }

    ).catch(function (error) {
        alert(error);
    });
}
/*
                    document.querySelector("button").addEventListener("click", clicked);

                    function clicked(event) {
                        event.preventDefault();

                        function create(element) {
                            return document.createElement(element);
                        }

                        function appendElement(parent, element) {
                            return parent.appendChild(element);
                        }
                        let ul = document.querySelector('#list');
                        ul.innerHTML = "";
                        let li = create('li');
                        let h3 = create('h3');
                        let h5 = create('h5');
                        let p = create('p');
                        h3.textContent = "hello";
                        h5.textContent = "Hi";
                        p.textContent = "Bye";
                        appendElement(li, h5);
                        appendElement(li, h3);
                        appendElement(li, p);
                        appendElement(ul, li);
                    }
                    */