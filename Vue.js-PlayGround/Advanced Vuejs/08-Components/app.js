const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'fady',
                    name: 'fady amer',
                    phone: '01042355',
                    email: 'fady@gmail.com'
                },
                {
                    id: 'fady 2',
                    name: 'fady 2 amer 2',
                    phone: '01042355234',
                    email: 'fady@gmail.com 2'
                }
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.component('friend-card', {
    template: `
    <li  :key="friend.id">
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'hide' : 'show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
      </ul>
    </li>
  `,
    data() {
        return {
            detailsAreVisible:false,
            friend: {
                id: 'fady 2',
                name: 'fady 2 amer 2',
                phone: '01042355234',
                email: 'fady@gmail.com 2'
            }

        }
    }, methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
)

app.mount('#app')