makeItem = function(name) {
    const div = document.createElement('div');
    const del = document.createElement('button');
    const p = document.createElement('p');

    del.append('-');
    del.classList.toggle("button");
    del.classList.toggle("is-danger");
    del.classList.toggle("is-small");

    p.append(name);

    div.append(del);
    div.append(p)
    div.classList.toggle("panel-block");

    console.log(div);
    return div;
}

const newItem = document.querySelector('#newItem');

newItem.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.elements.todo;
    const category = this.elements.category;

    div = makeItem(name.value);

    switch(category.value) {
        case 'work':
            document.querySelector('#workListPanel').append(div);
            break;
        case 'study':
            document.querySelector('#studyListPanel').append(div);
            break;
        case 'habits':
            document.querySelector('#habitsListPanel').append(div);
            break;
        case 'others':
            document.querySelector('#othersListPanel').append(div);
    }

    name.value = '';
    category.value = '';
})

const divs = document.querySelectorAll('div');

for(let div of divs) {
    div.addEventListener('click', function(e) {
        const target = e.target;
        switch(target.nodeName) {
            //remove
            case 'BUTTON':
                target.parentElement.remove();
                console.log(target.parentElement);
                break;
            //complete
            case 'P':
                target.classList.toggle('complete');
                break;
        }
    })
}