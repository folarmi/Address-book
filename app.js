const ul = document.querySelector("ul");
const li = document.querySelector("li");

const vm = new Vue ({
    el:'#app',
    data() {
      return {
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        isActive:false,
    // columns: ['F.name', 'L.Name', 'PhoneNumber','email'],   
    contacts: [
      {
        id: 1,
        firstName: 'Smith',
        lastName: 'John',
        phoneNumber: '167876578',
        email: 'fola4ril@gmail.com'
      },
      {
        id: 2,
        firstName: 'Smith',
        lastName: 'Mary',
        phoneNumber: '567890',
        email: 'fola4ril@gmail.com'
      }
    ]
  }
    },
    methods: {
        addContact: function() {
              let newContact = new Object ({
                firstName:this.firstName,
                lastName:this.lastName,
                phoneNumber:this.phoneNumber,
                email:this.email,
              }) 
              var spanElement = document.createElement("span");
              
              var icon = document.createElement("i");
              const test2 = icon.classList.add('fas', 'fa-times');
              console.log(test2)
              spanElement.append(icon);
              const test = ul.appendChild(li).append(spanElement)
              console.log(test)

              this.contacts.push(newContact);
              this.firstName = '';          
              this.lastName = '';          
              this.phoneNumber = '';          
              this.email = ''; 
              this.isActive = true;  
        }
    }
})






