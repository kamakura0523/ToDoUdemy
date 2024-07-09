let input = prompt("コマンドを入力してください（new,list,delete,quit)");
const todos = ["ごはん","コールドシャワー","筋トレ","厳しいって"];

while(input !=="quit" && input !=="q"){
    if (input =="list"){
        console.log("*****************")
        for (let i = 0; i<todos.length;i++){
            console.log(`${i}:${todos[i]}`)
        }
        console.log("******************")
    }else if (input == "new"){
        const newTodo = prompt("新しいTodoを入力してください");
        todos.push(newTodo);
        console.log(`「${newTodo}」を追加しました`);
    }else if (input ==="delete"){
        const index = parseInt(prompt("削除するindexを入力してください"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
        console.log(`「${deleted[0]}」を削除しました`);
        }
        else {
            console.log("有効な数字を入力してください")
        }
    }
    input = prompt("コマンドを入力してください（new,list,delete,quit)");
}
console.log("アプリを終了しました");