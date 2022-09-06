var marks = {}

document.addEventListener("DOMContentLoaded", function (event) {
    


    if (localStorage.getItem('marks')) {
        marks = JSON.parse(localStorage.getItem('marks'))
    } else {
        marks = {
            //[total , alt , buz , mix , 50 , vid , est , rapid]
            team1: [0, 0, 0, 0, 0, 0, 0, 0],
            team2: [0, 0, 0, 0, 0, 0, 0, 0],
            team3: [0, 0, 0, 0, 0, 0, 0, 0],
            team4: [0, 0, 0, 0, 0, 0, 0, 0],
            team5: [0, 0, 0, 0, 0, 0, 0, 0]
        }
        localStorage.setItem('marks', JSON.stringify(marks))
    }


    addMarks()

});


let btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let inp = event.target.parentElement.parentElement.childNodes[1].childNodes[1]
        let val = Number(event.target.parentElement.parentElement.childNodes[1].childNodes[1].value)
        let row = event.target.parentElement.parentElement.parentElement.parentElement.className
        let team = event.target.classList[2]
        
        let spanTag = event.target.parentElement.parentElement.parentElement.childNodes[3]
        let spanValue = Number(spanTag.innerText.slice(7))
        

        switch (team) {
            case 'teamA':
                let ta = document.getElementById('team-a-total')
                ta.value = Number(ta.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                marks.team1[0] = Number(ta.value)
                switch (row) {
                    case '1':
                        marks.team1[1] = spanValue + val
                        break;
                    case '2':
                        marks.team1[2] = spanValue + val
                        break;
                    case '3':
                        marks.team1[3] = spanValue + val
                        break;
                    case '4':
                        marks.team1[4] = spanValue + val
                        break;
                    case '5':
                        marks.team1[5] = spanValue + val
                        break;
                    case '6':
                        marks.team1[6] = spanValue + val
                        break;
                    case '7':
                        marks.team1[7] = spanValue + val
                        break;
                    default:
                        break;
                }
                addMarksToLocalStorage()
                break;

            case 'teamB':
                let tb = document.getElementById('team-b-total')
                tb.value = Number(tb.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                marks.team2[0] = Number(tb.value)
                switch (row) {
                    case '1':
                        marks.team2[1] = spanValue + val
                        break;
                    case '2':
                        marks.team2[2] = spanValue + val
                        break;
                    case '3':
                        marks.team2[3] = spanValue + val
                        break;
                    case '4':
                        marks.team2[4] = spanValue + val
                        break;
                    case '5':
                        marks.team2[5] = spanValue + val
                        break;
                    case '6':
                        marks.team2[6] = spanValue + val
                        break;
                    case '7':
                        marks.team2[7] = spanValue + val
                        break;
                    default:
                        break;
                }
                addMarksToLocalStorage()
                break;
            case 'teamC':
                let tc = document.getElementById('team-c-total')
                tc.value = Number(tc.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                marks.team3[0] = Number(tc.value)
                switch (row) {
                    case '1':
                        marks.team3[1] = spanValue + val
                        break;
                    case '2':
                        marks.team3[2] = spanValue + val
                        break;
                    case '3':
                        marks.team3[3] = spanValue + val
                        break;
                    case '4':
                        marks.team3[4] = spanValue + val
                        break;
                    case '5':
                        marks.team3[5] = spanValue + val
                        break;
                    case '6':
                        marks.team3[6] = spanValue + val
                        break;
                    case '7':
                        marks.team3[7] = spanValue + val
                        break;
                    default:
                        break;
                }
                addMarksToLocalStorage()
                break;
            case 'teamD':
                let td = document.getElementById('team-d-total')
                td.value = Number(td.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                marks.team4[0] = Number(td.value)
                switch (row) {
                    case '1':
                        marks.team4[1] = spanValue + val
                        break;
                    case '2':
                        marks.team4[2] = spanValue + val
                        break;
                    case '3':
                        marks.team4[3] = spanValue + val
                        break;
                    case '4':
                        marks.team4[4] = spanValue + val
                        break;
                    case '5':
                        marks.team4[5] = spanValue + val
                        break;
                    case '6':
                        marks.team4[6] = spanValue + val
                        break;
                    case '7':
                        marks.team4[7] = spanValue + val
                        break;
                    default:
                        break;
                }
                addMarksToLocalStorage()
                break;
            case 'teamE':
                let te = document.getElementById('team-e-total')
                te.value = Number(te.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                marks.team5[0] = Number(te.value)
                switch (row) {
                    case '1':
                        marks.team5[1] = spanValue + val
                        break;
                    case '2':
                        marks.team5[2] = spanValue + val
                        break;
                    case '3':
                        marks.team5[3] = spanValue + val
                        break;
                    case '4':
                        marks.team5[4] = spanValue + val
                        break;
                    case '5':
                        marks.team5[5] = spanValue + val
                        break;
                    case '6':
                        marks.team5[6] = spanValue + val
                        break;
                    case '7':
                        marks.team5[7] = spanValue + val
                        break;
                    default:
                        break;
                }
                addMarksToLocalStorage()
                break;

            default:
                console.log('Error');
                break;
        }
    })
});



function addMarks() {
    let totalScoreInputs = document.querySelectorAll('.total-score')
    totalScoreInputs.forEach((teamscore, index) => {
        let teamTotal = marks[`team${index + 1}`]
        teamscore.value = teamTotal[0]
    });
    //for team a
    let teamASpans = document.querySelectorAll('.team-a')
    teamASpans.forEach((teamA , index) => {
        teamA.innerText = `Total: ${marks.team1[index+1]}`
    });
    //for team b
    let teamBSpans = document.querySelectorAll('.team-b')
    teamBSpans.forEach((teamB , index) => {
        teamB.innerText = `Total: ${marks.team2[index+1]}`
    });
    //for team c
    let teamCSpans = document.querySelectorAll('.team-c')
    teamCSpans.forEach((teamC , index) => {
        teamC.innerText = `Total: ${marks.team3[index+1]}`
    });
    //for team d
    let teamDSpans = document.querySelectorAll('.team-d')
    teamDSpans.forEach((teamD , index) => {
        teamD.innerText = `Total: ${marks.team4[index+1]}`
    });
    //for team e
    let teamESpans = document.querySelectorAll('.team-e')
    teamESpans.forEach((teamE , index) => {
        teamE.innerText = `Total: ${marks.team5[index+1]}`
    });
}

function addMarksToLocalStorage(){
    localStorage.setItem('marks', JSON.stringify(marks))
}