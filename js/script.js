//Method to build and return a page of user information
const userPage = page => {
    //Calculate starting and ending index of users
    let startingIndex = (page - 1) * 10
    let endingIndex = startingIndex + 10
    //Get array of users
    let displayUsers = users.slice(startingIndex, endingIndex)
    let userList = ''
    //Build users list
    displayUsers.forEach(user => {
        userList += `
        <li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src="${user.picture.large}">
                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <span class="email">${user.email}</span>
            </div>
            <div class="joined-details">
                   <span class="date">Joined ${new Date(user.registered.date).toLocaleDateString()}</span>
           </div>
        </li>`        
    });//get contact list object
    let contactList = document.querySelector('.contact-list')
    contactList.innerHTML = userList
}

//Build pagination buttons//////////////////////////////////////////////////////
let pageCount = Math.ceil(users.length / 10)
let buttons = ''
//Build each list item containing a button with onclick event and page number
for (let i = 1; i <= pageCount; i++) {
    buttons += `
    <li>
        <button type="button" onclick="userPage(${i})">${i}</button>
    </li>`            
}
document.querySelector('.pagination').innerHTML = buttons
///////////////////////////////////////////////////////////////////////////////

// Update total user count text
document.querySelector('.user-count').innerHTML = `Total: ${users.length}`
//Call userPage method to build the first page
userPage(1)