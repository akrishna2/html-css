var list = []


while (option!="quit"){
    var option = prompt("What would you like to do?")
    if(option=='new'){
        list=[]
        alert("Addded a new Todo list")
    }
    else if(option=='list'){
        alert(list)
    }
    else if(option=='add'){
        var task =prompt("Enter the task")
        list.push(task)
        alert("Task : " +task + " added")
    }
}



