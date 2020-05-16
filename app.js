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
        show:true,

    contacts: []
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
 
              this.contacts.push(newContact);
              this.firstName = '';          
              this.lastName = '';          
              this.phoneNumber = '';          
              this.email = ''; 
              this.isActive = true;  
        },
        close(index) {
          this.contacts.splice(index,1);
        }
    }
})






