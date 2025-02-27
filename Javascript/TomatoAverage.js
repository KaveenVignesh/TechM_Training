
        let prices = [3000,35,40,45,20,25,30]
        let sum = prices.reduce((acc, curr) => acc + curr, 0)
        let avgPrice = sum / 7

        if (avgPrice > 50) {
        console.log("Tomato has given good profit")
        } else {
        console.log("No profit from tomato")
        }
        const person = {
                firstName: "John",
                lastName : "Doe",
                id       : 5566,
                sports :{
                        game1 :"cricket",
                        game2: "footbal",
                        game3 :"baseball"
                },
                fullName : function() {
                  return this.firstName + " " + this.lastName;
                }
              };
              console.log(person.fullName())
              console.log(person["firstName"])
              console.log(person["sports"]["game1"])