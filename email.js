//emailData object to contain the everything
let emailData = {
    name : 'Gmail',
    //nested object mailboxes to set up nested arrays for each mail type
    mailboxes : {
        Inbox : [
            {email: 'Hello World.'},
            {email: 'Hello Universe.'},
            {email: 'Hello Multiverse.'}
        ],
        Junk : [
            {email: 'junk 1.'},
            {email: 'junk 2.'},
            {email: 'junk 3.'}
        ],
        Sent : [  
            {email: 'Howdy.'},
            {email: 'Good day.'}
        ],
        Draft : []
    },
    Contacts : [
        {name: 'Erin', email: 'Erin@gmail.com', lastMessage: 'How Are ya now?'},
        {name: 'Matt', email: 'Matt@gmail.com', lastMessage: 'Good and you?'},
        {name: 'Julian', email: 'Julian@gmail.com', lastMessage: 'Chipper now.'},
    ]
}

//displays the Email boards and displays the messages in each.
console.log ();
console.log (`Mailbox:`);
for (let mailboxIndex in emailData.mailboxes){
    console.log(`       ${mailboxIndex}: ${emailData.mailboxes[mailboxIndex].length} messages.`);
    for (let message of emailData.mailboxes[mailboxIndex]) {
    console.log (`           "${message.email}"`);
    }
}
console.log ();
console.log (' ');

//displays contacts
console.log ('Contacts: ');
for (let contactIndex of emailData.Contacts) {
    console.log (`Name: ${contactIndex.name}, Email: ${contactIndex.email}`);
}

//function to send message from drafts
function markSent (sentMessage){
    emailData.mailboxes.Sent.push (emailData.mailboxes.Draft.pop());
}
//funtion to add a new draft message
function addDraft (draftMessage){
    emailData.mailboxes.Draft.push ({email: draftMessage}); 
}

//adds an example draft message
console.log ();
let newMessage = 'This is the draft message being sent.';
addDraft(newMessage);
console.log ();
console.log ('adding a new message to draft.');
console.log ();
console.log (`Mailbox:`);
for (let mailboxIndex in emailData.mailboxes){
    console.log(`       ${mailboxIndex}: ${emailData.mailboxes[mailboxIndex].length} messages.`);
    for (let message of emailData.mailboxes[mailboxIndex]) {
    console.log (`           "${message.email}"`);
    }
}
console.log ();

//'sends' the draft message
console.log ();
console.log (`"sending" draft message.`);
markSent(emailData.mailboxes.Draft);
console.log ();
console.log (`Mailbox:`);
for (let mailboxIndex in emailData.mailboxes){
    console.log(`       ${mailboxIndex}: ${emailData.mailboxes[mailboxIndex].length} messages.`);
    for (let message of emailData.mailboxes[mailboxIndex]) {
    console.log (`           "${message.email}"`);
    }
}
console.log ();

//function to get the text : last message, from a contact
function fetchMsg (contactName){
        for (let contact of emailData.Contacts){
                if (contact.name.toLowerCase() == contactName.toLowerCase()){
                    return (`The last message from ${contact.name} is: ${contact.lastMessage}`);
                }
        }
        return ('Contact not found.');
}

let contName ='Matt';
console.log (fetchMsg(contName));
