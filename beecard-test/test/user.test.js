//Require the dev-dependencies

const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const should = chai.should()
const apiUrl = 'http://localhost:3000'

chai.use(chaiHttp)
describe('Beecard test user', () => {

    describe('/GET user', () => {
        it('it should GET all the users', (done) => {
            chai.request(apiUrl)
                .get('/api/mod_users')
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    describe('/GET/:id user', () => {
        it('it should GET a user by the given id', (done) => {
            let user = {
                username: "admin",
                email: "admin@admin.com",
                id: 1
            }
            chai.request(apiUrl)
                .get('/api/mod_users/' + user.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('username').eql(user.username)
                    res.body.should.have.property('email').eql(user.email)
                    res.body.should.have.property('id').eql(user.id)
                    done()
                })
        })
    })

    describe('/POST/ login', () => {
        it('it should not POST login', (done) => {
            let user = {
                username: "admin",
                password: "password",
                email: "admin@admin.com",
                id: 1,
            }
            chai.request(apiUrl)
                .post('/api/mod_users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('username').eql(user.username)
                    res.body.should.have.property('email').eql(user.email)
                    res.body.should.have.property('session').and.to.have.property('userId').eql(user.id)
                    // (res.body.should.have.property('session').and.to.have.property('id').__flags.object)                    
                    done()
                })
        })
    })
})