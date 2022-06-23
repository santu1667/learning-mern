process.env.NODE_ENV = "test";

let mongosee = require("mongoose");

let User =require("../model/User");

let chai = require("chai");

let chaiHttp = require("chai-http");

let app = require("../app");

let should=chai.should();

chai.use(chaiHttp);

describe("Users",()=> {
  beforeEach((done)=>{
      User.remove({}),(err)=>{done();}
  });

});

describe("/GET user", () => {
    it("it should GET all the users", (done) => {
      chai
        .request(server)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/GET/userLocation", () => {
    it("it should GET a book by the given id", (done) => {
      let user = new User({
        "userName":"Kunal",
        "email":"Kunal@test.com",
        "age":3,
        "address":{
            "streetAdd1":"4900 Fredericksburg Rd",
            "streetAdd2":"",
            "zip":78240,
            "country":"USA"
        },
        "hobbies":["playing"]
    });
      user.save((err, book) => {
        chai
          .request(server)
          .get("/userLocation/" + 'usr=Kunal')
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("user Kunal found at 4900 Fredericksburg Rd,78240, USA");
            done();
          });
      });
    });
  });