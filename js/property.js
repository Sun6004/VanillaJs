let obj = {
    a : {
        b : 'bbb',
        c : 'ccc'
    },
    aa: {
        abc : 'abc',
        zxc : 'zxc'
    },
    'show' : function (){
        console.log('');
    } 
}
obj.a.b;
obj.aa.abc;
delete obj.a.b // 객체의 속성 삭제
obj.show();