// const ListNames = ["shadrack", "kinsimba", "kabazo", "simon", "gatmuch", "nyon",
//     "paldueri", "rim", "kedok", "gatdet", "riala", "micheal",
//     "gloria", "abigael", "exocuer", "florida", "sarah"];
/*
shadrack,kinsimba,kabazo,simon,gatmuch,nyon,
    paldueri,rim,kedok,gatdet,riala,micheal,
    gloria,abigael,exocuer,florida,sarah
 */
var ListNames = [];
const inputNum = document.getElementsByName("number")[0];
let listContainer = document.getElementsByClassName("lists_container")[0];
const btn = document.getElementById("btn");
const InputName = document.getElementById("textarea");
btn.addEventListener("click", function () {
    let values = parseInt(inputNum.value);
    listContainer.innerHTML = " ";
    let temp_con_name = spitInputName();
    const ListLength = ListNames.length;
    GroupFunction(values, ListLength, temp_con_name);
});
//obtain the name of input 
function spitInputName() {
    let value_name = InputName.value;
    ListNames = value_name.split(",");
    return ListNames;
}
GroupFunction = (groups_Num, ListLength, temp_con_name) => {
    //cloning the array containing names
    let cloneLIstNames = [...temp_con_name];
    let cloneLIstNamesLen = cloneLIstNames.length;
    let min = 1;
    let group_members = Math.ceil(ListLength / groups_Num);
    //loop array  for group number
    for (let i = 0; i < groups_Num; i++) {
        let createList = document.createElement("ol");
        let temp_names;
        let temp_createList;
        let temp_create_node;
        // generate random numbers
        function random_func(cloneLIstNamesLen, min) {
            // if (temp_con_random > cloneLIstNamesLen) {
            //     return cloneLIstNames.length - 2;
            // } else {
            return Math.floor((Math.random() * (cloneLIstNamesLen - min)) + min);
            // }
        }
        //creation of list contents
        function Element_creation(temp_con_random) {
            temp_names = cloneLIstNames[temp_con_random];
            //using class to reduce repetation of codes
            temp_createList = document.createElement("li");
            temp_create_node = document.createTextNode(temp_names);
            temp_createList.appendChild(temp_create_node)
            createList.appendChild(temp_createList);
            listContainer.append(createList);
            cloneLIstNames.splice(temp_con_random, 1);

        }
        // display of list elements
        for (let j = 0; j < group_members; j++) {
            var temp_con_random = random_func(cloneLIstNamesLen, min);
            console.log(temp_con_random);
            if (cloneLIstNames[temp_con_random] == undefined) {
                if (cloneLIstNames.length == 0) {
                    break;
                } else {
                    Element_creation(0);
                }

            } else {
                Element_creation(temp_con_random);
            }
        }
        // add the extra elements of an array to the current list 
        if (cloneLIstNames && (groups_Num - 1) == i) {
            let LastElement = listContainer.lastElementChild;
            cloneLIstNames.forEach((value) => {
                //using class to reduce repetation of codes
                let temp_createLi = document.createElement("li");
                let temp_createNode = document.createTextNode(value);
                temp_createLi.appendChild(temp_createNode);
                LastElement.appendChild(temp_createLi);

            }
            );
        }
    }
}           