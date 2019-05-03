let programmer = {
    name: "Beni", 
    age: 45, 
    workExp: false,
    favoriteLanguages: ['javascript', 'java', 'python'],
    pastWorkExperience: function() {
        let hasWorkExp = programmer.programmerFriends
        if (hasWorkExp.workExp === true) {
            console.log(hasWorkExp.name + " has work experience in the tech industry")
        }
        return pastworkExp()
    },
    programmerFriends: [{
        name: 'Patrice', 
        age: 40, 
        gender: 'female',
        schooling: 'VSchool',
        workExp: {
            hasExp: true,
            companiesWorkedFor: {
                name: 'Domo', 
                yearsAtComp: 5,
            }
        },
        favoriteProgrammingLanguages: [{
            name:'java', 
            yearsOfExperience: 15
            }, 
            {
            name: 'python', 
            yearsOfExperience: 5
            }, 
            {
            name: 'Ruby',
            yearsOfExperience: 3
        },]
        },
        {
        name: 'Marvin', 
        age: 30, 
        gender: 'male',
        schooling: 'VSchool',
        workExp: {
            hasExp: false,
            companiesWorkedFor: {
                name: 'self-employed', 
                yearsAtComp: 4,
            }
        },
        favoriteProgrammingLanguages: [{
            name:'C#', 
            yearsOfExperience: 4
            }, 
            {
            name: 'C++', 
            yearsOfExperience: 4
            }, 
            {
            name: 'python',
            yearsOfExperience: 2
        },]

        },
        {
        name: 'Charles', 
        age: 35, 
        gender: 'male',
        schooling: 'VSchool',
        workExp: {
            hasExp: true,
            companiesWorkedFor: {
                name: 'Adobe', 
                yearsAtComp: 12,
            }
        },
        favoriteProgrammingLanguages: [{
            name:'java', 
            yearsOfExperience: 12}, 
            {
            name: 'PHP', 
            yearsOfExperience: 6
            }, 
            {
            name: 'SQL',
            yearsOfExperience: 3
        }]
    }]
}

