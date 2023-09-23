// FOR LOCAL STORAGE
let globalTaskData = []

//Arrow func
const addCard = () => {
    //We have to create a task object that has newtask data that user entered 
    //object
    const newTaskDetails = {
        id: `${Date.now()}`,
        url: document.getElementById("imageURL").value,
        title: document.getElementById("taskTitle").value,
        type: document.getElementById("taskType").value,
        description: document.getElementById("taskDescription").value

    };
    taskContents = document.getElementById("taskContentsrow");//making task contents a global variable
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));
    // FOR LOCAL STORAGE
    globalTaskData.push(newTaskDetails)
    saveToLocalStorage()
}
// arrow func
const generateTaskCard = ({ id, url, title, type, description }) => {
    // returns the html part from index.html that we want to display
    //In this html replace all the general text I have written to display like Task Title, Task description and task-type with the inputs we have got from the user(given by the keys of the above created object) , also image src should be the url given by the user to replace that with ${above key}
    return `<div class="col-md-6 col-lg-4" id=${id} key=${id}>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-info ">
                    <i class="fa  fa-pencil"></i>
                </button>
                <button type="button" class="btn btn-outline-danger ">
                    <i class="fa  fa-trash-can"></i>
                </button>
            </div>
        </div>
        <img src="${url}" width="50px" height=150px" class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <span class="badge bg-primary">${type}</span>
        </div>
        <div class="card-footer">
            <button class="btn btn-outline-primary float-end">OPEN TASK</button>
        </div>
    </div>
</div>`
}

// FOR LOCAL STORAGE
// keys can be anything
const saveToLocalStorage = () => {

    localStorage.setItem("chahalTasks", JSON.stringify({ chahal: globalTaskData }))
}
//FOR MAKING CARD DATA VISIBLE ON SCREEN EVEN AFTER REFRESHING BY FETCHING DATA FROM LOCAL STORAGE
let reloadTaskcard = () => {
    const localStorageCopy = JSON.parse(localStorage.getItem("chahaltasks"))
    console.log(localStorageCopy)
    if(localStorageCopy){
        globalTaskData=localStorageCopy["chahal"]
    }
    globalTaskData.map((cardData) => {
        taskContents = document.getElementById("taskContentsrow");//making task contents a global variable
        taskContents.insertAdjacentHTML('beforeend',generateTaskCard(cardData))
    })
}