function dropdown(p) {
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block', 'none'];

    e.style.display = d[p];

    var t = ['0px', '0px, -10px'];
    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    },0);
}

function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[1].value = item;
}