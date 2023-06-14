makeItem = function(name, category) {
    const li = document.createElement('li');
    const del = document.createElement('button');
    const p = document.createElement('p');
    p.append(name)

    del.append('-');
    del.classList = 'deleteButton';

    li.append(p);
    li.append(del);

    li.classList.toggle(category + "Item");

    console.log(li);
    return li;
}

const newItem = document.querySelector('#newItem');

newItem.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.elements.todo;
    const category = this.elements.category;

    li = makeItem(name.value, category.value);

    switch(category.value) {
        case 'work':
            document.querySelector('#workList').append(li);
            break;
        case 'study':
            document.querySelector('#studyList').append(li);
            break;
        case 'habits':
            document.querySelector('#habitsList').append(li);
            break;
        case 'others':
            document.querySelector('#othersList').append(li);
    }

    name.value = '';
    category.value = 'work';
})

const uls = document.querySelectorAll('ul');

for(let ul of uls) {
    ul.addEventListener('click', function(e) {
        const target = e.target;
        switch(target.nodeName) {
            //remove
            case 'BUTTON':
                target.parentElement.remove();
                break;
            //complete
            case 'LI':
                target.classList.toggle('complete');
                break;
        }
    })
}