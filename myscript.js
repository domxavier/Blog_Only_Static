function submission() {
    // Get needed elements
    var title = document.getElementById("title");
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var post = document.getElementById("post-content");

    
    // try {
    //     if (age >= 18) {
    //         console.log('You are valid to vote..!!');
    //     } else {
    //         throw {
    //             code: 1001,
    //             message: 'You are not valid to vote...!!'
    //         }
    //     }
    // } catch (ex) {
    //     console.log('There is some error.')
    //     console.log(ex.code + ' : ' + ex.message)
    //     // console.log(ex);
    // }
    
    // try {
    //     if(title.value === '' ||
    //        name.value === '' ||
    //        date.value === '' ||
    //        post.value === '') {
    //            throw {
    //                message: 'Please do not leave any fields blank!'
    //            }
    //         }
    // } catch (ex) {
    //     window.alert(ex.message);
    //     title.value = '';
    //     date.value = '';
    //     name.value = '';
    //     post.value = '';
    //     return;
    // }

    try {
        if(validateForm() === false) {
            throw {
                message: 'Please do not leave any fields blank!'
            }
        }
        
    } catch (ex) {
        window.alert(ex.message);
        return;
    }





    var container_div = document.getElementById("main-content");

    // Post div
    var main_div = document.createElement('div');

    // Creating Header
    var post_title = document.createElement('h2')
    var post_title_text = document.createTextNode(title.value.toString());
    post_title.appendChild(post_title_text);

    // Creating owner and date
    var post_owner_p = document.createElement('p');
    var post_owner = document.createElement('i');
    date_converter(date.value.toString());
    var owner_date_content = "Posted by " + name.value.toString() + " on " + date_converter(date.value.toString());
    var post_owner_text = document.createTextNode(owner_date_content);
    post_owner.appendChild(post_owner_text);
    post_owner_p.appendChild(post_owner);

    // Creating Content
    var post_content = document.createElement('p');
    var post_content_text = document.createTextNode(post.value.toString());
    post_content.appendChild(post_content_text);

    //Attaching to main div
    main_div.appendChild(post_title);
    main_div.appendChild(post_owner_p);
    main_div.appendChild(post_content);

    //Attaching Everything to Container div
    var horizontal_line = document.createElement('hr');
    container_div.appendChild(horizontal_line);
    container_div.appendChild(main_div);

    // console.log(title.value.toString());
    // console.log(name.value.toString());
    // console.log(date.value.toString());
    // console.log(post.value.toString());

    // Clear After Submission
    title.value = '';
    date.value = '';
    name.value = '';
    post.value = '';
}


function date_converter(date) {
    var converted_date = '';

    var year = date.slice(0,4);

    var month = date.slice(5,7);
    if(month === '01') {
        converted_date += 'January ';
    } else if(month === '02') {
        converted_date += 'February ';
    } else if(month === '03') {
        converted_date += 'March ';
    } else if(month === '04') {
        converted_date += 'April ';
    } else if(month === '05') {
        converted_date += 'May ';
    } else if(month === '06') {
        converted_date += 'June ';
    } else if(month === '07') {
        converted_date += 'July ';
    } else if(month === '08') {
        converted_date += 'August ';
    } else if(month === '09') {
        converted_date += 'September ';
    } else if(month === '10') {
        converted_date += 'October ';
    } else if(month === '11') {
        converted_date += 'November ';
    } else if(month === '12') {
        converted_date += 'December ';
    }

    var day = date.slice(8,10);

    converted_date += day + ', ' + year;
    return converted_date;
}

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {
    var title = document.getElementById("title").value;
    var owner = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var content = document.getElementById("post-content").value;

    var titleErr = nameErr = dateErr = contentErr = true;

    // Validate Post Title
    if (title === "") {
        printError("titleErr", "Please give your post a title");
    } else {
        printError("titleErr", "");
        titleErr = false;
    }

    // Validate Title Owner
    var regex = /^[a-zA-Z\s]+$/;
    if (owner === "") {
        printError("nameErr", "Please provide your name");
    } else if (regex.test(owner) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        printError("nameErr", "");
        nameErr = false;
    }

    // Validate Post Date
    if (date === "") {
        printError("dateErr", "Please give the date");
    } else {
        printError("dateErr", "");
        dateErr = false;
    }

    // Validate Post Content
    if(content === "") {
        printError("contentErr", "Please add some content");
    } else {
        printError("contentErr", "");
        contentErr = false;
    }

    if(titleErr || nameErr || dateErr || contentErr) {
        return false;
    } else {
        return true;
    }

}